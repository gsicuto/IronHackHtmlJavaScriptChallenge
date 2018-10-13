// Rover Object Goes Here
// ======================
var matrix=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
];

var rover = {direction:"N",
posX: 5,
posY: 5,
travelLog: new Array()};

function incrementLog(rover){
  rover.travelLog[rover.travelLog.length] = "O Rover passou por: x: "+rover.posX+" y: "+rover.posY +" direção: "+rover.direction;
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
     rover.direction = "W";
     console.log("Rover is facing West!");
     break;

    case "W":
     rover.direction = "S";
     console.log("Rover is facing South!");
     break;

    case "S":
     rover.direction = "E";
     console.log("Rover is facing East!");
     break;

    case "E":
     rover.direction = "N";
     console.log("Rover is facing North!");
     break;
  }
  incrementLog(rover);
  console.log("Rover is in direction:" + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
     rover.direction = "E";
     console.log("Rover is facing West!");
     
     break;
    case "E":
     rover.direction = "S";
     console.log("Rover is facing South!");
     
     break;
    case "S":
     rover.direction = "W";
     console.log("Rover is facing East!");
     
     break;
    case "W":
     rover.direction = "N";
     console.log("Rover is facing North!");
     
     break;
  }
  incrementLog(rover);
  console.log("Rover is in direction:" + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")

  switch (rover.direction){
    case "N":
     rover.posY = rover.posY-1;
     
     break;
    case "W":
     rover.posX = rover.posX-1;
     
     break;
    case "S":
     rover.posY = rover.posY+1;
     
     break;
    case "E":
      rover.posX = rover.posX +1;
      
      break;
  }
  incrementLog(rover);
  console.log("A nova Posição é: x: "+rover.posX+" y: "+rover.posY);
}

function moveBackward(rover){
  console.log("moveBackward was called")

  switch (rover.direction){
    case "N":
     rover.posY = rover.posY+1;
     break;

    case "W":
     rover.posX = rover.posX+1;
     break;

    case "S":
     rover.posY = rover.posY-1;
     break;

    case "E":
      rover.posX = rover.posX -1;
      break;
  }
  incrementLog(rover);
  console.log("A nova Posição é: x: "+rover.posX+" y: "+rover.posY);
}

function moveCommand (rover, task){
  var x = task;
  for(var i = 0; i < x.length; i++){

    if(x[i]!="f" && x[i]!= "l" && x[i]!="r" && x[i]!="b"){
      console.log("Comando "+x[i]+" inválido!");
    }

    switch(x[i]){
      case "f":
      moveForward(rover);
      break;

      case "l":
      turnLeft(rover);
      break;

      case "r":
      turnRight(rover);
      break;

      case "b":
      moveBackward(rover);
      break;
    } 
  }
  for(var i = 0; i< rover.travelLog.length; i++){
  
    console.log(rover.travelLog[i]); 
  }
}
