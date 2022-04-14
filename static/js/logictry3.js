$(document).ready(function() {
    getData();

});

function getData() {
    d3.csv("static/data/sunburst.csv").then(function(data) {
        // console.log(data);
        labels = ["Male", "Female", "Bad", "Good", "Bad ", "Good "];
        for (i=0; i< 100; i++) {
            if (data[i].Gender === "Male" && data[i].Alignment === "bad") {
                labels.splice(4, 0, data[i].Name);
                // parents.push("Bad" for  data[i].Name.length) ?
                console.log(labels.length);
                console.log(labels);
            } else if (data[i].Gender ==="Male" && data[i].Alignment === "good") {
                labels.splice(((labels.length) - 2), data[i].Name );
                console.log(labels.length)
            } else if (data[i].Gender ==="Female" && data[i].Alignment === "bad") {
                labels.push(data[i].Name);
            } else {
                labels.push(data[i].Name);
            }}
        }
        // parents = ["", "", "Male", "Male", {Bad for the amount of names added in first part of if statement}, {Good for as many in if statement}, "Female", "Female", {bad for as many in if}, {good for as many in if} ]
    )}

    // var data = [{
    //     type: "sunburst",
    //     labels: labels,
    //     parents: ["", "","Male","Male","Good","Good","Bad", "Bad","Female", "Female", "Bad ","Bad ","Good ","Good "],
    //     outsidetextfont: {size: 20, color: "#377eb8"},
    //     // leaf: {opacity: 0.4},
    //     marker: {line: {width: 2}},
    // }];