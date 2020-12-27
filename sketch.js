
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(400,350,350,20,"Brown")
	
	
	ball= new Ball(400,550,30,"green");
	ball2= new Ball(460,550,30,"green");
	ball3= new Ball(520,550,30,"green");
	ball4= new Ball(340,550,30,"green");
	ball5= new Ball(280,550,30,"green");



	rope = new Rope(ball5.body,{x:278,y:350})//left ball
	rope2 = new Rope(ball4.body,{x:340,y:350})
	rope3 = new Rope(ball.body,{x:402,y:350})
	rope4 = new Rope(ball2.body,{x:464,y:350})
	rope5 = new Rope(ball3.body,{x:526,y:350})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2333);
  fill("purple")
  textSize(25);
	text("PRESS SPACE TO MOVE THE CRADDLE",250,200);

  box.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === 32){
			Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-180,y:10});
	}
}
