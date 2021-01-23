
var ground;
var paper,dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var	dimg;
var rope1;
function  preload()
{
	dimg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,300);

	rope1= new Launcher(paper.body,{x:200,y:200})

	dustbin1 = new Dustbin(1004, 295, 20, 230);
	dustbin2 = new Dustbin(902, 401, 200, 20);
	dustbin3 = new Dustbin(797, 295, 20, 230);
	
	ground = new Ground(600,400,1400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


	ground.display();
	image(dimg,800.5,143,200,238);
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
    rope1.display();
  drawSprites();
 
}




function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.cut();
}
