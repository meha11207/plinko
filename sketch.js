
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var disvisions =[];
var divisionsHeight = 300;
var particles = []
var plinkos = []

function setup() {
  engine = Engine.create()
  world = engine.world;
  createCanvas(800,700);
  
  ground = new Ground(400,690,800 ,20);

  for(var i = 0;i<=width;i=i+80){
    disvisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight))
  }

  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for(var j = 50;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j = 50;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  Engine.Ground(engine)
}

function draw() {
  rectMode(CENTER)
  background(0); 

  drawSprites();

  for(var n = 0; n<divisionsHeight.length;n++){
   divisions[n].display();
  }

  if(frameCount %60 === 0){
     particles.push(new Particle(random(width/2-30),10,10));
     score++;
  }

  for(var h = 0;h<particles.length;h++){
    particles[h].display();
  }

  for(var j =0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  ground.display()
}