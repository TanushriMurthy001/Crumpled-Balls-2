const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var ground;
var ball;

function setup() {
	createCanvas(1000, 750);

	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);

	box1 = new Box();
	box2 = new Box();
	box3 = new Box();
	ground = new Ground();
	ball = new Ball();
 
}



function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-56})
	}
}
