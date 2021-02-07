
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var rubber;
var plane;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(mouseX, mouseY, 70, 20);
	stone = new Stone(500, 900, 60, 60);
	rubber = new Rubber(900, 1000, 50, 100);
	plane = new Plane(5, 1175, 1200, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
stone.display(); 
rubber.display();
plane.display();
}



