var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = (25,55,255);

  wall = createSprite(1300, 200, 50, 400);
  console.log(speed);
  console.log(weight);
  
}

function draw() {
  background(25,40,33); 
  
  if(car.isTouching(wall)){
    car.velocityX = 0;
  }

  if(car.isTouching(wall) && 0.5*weight*speed*speed/22500 < 100){
    car.shapeColor = "green"
  }
  
  if(car.isTouching(wall) && 0.5*weight*speed*speed/22500 > 180){
    car.shapeColor = "red"
  }
  
  if(car.isTouching(wall) && 0.5*weight*speed*speed/22500 < 180 && 0.5*weight*speed*speed/22500 > 100){
    car.shapeColor = "yellow"
  }
  
  
  drawSprites();
}