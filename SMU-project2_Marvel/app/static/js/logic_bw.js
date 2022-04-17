
$(document).ready(function() {
    console.log("Loaded Page");
    Working();

    
    });



function Working() {
      let filepath = "data/final_df.csv";
      requestD3(filepath);
      createRadar();
}
function requestD3(filepath){
  
  d3.csv(filepath).then(function(data) {
          console.log(data);   

          
  });
  
}

function createRadar() {

  var data = [{
  type: 'scatterpolar',
  r: [75,13,27,32,32,100],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  name: 'Black Widow',
  marker : { color : '#000000'}
  },
  {
    type: 'scatterpolar',
    r: [63,80,33,80,84,84],
    theta: ["intelligence","strength","speed","durability","power","combat"],
    fill: 'toself',
    name: 'Bloodaxe',
    marker : { color : '#C21807'}
    }
  ]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 100]
      }
    }
  }
  
  Plotly.newPlot("Radar", data, layout)

  
  
}

