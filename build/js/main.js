function init(entry) {
    d3.csv("data.csv", function(error, data) { // Load datasheet
        // Global vars
        var rowAdd = 1.5, // Aantal dat per rij wordt toegevoegd
            radiusAdd = 1.5; // Hoeveelheid die wordt toegevoegd

        // Person vars
        var personX = 0,
            personCounter = 0,
            personHeight = 0.3,
            personBaseRadius = 10;

        // Cube vars
        var cubeX = 0,
            cubeCounter = 0,
            cubeHeight = 0.1,
            cubeBaseRadius = 10;

        var dataAmount = [];

        // Colors
        var colors = ["#ffcc00","#e1b600","#f39200","#ce7c00","#e94c0a","#b23d02","#af0e80","#82045e","#0058b8","#163a72","#00a1cd","#0581a2","#53a31d","#488225","#afcb05","#899d0c"];

        // Empty Array that loads the data from the CSV
        for(i=0; i<parseInt(data[entry].age1830); i++){ dataAmount.push(0); }
        for(i=0; i<parseInt(data[entry].age3045); i++){ dataAmount.push(1); }
        for(i=0; i<parseInt(data[entry].age4560); i++){ dataAmount.push(2); }
        for(i=0; i<parseInt(data[entry].age6075); i++){ dataAmount.push(3); }
        for(i=0; i<parseInt(data[entry].age75plus); i++){ dataAmount.push(4); }

        var scene = d3.select("a-entity#stand");
        var person = scene
            .selectAll("a-entity#person")
            .data(dataAmount)
            .enter()
            .append("a-entity")
            .classed("person", true)
            .attrs({ // New attrs
                "mixin": "person",
                position: function(d, i) {
                    var radius = personBaseRadius;
                    var theta = (personX / 72) * (2 * Math.PI);
                    personCounter++;
                    if (personCounter > 5) { personCounter = 0; } // Reset counter after each row;

                    switch (personCounter) {
                        case 1: case 2: case 3: case 4: case 5:
                            radius = personBaseRadius + (radiusAdd * personCounter);
                            y = personHeight * personCounter; break;
                        case 0:
                            radius = personBaseRadius+(radiusAdd*6);
                            y = personHeight*6;
                            personX += rowAdd; break; // Move one to the side
                    }

                    x = radius * Math.cos(theta);
                    z = radius * Math.sin(theta);

                    return x + " " + y + " " + z;
                },
                rotation: function(d,i) {
                    var x = 0;
                    var y = (180 * -i/150) + 90;
                    var z = 0;

                    return x + " " + y + " " + z;
                },
                material: function(d, i) {
                    switch (d) {
                        case 0: return "color:" + colors[0]; break;
                        case 1: return "color:" + colors[6]; break;
                        case 2: return "color:" + colors[8]; break;
                        case 3: return "color:" + colors[12]; break;
                        case 4: return "color:" + colors[4]; break;
                    }
                }
            });
        var boxes = scene
            .selectAll("a-box.seat")
            .data(dataAmount)
            .enter()
            .append("a-box")
            .classed("seat", true)
            .attrs({ // New attrs
                position: function(d, i) {
                    var radius = cubeBaseRadius;
                    var theta = (cubeX / 72) * (2 * Math.PI);
                    cubeCounter++;
                    if (cubeCounter > 5) { cubeCounter = 0; } // Reset counter after each row;

                    switch (cubeCounter) {
                        case 1: case 2: case 3: case 4: case 5:
                            y = cubeHeight * cubeCounter;
                            radius = cubeBaseRadius + (radiusAdd * cubeCounter); break;
                        case 0:
                            y = cubeHeight * 6;
                            radius = cubeBaseRadius + (radiusAdd * 6);
                            cubeX += rowAdd; break; // Move one to the side
                    }

                    x = radius * Math.cos(theta);
                    z = radius * Math.sin(theta);

                    return x + " " + y + " " + z;
                },
                rotation: function(d,i) {
                    var x = 0;
                    var y = 180 * -i/144;
                    var z = 0;

                    return x + " " + y + " " + z
                },
                height: function(d, i) {
                    var newHeight, height = 0.4;
                    cubeCounter++;
                    if (cubeCounter > 5) { cubeCounter = 0; } // Reset counter after each row;

                    switch (cubeCounter) {
                        case 1: case 2: case 3: case 4: case 5: newHeight = height * cubeCounter; break;
                        case 0: newHeight = height * 6; cubeX += rowAdd; break;
                    }

                    return newHeight;
                },
                material: function(d,i){
                    switch (d) {
                        case 0: return "color:" + colors[1]; break;
                        case 1: return "color:" + colors[7]; break;
                        case 2: return "color:" + colors[9]; break;
                        case 3: return "color:" + colors[13]; break;
                        case 4: return "color:" + colors[5]; break;
                    }
                }
            })
    });
}

function cleanScene(entry) {
    d3.select("a-entity#stand").selectAll("*").remove();
    // console.log("cleaned!");
    dataAmount = [];
    init(entry);
}

init(0);
