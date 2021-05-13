
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var world,paper1;
var dustbinObj,groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	//ellipseMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper1=new Paper(320,575,50);  

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  //ellipseMode(CENTER);
  background(0);
  groundObject.display();
  dustbinObj.display();
  paper1.display();

 
}

  function keyPressed() {
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper1.body,paper1.body.position,{ x:120,y:-38.3});

	  }
  }



