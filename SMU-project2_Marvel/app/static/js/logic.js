
var globalData;


$(document).ready(function() {
    console.log("Loaded Page");
    Working();

    $("#selDataset").on("change", function() {
      makeDashboard();
   
    });

});

function Working() {
      let filepath = "data/final_df.csv";
      requestD3(filepath);
  }
  
function makeDashboard() {
  let name = $("#selDataset").val();
  var result = globalData.filter(x=>x.Name===name)[0];

  
  createRadar(result);

  
}

function requestD3(filepath){
  
  d3.csv(filepath).then(function(data) {
          // console.log(data);  
          
                
    let name_array = data.map(x=>x.Name)
    console.log(name_array);
    createDropdown(name_array);
    globalData=data;
    makeDashboard();
 
      
  });
  
}
  
function createDropdown(hero) {
  for (let i = 0; i < hero.length; i++) {
      let super_hero = hero[i];
      let html = `<option>${super_hero}</option>`;
      $("#selDataset").append(html);
    }
}

function createRadar(hero) {

  var data = [{
  type: 'scatterpolar',
  r: [hero.Intelligence_x,hero.Strength,hero.Speed,hero.Durability_x,hero.Power,hero.Combat],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  marker: { color : '#C21807'}
  }]

  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 100],
        
      }
    },
    showlegend: false
  }
    
  Plotly.newPlot("Radar", data, layout)
            
  
}
