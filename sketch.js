var ball;
var vx = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.y<=0 || ball.position.y>=height)
  {
    vx= -vx;
  }
  ball.velocity.y = vx;

  drawSprites();

}

