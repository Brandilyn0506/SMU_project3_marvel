$(document).ready(function() {
  getDataAndPlot();

});

function getDataAndPlot() {
// iteration idea to use for plotly sunburst 
  d3.csv("static/data/sunburst.csv").then(function(data) {  
      labels = ["Male", "Female","Bad","Good", "Neutral", "Bad ", "Good ", "Neutral "];
      parents = ["", "","Male","Male","Male", "Female", "Female", "Female"];
      colors = ["#518cca", "#f78f3f", "#e23636", "#504a4a","#000000", "#e23636", "#504a4a", "#000000"];
      for (i=0; i< data.length; i++) {
          if (data[i].Gender === "Male" && data[i].Alignment === "bad") {
              labels.push(data[i].Name);
              parents.push("Bad");  
              colors.push("#e23636");            
          } else if (data[i].Gender ==="Male" && data[i].Alignment === "good") {
              labels.push(data[i].Name);
              parents.push("Good"); 
              colors.push("#504a4a")              
          } else if (data[i].Gender ==="Male" && data[i].Alignment === "neutral") {
            labels.push(data[i].Name);
            parents.push("Neutral"); 
            colors.push("#000000");             
          } else if (data[i].Gender ==="Female" && data[i].Alignment === "bad") {
              labels.push(data[i].Name);
              parents.push("Bad ");
              colors.push("#e23636");               
          } else if (data[i].Gender ==="Female" && data[i].Alignment === "good") {
              labels.push(data[i].Name);
              parents.push("Good "); 
              colors.push("#504a4a");   
          } else if (data[i].Gender ==="Female" && data[i].Alignment === "neutral") {
            labels.push(data[i].Name);
            parents.push("Neutral ");  
            colors.push("#000000"); 
          }
      }
      console.log(labels);
      console.log(parents);

    var data = [
        {
          type: "sunburst",
          maxdepth: 3,
          labels: labels,
          parents: parents,
          insidetextorientation: 'radial',
          marker: {
            colors: colors
          }
        }
      ];
    var layout = {
      margin: {l: 0, r: 0, b: 0, t:0}
      // sunburstcolorway:[
      //   "#518cca",
      //   "#f78f3f",
      //   "#504a4a"
      // ],
      // extendsunburstcolorway: true
    };
    Plotly.newPlot('sunburst', data, layout);
  });
}