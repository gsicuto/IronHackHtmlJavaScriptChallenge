// Rover Object Goes Here
// ======================


var rover1 = {
 name:"rover1",
 direction:"N",
 posX: 0,
 posY: 0,
 travelLog: new Array()};

var rover2 ={
 name:"rover2",
 direction:"N",
 posX: 0,
 posY: 0,
 travelLog:new Array()};

 var matrix=[
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","x","","","",""],
  ["","","","",rover2,rover1,"","","",""],
  ["","","","","","x","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""]
  ];

function initialize(matrix){
  for(i=0;i < matrix.length;i++){
    for(j=0;j < matrix[i].length;j++){
      if(typeof(matrix[i][j])=="object"){
        matrix[i][j].posX=j;
        matrix[i][j].posY=i;
        console.log(matrix[i][j]);
      }
    }
  }
}

initialize(matrix);


function detectObstacle (matrix,posX,posY){
  //console.log (posX + ""+ posY);
  if(matrix[posY][posX] !== ""){
    return false
  }
  else return true
}

function incrementLog(rover){
  rover.travelLog[rover.travelLog.length] = "O "+rover.name+" passou por: x: "+rover.posX+" y: "+rover.posY +" direção: "+rover.direction;
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
     rover.direction = "W";
     console.log(rover.name+" is facing West!");
     break;

    case "W":
     rover.direction = "S";
     console.log(rover.name+" is facing South!");
     break;

    case "S":
     rover.direction = "E";
     console.log(rover.name+" is facing East!");
     break;

    case "E":
     rover.direction = "N";
     console.log(rover.name+" is facing North!");
     break;
  }
  incrementLog(rover);
  console.log(rover.name+" is in direction:" + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
     rover.direction = "E";
     console.log(rover.name+" is facing East!");
     
     break;
    case "E":
     rover.direction = "S";
     console.log(rover.name+" is facing South!");
     
     break;
    case "S":
     rover.direction = "W";
     console.log("Rover is facing West!");
     
     break;
    case "W":
     rover.direction = "N";
     console.log("Rover is facing North!");
     
     break;
  }
  incrementLog(rover);
  console.log(rover.name+" is in direction:" + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")

  switch (rover.direction){
    case "N":
     if(detectObstacle(matrix,rover.posY-1,rover.posX)){
      matrix[rover.posY][rover.posX]="";
      matrix[rover.posY-1][rover.posX]=rover;
      rover.posY = rover.posY-1;
      //console.log(matrix);
     } 
     else console.log("Obstaculo encontrado N")
     
     break;
    case "W":
    if(detectObstacle(matrix,rover.posY,rover.posX-1)){
      matrix[rover.posY][rover.posX]="";
      matrix[rover.posY][rover.posX-1]=rover;
      rover.posX = rover.posX-1;
     } 
     else console.log("Obstaculo encontrado")
     
     break;
    case "S":
    if(detectObstacle(matrix,rover.posY+1,rover.posX)){
     matrix[rover.posY][rover.posX]="";
     matrix[rover.posY+1][rover.posX]=rover;
     rover.posY = rover.posY+1;
    }
    else console.log("Obstaculo encontrado")
    break;
    case "E":
    if(detectObstacle(matrix,rover.posY,rover.posX+1)){
     matrix[rover.posY][rover.posX]="";
     matrix[rover.posY][rover.posX+1]=rover;
     rover.posX = rover.posX+1;
    }
    else console.log("Obstaculo encontrado")
      break;
  }
  incrementLog(rover);
  console.log("A Posição do "+rover.name+" é x:" +rover.posX+" y: "+rover.posY);
  console.log(matrix);
}

function moveBackward(rover){
  console.log("moveBackward was called")

  switch (rover.direction){
    case "N":
     if(detectObstacle(matrix,rover.posY+1,rover.posX)){
      matrix[rover.posY][rover.posX]="";
      matrix[rover.posY+1][rover.posX]=rover;
      rover.posY = rover.posY+1;
     } 
     else console.log("Obstaculo encontrado")
     
     break;
    case "W":
    if(detectObstacle(matrix,rover.posY,rover.posX+1)){
      matrix[rover.posY][rover.posX]="";
      matrix[rover.posY][rover.posX+1]=rover;
      rover.posX = rover.posX+1;
     } 
     else console.log("Obstaculo encontrado")
     
     break;
    case "S":
    if(detectObstacle(matrix,rover.posY-1,rover.posX)){
     matrix[rover.posY][rover.posX]="";
     matrix[rover.posY-1][rover.posX]=rover;
     rover.posY = rover.posY-1;
    }
    else console.log("Obstaculo encontrado")
    break;
    case "E":
    if(detectObstacle(matrix,rover.posY,rover.posX-1)){
     matrix[rover.posY][rover.posX]="";
     matrix[rover.posY][rover.posX-1]=rover;
     rover.posX = rover.posX-1;
    }
    else console.log("Obstaculo encontrado")
      break;
  }
  incrementLog(rover);
  console.log("A Posição do "+rover.name+" é x:" +rover.posX+" y: "+rover.posY);
  console.log(matrix);
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
  for(var i = ""; i< rover.travelLog.length; i++){
  
    console.log(rover.travelLog[i]); 
  }
}
