$(document).ready(function() {
    getDataAndPlot();
});

function getDataAndPlot() {
    var margin = {top: 20, right: 30, bottom: 40, left:80},
    width = 460 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#barchart")
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    d3.csv("static/data/top_fifty.csv").then(function(data) {

        // Add X axis
        var x = d3.scaleLinear()
            .domain([0, 50])
            .range([ 0, width]);
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Y axis
        var y = d3.scaleBand()
            .range([ 0, height ])
            .domain(data.map(function(data) { 
                return data.Name; 
            }))
            .padding(.1);
            svg.append("g")
            .call(d3.axisLeft(y))

        //Bars
        svg.selectAll("myRect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", 50 )
            .attr("y", function(data) { 
                return y(data.Name); 
            })
            .attr("width", function(data) { 
                return x(data.powers_total); 
            })
            .attr("height", y.bandwidth() )
            .attr("fill", "#e23636")
    })

}
// https://d3-graph-gallery.com/graph/barplot_horizontal.html
