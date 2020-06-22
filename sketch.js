const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup() {
  createCanvas(1000,600);
  main = createSprite(125, 215, 25, 25);
  main.shapeColor = "white";

  box1 = new Box(200,200,37,37);
  box1.shapeColor = "violet";

  box2 = new Box(237,200,37,37);
  box2.shapeColor = "violet";

  box3 = new Box(163,200,37,37);
  box3.shapeColor = "violet";

  box4 = new Box(274,200,37,37);
  box4.shapeColor = "violet";
  
  box5 = new Box(181.5,163,37,37);
  box5.shapeColor = "pink";

  box6 = new Box(218.5,163,37,37);
  box6.shapeColor = "pink";

  box7 = new Box(255.5,163,37,37);
  box7.shapeColor = "pink";

  box8 = new Box(200,126,37,37);
  box8.shapeColor = "blue";

  box9 = new Box(237,126,37,37);
  box9.shapeColor = "blue";

  box10 = new Box(218.5,89,37,37);
  box10.shapeColor = "green";


}

function draw() {
  background(0,0,0);  
  drawSprites();
}