
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Circle(180,565,80,80)
	bob2 = new Circle(290,565,80,80)
	bob3 = new Circle(370,565,80,80)
	bob4 = new Circle(450,565,80,80)
	bob5 = new Circle(530,565,80,80)

    roof = new Roof(180,50,810,20)
  
    rope1 = new Slingshot(bob1.body,{x:250,y:100});
    rope2 = new Slingshot(bob2.body,{x:340,y:100});
    rope3 = new Slingshot(bob3.body,{x:420,y:100});     
    rope4 = new Slingshot(bob4.body,{x:490,y:100});
    rope5 = new Slingshot(bob5.body,{x:580,y:100});

  
	 
    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180,150);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
 
  drawSprites();
 
}

//mouse drag b likhna hai

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}