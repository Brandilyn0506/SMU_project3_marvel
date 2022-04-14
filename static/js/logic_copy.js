$(document).ready(function() {
    getData();

});

function getData() {
    d3.csv("static/data/sunburst.csv").then(function(data) {  
        // let name = data.Name[2];
        // let gender = data.Gender[0];
        // let alignment = data.Alignment[1]; 
        // if (data.Gender == 'Male') {
        //     console.log(data.Name[i]);
        // }
        // else {
        //     // console.log(data.Name[i]);
        // }
        // // function unpack(rows, key) {
        //     return rows.map(function(row) { return row[key]; 
        //     });
        //   };
        }
    });
}
// function getSunbust() { 

    // }

    // var data = [
    //     {
    //       type: "sunburst",
    //       maxdepth: 3,
    //       ids: unpack(rows, 'Gender'),
    //       labels: unpack(rows, 'Name'),
    //       parents:unpack(rows, 'Alignment')
    //     }
    //   ];
    
    // var layout = {
    //     margin: {l: 0, r: 0, b: 0, t:0},
    //     sunburstcolorway:[
    //         "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
    //         "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
    //   ],
    //     extendsunburstcolorway: true
    // };
    
    // Plotly.newPlot('sunburst', data, layout);
// }


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