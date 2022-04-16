



$(document).ready(function() {
    console.log("Loaded Page");
    Working();

    });



function Working() {
      let filepath = "data/final_df.csv";
      requestD3(filepath);
      createRadar();
      createRadar2();
  }
  




function requestD3(filepath){
  
  d3.csv(filepath).then(function(data) {
         
          
    let names = data.map(x => x["Name"]);
    let alignment = data.map(x => x["Alignment"]); 
    let intelligence = data.map(x => +x["Intelligence_x"]); 
    let strength = data.map(x => +x["Strength"]); 
    let speed = data.map(x => +x["Speed"]);
    let durability = data.map(x => +x["Durability_x"]); 
    let power = data.map(x => +x["Power"]); 
    let combat = data.map(x => +x["Combat"]); 

    console.log(names);
    console.log(alignment);
    console.log(intelligence);
    console.log(strength);
    console.log(speed);
    console.log(durability);
    console.log(power);
    console.log(combat);


      
  });
  
}
  

function createRadar() {

  var data = [{
  type: 'scatterpolar',
  r: [100,85,58,85,100,64],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  name: 'Iron Man',
  marker : { color : '#FF0000'}
  },
  {
    type: 'scatterpolar',
    r: [88,100,17,100,100,80],
    theta: ["intelligence","strength","speed","durability","power","combat"],
    fill: 'toself',
    name: 'Thanos',
    marker : { color : '#A865C9'}
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
