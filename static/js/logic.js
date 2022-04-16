// $(document).ready(function() {
//     // getData();
// });

// function getData() {
//     d3.csv("static/data/sunburst.csv").then(function(data) {  
//         console.log(data);
// });

var data = [{
    type: "sunburst",
    labels: ["Male", "Female","Bad","Good","Abomb","Abe Sapien","Abomination","Amazo","Bad ", "Good ", "Arclite","Bloodaxe","Angel Salvadore", "Arachne"],
    parents: ["", "","Male","Male","Good","Good","Bad", "Bad","Female", "Female", "Bad ","Bad ","Good ","Good "],
    outsidetextfont: {size: 20, color: "#377eb8"},
    // leaf: {opacity: 0.4},
    marker: {line: {width: 2}},
}];
var layout = {
    margin: {l: 0, r: 0, b: 0, t:0},
    sunburstcolorway:["#636efa","#ef553b","#00cc96"],
};
Plotly.newPlot("plot", data, layout)

// }