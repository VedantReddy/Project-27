
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(320,575,20);
	bob2 = new Bob(340,575,20);
	bob3 = new Bob(360,575,20);
	bob4 = new Bob(380,575,20);
	bob5 = new Bob(400,575,20);	
	roof = new Roof(400,100,700,20);
	rope1 = new Rope(roof.body,bob1.body,-bobDiameter*2,0);
	rope2 = new Rope(roof.body,bob2.body,-bobDiameter*2,0);
	rope3 = new Rope(roof.body,bob3.body,-bobDiameter*2,0);
	rope4 = new Rope(roof.body,bob4.body,-bobDiameter*2,0);
	rope5 = new Rope(roof.body,bob5.body,-bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  background(300);
  Engine.update(engine);
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

 
}



