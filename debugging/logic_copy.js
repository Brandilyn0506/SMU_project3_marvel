$(document).ready(function() {
    getData();

});

function getData() {
    d3.json('data/bad_male.json', function(data) {
    // function(err, rows){
        // function unpack(rows, key) {
        // return rows.map(function(row) { return row[key]; });
        console.log(data);

    // var data = [
    //     {
    //     type: "sunburst",
    //     maxdepth: 3,
    //     labels: unpack(rows, 'Names'),
    //     parents: ["Males", "Bad"],
    //     values: unpack(rows, 'Values')
    //     }
    // ];

    // var layout = {
    // margin: {l: 0, r: 0, b: 0, t:0},
    // sunburstcolorway:[
    //     "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
    //     "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
    // ],
    // extendsunburstcolorway: true
    // };


    // Plotly.newPlot('sunburst', data, layout);

    // setInterval(function () {
    //     var values = data[0].values.slice().reverse();
    //     Plotly.animate('sunburst', {
    //       data: [{ values: values }],
    //     }, {
    //       transition: {
    //         duration: 500,
    //         easing: 'cubic-in-out',
    //       },
    //       frame: {
    //         duration: 500,
    //       }
    //     });
    // }, 2000);
    }
)}
