
	var bullet,wall;


	var speed, weight; 
	
	
	var thickness;
	function setup() {
	  createCanvas(1600, 400);
	
	
		speed=random(223,321)
		weight=random(30,52)
		thickness = random(22,83)
	
		bullet=createSprite(50, 200, 60, 30);   
	
		bullet.velocityX = speed;
	
		bullet.shapeColor=color(255);
	
	
	
		  wall=createSprite(1500,200, 60, height/2)
		  wall.shapeColor=color(80,80,80)
	}
	
	
	function draw() {
	  background(0);
	
	  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
	  {
		  bullet.velocityX=0;
		  var deformation=0.5 * weight * speed* speed/22500;
		if(deformation>3.68)
		{
			bullet.shapeColor=color("green");
		}
	
		if(deformation<12.43 && deformation>100)
		{
			bullet.shapeColor=color(red);
		}
	
	  }  
	
	  drawSprites();
	
	} 
	 