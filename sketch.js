var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(2000,800);

  //CREATING THE THICKNESS
  thickness = random(20,90);

  //CREATING SPEED AND WEIGHT VARIABLES
  speed = random(50,200);
  weight = random(30,60);

  //CREATING THE BULLET
  bullet = createSprite(50,400,50,10);
  bullet.velocityX = speed;


}

function draw() {
  background("black");  

  //CREATING THE WALL
  wall = createSprite(1500,400,thickness,400);



  //IF CONDITION FOR DETECTING THE DAMAGE
if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

  if(damage > 10){
    wall.shapeColor = color("red");
  }

  if(damage < 10){
    wall.shapeColor = color("green");
  }
}

  drawSprites();
}


function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}