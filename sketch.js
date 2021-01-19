var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(400,80,30,30);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;



	helicopter = createSprite(400,80,30,30);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.6;

	packageSprite.x = helicopter.x;
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : true
	}


	bodyBase = Bodies.rectangle(400,660,260,30,options);
	World.add(world,bodyBase); 

	bodyLeft = Bodies.rectangle(280,545,30,260,{isStatic : true});
	World.add(world,bodyLeft);

	bodyRight = Bodies.rectangle(530,545,30,260,{isStatic : true});
	World.add(world,bodyRight);

	packageBody = Bodies.rectangle(400,80,30,30,{isStatic : true,restitution : 1});
	World.add(world,packageBody);



	
	

	

	
	

 	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  fill("red");
  rect(bodyBase.position.x,bodyBase.position.y,260,30);
  rect(bodyLeft.position.x,bodyLeft.position.y,30,260);
  rect(bodyRight.position.x,bodyRight.position.y,30,260);

  
  packageSprite.x = helicopter.x 
  
  packageSprite.y = packageBody.position.y;
  if(keyDown("left")){
	  helicopter.x = helicopter.x -2;
  }
  
  if(keyDown("right")){
	helicopter.x = helicopter.x +2;
}

if(keyDown("down")){
	Matter.Body.setStatic(packageBody,false);
}


  drawSprites();
  
  
 
}
