
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200,300);
	base_bin = new Dustbin(1200,640,200,20);
	border_bin1 = new Dustbin(1100,600,20,100);
	border_bin2 = new Dustbin(1300,600,20,100)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
  
function draw() {
 
  background(0);
  keyPressed();
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,width,10)


  base_bin.display();
  border_bin1.display();
  border_bin2.display();
  ball.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x:85,y:-85});
		
	}
}


