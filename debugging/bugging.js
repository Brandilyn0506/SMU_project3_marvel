    // let heroNames = data.map(row => row.Name);
    // let heroAlignment = data.map(row => row.Alignment);
    // let heroIntelligence = data.map(row => row.Intelligence_x);
    // let heroStrength = data.map(row => row.Strength);
    // let heroSpeed = data.map(row => row.Speed);
    // let heroDurability = data.map(row => row.Durability_x);
    // let heroPower = data.map(row => row.Power);
    // let heroCombat = data.map(row => row.Combat);
    // let heroGender = data.map(row => row.Gender);

    // d3.csv("/data/employees.csv", function(data) {
    //     for (var i = 0; i < data.length; i++) {
    //         console.log(data[i].Name);
    //         console.log(data[i].Age);
    //     }
    // });

    // function radarPlot(data){
//     let heroIntelligence = data.map(row => row.Intelligence_x);
//     let heroStrength = data.map(row => row.Strength);
//     let heroSpeed = data.map(row => row.Speed);
//     let heroDurability = data.map(row => row.Durability_x);
//     data = [{
//         type: 'scatterpolar',
//         r: [heroIntelligence, heroStrength, heroSpeed, heroDurability],
//         theta: ['Intelligence','Strength','Speed', 'Durability'],
//         fill: 'toself'
//     }]
    
//     layout = {
//         polar: {
//         radialaxis: {
//             visible: true,
//             range: [0, 500]
//         }
//         },
//         showlegend: false
//     }
    
//     Plotly.newPlot("radar", data, layout)
// }

// iteration idea to use for plotly sunburst 
// d3.csv("static/data/sunburst.csv").then(function(data) {  
//     labels = ["Male", "Female", "Bad", "Good", "Bad ", "Good "];
//     for (i=0; i< data.length; i++) {
//         if (data[i].Gender === "Male" && data[i].Alignment === "bad") {
//             labels.splice(4, 0, data[i].Name);
//             // parents.push("Bad" for  data[i].Name.length) ?
//             console.log(labels.length);
//             console.log(labels);
//         } else if (data[i].Gender ==="Male" && data[i].Alignment === "good") {
//             labels.splice(((labels.length) - 2), data[i].Name );
//             console.log(labels.length)
//         } else if (data[i].Gender ==="Female" && data[i].Alignment === "bad") {
//             labels.push(data[i].Name);
//         } else {
//             labels.push(data[i].Name);
//         }}
//     }
//     }
// });

// d3.csv("hours-of-tv-watched.csv").then(function(tvData) {

    //     // Print the tvData
    //     console.log(tvData);
      
    //     // Cast the hours value to a number for each piece of tvData
    //     tvData.forEach(function(data) {
    //       data.hours = +data.hours;
    //     });
      
    //     var barSpacing = 10; // desired space between each bar
    //     var scaleY = 10; // 10x scale on rect height
      
    //     // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
    //     var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;
      
    //     // @TODO
    //     // Create code to build the bar chart using the tvData.
    //     chartGroup.selectAll(".bar")
    //       .data(tvData)
    //       .enter()
    //       .append("rect")
    //       .classed("bar", true)
    //       .attr("width", d => barWidth)
    //       .attr("height", d => d.hours * scaleY)
    //       .attr("x", (d, i) => i * (barWidth + barSpacing))
    //       .attr("y", d => chartHeight - d.hours * scaleY);
    //   }).catch(function(error) {
    //     console.log(error);
    //   });

          // function unpack(rows, key) {
      //   return rows.map(function(row) { return row[key]; });
      // }
  // var data = [
  //     {
  //       type: "sunburst",
  //       maxdepth: 3,
  //       ids: unpack(rows, 'ids'),
  //       labels: unpack(rows, 'labels'),
  //       parents:unpack(rows, 'parents')
  //     }
  //   ];