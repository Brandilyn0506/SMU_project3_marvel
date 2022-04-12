$(document).ready(function() {
    getDataAndPlot();
});

function getDataAndPlot() {
    d3.csv("/static/data/final_df.csv").then(function(rows) {  
        console.log(rows)
        makePlot(rows);
    });
}
function unpack(rows, key) {
    return rows.map(function(row) {return row[key]; });
}

function makePlot(rows) {
    var trace = [
        {
        type: "sunburst",
        maxdepth: 3,
        ids: unpack(rows, 'Name'),
        labels: unpack(rows, 'Gender'),
        parents: unpack(rows, 'Alignment')
        }
      ];
    
    var layout = {
        margin: {l: 0, r: 0, b: 0, t:0},
        sunburstcolorway:[
            "#636efa","#EF553B","#00cc96"
        ],
        extendsunburstcolorway: true
    };


    Plotly.newPlot('sunburst', trace, layout);

}

