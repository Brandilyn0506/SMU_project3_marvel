$(document).ready(function() {
    getData();

});

function getData() {
    d3.csv("static/data/sunburst.csv").then(function(data) {
        // console.log(data);
        labels = ["Male", "Female", "Bad", "Good", "Bad ", "Good "];
        console.log(labels.indexOf("Good"));
        for (i=0; i< 5; i++) {
            console.log(data[i].Gender);
            if (data[i].Gender ==="Male" && data[i].Alignment === "bad") {
                labels.push(indexOf("Bad ").data[i].Name);
            } else if (data[i].Gender ==="Male" && data[i].Alignment === "good") {
                labels.push(indexOf("Bad ", -1));
            } else if (data[i].Gender ==="Female" && data[i].Alignment === "bad") {
                labels.push(indexOf("Good ", 1).data[i].Name);
            } else {
                labels.push(data[i].Name);
            }}
        console.log(labels);
        // }
    })
}
// labels.push(indexOf((labels.indexOf("Good ") + 1))

    // var data = [{
    //     type: "sunburst",
    //     labels: ["Male", "Female", "Bad", "Good", "Abomb", "Abe Sapien", "Abomination", "Amazo", "Bad ", "Good ", "Arclite", "Bloodaxe", "Angel Salvadore", "Arachne"],
    //     parents: ["", "","Male","Male","Good","Good","Bad", "Bad","Female", "Female", "Bad ","Bad ","Good ","Good "],
    //     outsidetextfont: {size: 20, color: "#377eb8"},
    //     // leaf: {opacity: 0.4},
    //     marker: {line: {width: 2}},
    // }];