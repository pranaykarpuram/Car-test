var tester,wall;
var weight;
var speed;
var deformation;
function setup() {
  createCanvas(800,400);
   tester = createSprite(400,200,50,50);
   tester.shapeColor = "white";

   wall = createSprite(750,200,10,100);
   wall.shapeColor = "grey";
   speed = random(50,90);
   weight = random(500,1400);
   deformation = (0.5*weight*speed)/22500;


   tester.velocityX = 5;
}

function draw() {
  background(0);  

  if(tester.isTouching(wall)&&deformation>=180){
    tester.velocityX = 0;
   tester.shapeColor = "red";

  }
  if(tester.isTouching(wall)&&deformation>=80&&deformation<180){
    tester.velocityX = 0;  
    tester.shapeColor = "yellow";
 
   }
   if(tester.isTouching(wall)&&deformation<80){
    tester.velocityX = 0;
    tester.shapeColor = "green";
 
   }  
 
drawSprites();
  
}