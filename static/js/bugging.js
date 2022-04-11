    // let heroNames = data.map(row => row.Name);
    // let heroAlignment = data.map(row => row.Alignment);
    // let heroIntelligence = data.map(row => row.Intelligence_x);
    // let heroStrength = data.map(row => row.Strength);
    // let heroSpeed = data.map(row => row.Speed);
    // let heroDurability = data.map(row => row.Durability_x);
    // let heroPower = data.map(row => row.Power);
    // let heroCombat = data.map(row => row.Combat);
    // let heroGender = data.map(row => row.Gender);

    d3.csv("/data/employees.csv", function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].Name);
            console.log(data[i].Age);
        }
    });

