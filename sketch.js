const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint

var engine,world
var ground,platform
var box1,box2,box3,box4,box5
var pig1,pig3,bird,log1,log3,log4,log5
var slingshot
var Backgroundimage


function preload() {
  Backgroundimage=loadImage("sprites/bg.png")
}


function setup() {
  createCanvas(1200,400);
engine=Engine.create()
world=engine.world
ground = new Ground(600,height,1200,20);
platform = new Ground(200, 310, 290, 180);
angleMode(RADIANS)

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
pig1 = new Pig(810, 350);

log1 = new Log(810,260,300, PI/2);

box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
pig3 = new Pig(810, 220);

log3 =  new Log(810,180,300, PI/2);

box5 = new Box(810,160,70,70);
log4 = new Log(760,120,150, PI/7);
log5 = new Log(870,120,150, -PI/7);

bird = new Bird(200,50);
slingshot = new Slingshot(bird.body,{x:200,y:100})

}

function draw() {
  background(Backgroundimage);  
Engine.update(engine)
ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
log1.display()
log3.display()
log4.display()
log5.display()
pig1.display()
pig3.display()
bird.display()
platform.display()
slingshot.display()

}