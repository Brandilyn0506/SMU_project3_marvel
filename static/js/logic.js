$(document).ready(function() {
    getDataAndPlot();
});

function getDataAndPlot() {
    // d3.csv("static/data/final_df.csv", function(data) {
    //     console.log(data)
    // });
    d3.csv("static/data/finat_df.csv", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
        }
    }
// Add rest of variables
    // makePlot(data);
// }

// function makePlot(data) {

    var trace = [
        {
        type: "sunburst",
        maxdepth: 3,
        alignment: unpack(rows, 'Alignment'),
        names: unpack(rows, 'Name'),
        intelligence: unpack(rows, 'Intelligence_x')
        }
      ];
    
    var layout = {
        margin: {l: 0, r: 0, b: 0, t:0},
        sunburstcolorway:[
            "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
            "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
        ],
        extendsunburstcolorway: true
    };


    Plotly.newPlot('sunburst', trace, layout, {showSendToCloud: true});

}


