
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var side1, side2, side3;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(40, 10, 20)
	ground = new Ground(400, 650, 800, 10)
	side1 = new Side (550,630,200,20)
	side2 = new Side(450,620,20,40)
	side3 = new Side(650,620,20,40)

	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	paper1.display();
	ground.display();
	side1.display();
	side2.display();
	side3.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW )

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85} )
}

