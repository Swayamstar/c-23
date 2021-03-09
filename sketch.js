const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground1

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
   
   
    box1 = new Box(200,300,50,50);
    box2 = new Box(250,300,50,50);
    box3 = new Box(300,300,50,50);
    box4 = new Box(350,300,50,50);
    box5 = new Box(400,300,50,50);
    ground1= new Ground(00,700,1200,50);
}

function draw(){
    background(0);
    Engine.update(engine);
        

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground1.display();
}



