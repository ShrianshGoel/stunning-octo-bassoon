
var back,back1;


function preload(){
  back1=loadAnimation("giphy.gif");
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  back = createSprite(width/2,height/2,20,20);
  back.addAnimation("screenshots",back1)
}

function draw() {
  background(220);
  drawSprites();
}
