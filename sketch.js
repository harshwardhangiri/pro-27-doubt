
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;


	bob1 = new Bob(175+100,450);
	bob2 = new Bob(225+100,450);
	bob3 = new Bob(275+100,450);
	bob4 = new Bob(325+100,450);
	bob5 = new Bob(375+100,450); 

	roof = new Roof(380,100,250,20);

   

	string1 = new String(bob1.body,roof.body,-100,0);
	string2 = new String(bob2.body,roof.body,-50,0)
	string3 = new String(bob3.body,roof.body,0,0);
	string4 = new String(bob4.body,roof.body,50,0);
	string5 = new String(bob5.body,roof.body,100,0);

	//Create the Bodies Here.
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(2550);

  keypressed();
 
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

 
 
 
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  
  drawSprites();
 
}


function keypressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:0});
	}
	
	
}
