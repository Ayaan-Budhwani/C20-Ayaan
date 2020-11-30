var a,b;






function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(200,100,50,50);
 a.shapeColor="yellow";
 b.shapeColor="yellow";
}

function draw() {
  background(255,255,255);
  a.x = World.mouseX;
  b.y = World.mouseY;
  
  if(a.x-b.y<40 && b.x-a.x<40){
    a.shapeColor="blue";
    b.shapeColor="black";
  }
else{
  a.shapeColor='yellow';
  b.shapeColor='yellow';
}





  drawSprites();
}