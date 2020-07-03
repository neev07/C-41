const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, BoyWithUmbrella;
var maxDrops = 100;
var drops;

function setup(){
   canvas = createCanvas(600,600);
   engine = Engine.create();
   world = engine.world;
   BoyWithUmbrella = new Umbrella(300,100,25);
}

function draw(){
    background("white");
    Engine.update(engine);
    for (var i=0;i<maxDrops;i++){
        drops = new Drop(random(0,400),random(0,400),25);
    }
    drops.update();
    drops.display();
    BoyWithUmbrella.display();
}