function preload(){
  bg=loadImage("iss.png")
  drink=loadAnimation("drink1.png","drink2.png")
  eat=loadAnimation("eat1.png","eat2.png")
  bath=loadAnimation("bath1.png","bath2.png")
  move=loadAnimation("move.png","move1.png")
  sleep=loadAnimation("sleep.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  brush=loadAnimation("brush.png")
  
}
function setup() {
  createCanvas(800,400);

  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.1;
 
}

function draw() {
  background(bg);  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brush",brush)
    astronaut.changeAnimation("brush"); 
    
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gym",gym)
    astronaut.changeAnimation("gym");  
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eat",eat)
    astronaut.changeAnimation("eat");  
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bath",bath)
    astronaut.changeAnimation("bath"); 
  }
  drawSprites();
}