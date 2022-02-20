var Runner,RunnerImg
var path,pathImg

function preload() {
// pre-load

  pathImg = loadImage("path.png") ;
  RunnerImg = loadImage("Runner-1.png");

}

function setup() {

createCanvas(400,600)
background("blue");
// moving background
   path = createSprite(200,100,150,400);
   path.addImage(pathImg);
   path.y = path.height/2 ; 
   path.velocityY = 3 ; 
   path.scale = 1.2 ;

   
   Runner = createSprite(200,545,20,20);
   Runner.addImage(RunnerImg);
   Runner.scale = 0.05 ; 
   leftBoundary =  createSprite(10,300,10,600);
   rughtBoundary =  createSprite(390,300,10,600);
   leftBoundary.visible = false;
    rightBoundary.visible = false;
}




  

function draw() {
    background("blue") ; 
    drawSprites();

 //code to reset the background
    if(path.y > 400) {
      path.y = height/2
    }

//Add the condition to make the Runner move left and right

if(keyDown(LEFT_ARROW)){
  Runner.x = Runner.x - 5 ;
}
Runner.x = mouseX;

if(keyDown(RIGHT_ARROW)){
  Runner.x = Runner.x + 5 ;
} 
Runner.collide(leftBoundary);
Runner.collide(rightBoundary);
}

