

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
  
  
          
  var names = globalData.map(x => x["Name"]);
  let alignment = globalData.map(x => x["Alignment"]); 
  let intelligence = globalData.map(x => +x["Intelligence_x"])[259]; 
  let strength = globalData.map(x => +x["Strength"]); 
  let speed = globalData.map(x => +x["Speed"]);
  let durability = globalData.map(x => +x["Durability_x"]); 
  let power = globalData.map(x => +x["Power"]); 
  let combat = globalData.map(x => +x["Combat"]); 

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
r: [63,19,35,56,46,100,],
theta: ["intelligence","strength","speed","durability","power","combat"],
fill: 'toself',
name: 'Captain America',
marker : { color : '#00008b'}
},
{
  type: 'scatterpolar',
  r: [75,10,12,14,19,80],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  name: 'Red Skull',
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
