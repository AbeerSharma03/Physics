const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var gameEngine,gameWorld;
//var object;

function setup() {
  createCanvas(800,400);
  gameEngine = Engine.create();
  gameWorld = gameEngine.world;

  var option = {
    isStatic : true

  }

ground = Bodies.rectangle(400,380,800,30,option);
  World.add(gameWorld,ground)

  var option1= {
    restitution:0.7
  }

  ball = Bodies.circle(200,100,30,option1);
  World.add(gameWorld,ball);

  //console.log(object.position.x);
  //console.log(object.position.y);
  
}

function draw() {
  background(0); 
  Engine.update(gameEngine);
  rectMode(CENTER);
  
rect(ground.position.x,ground.position.y,800,30);
ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,30,30); 


  
}





