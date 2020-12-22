var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1
var part2
var part3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 710);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 800, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 groundSprite=createSprite(ground.position.x, ground.position.y, width,10);
	groundSprite.shapeColor=color(255) 


	Engine.run(engine);

	part1=new Center(332,653,7,100)
	part2=new Center(403,705,150,7)
	part3=new Center(474,652.5,7,100)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  part1.display();
  part2.display();
  part3.display();
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x= packageBody.position.x
	packageSprite.y= packageBody.position.y
	Matter.Body.setStatic(packageBody, false)

    
  }
}



