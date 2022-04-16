
var globalData;


$(document).ready(function() {
    console.log("Loaded Page");
    Working();

    $("#selDataset").on("change", function() {
      makeDashboard();

    $("#selDataset2").on("change",function(){
      makeDashboard2();
    })
   
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
function makeDashboard2(){
  let name2 = $("#selDataset2").val();
  var result2 = globalData.filter(x=>x.Name===name2)[0];
  createRadar2(result2);
}

function requestD3(filepath){
  
  d3.csv(filepath).then(function(data) {
          // console.log(data);  
          
                
    let name_array = data.map(x=>x.Name)
    console.log(name_array);
    createDropdown(name_array);
    createDropdown2(name_array);
    globalData=data;
    makeDashboard();
    makeDashboard2();
 
      
  });
  
}
  
function createDropdown(hero) {
  for (let i = 0; i < hero.length; i++) {
      let super_hero = hero[i];
      let html = `<option>${super_hero}</option>`;
      $("#selDataset").append(html);
    }
}

function createDropdown2(hero2) {
  for (let i = 0; i < hero2.length; i++) {
      let super_hero2 = hero2[i];
      let html2 = `<option>${super_hero2}</option>`;
      $("#selDataset2").append(html2);
    }
}

function createRadar(hero) {

  var data = [{
  type: 'scatterpolar',
  r: [hero.Intelligence_x,hero.Strength,hero.Speed,hero.Durability_x,hero.Power,hero.Combat],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  marker: { color : '#518cca'}
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

function createRadar2(hero2) {

  var data = [{
  type: 'scatterpolar',
  r: [hero2.Intelligence_x,hero2.Strength,hero2.Speed,hero2.Durability_x,hero2.Power,hero2.Combat],
  theta: ["intelligence","strength","speed","durability","power","combat"],
  fill: 'toself',
  marker: { color : '#f78f3f'}
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
    
  Plotly.newPlot("Radar2", data, layout)
            
  
}
