$(document).ready(function() {
    init();
});

// Initialize 
function init() {
    d3.csv("static/data/final_df.csv").then((data)=>{
        console.log(data);
        var display = d3.select("#selDataset");
        var hero_names = data.names;
        sample_names.forEach((data_sample)=>{
            display.append("option")
            .text(data_sample)
            .property("value", data_sample);
        })
        var sample= sample_names[0];
        // getData(sample);
        getPlot(sample);

    })
}

// Bubble plot
function getPlot(sample_id) {
    d3.json("static/data/samples.json").then((data)=>{
        var sample_data= data.samples;
        var filter_data = sample_data.filter(x=>x.id == sample_id);
        var filtered = filter_data[0];
        var names = filtered.Name;
        var alignment = filtered.Alignment
        var sample_value = filtered.;
        var bubbleData = [{
            x: otu_id,
            y: sample_value,
            text: otu_label,
            mode: "markers",
            marker: {
                size: sample_value,
                color: otu_id,
                colorscale: "Bluered"
            }
        }]
        var layout = {
            title: {
            text:'Biodiversity Samples in Belly Buttons',
            font: {
                family: 'Courier New, monospace',
                size: 24
            },
            xref: 'paper',
            x: 0.05,
            },
            xaxis: {
                title: {
                text: 'OTU IDs',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
                },
            },
            yaxis: {
                title: {
                text: 'Sample Values',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
                  }
            }
        }
        Plotly.newPlot("bubble", bubbleData, layout);
    })
}