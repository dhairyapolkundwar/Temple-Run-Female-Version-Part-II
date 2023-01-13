// Variables

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var runner, ground;

var running, jumping, sliding, dead;
var running2, idle, bgm;
var engine, world;

var runner1, runner2, runner3, runner4, runner5, runner6, runner7, runner8;

// Functions
function preload(){
  runner1= loadImage("./animations/player/run/Run1.png")
  runner2= loadImage("./animations/player/run/Run2.png")
  runner3= loadImage("./animations/player/run/Run3.png")
  runner4= loadImage("./animations/player/run/Run4.png")

  runner5= loadImage("./animations/player/run/Run5.png")
  runner6= loadImage("./animations/player/run/Run6.png")
  runner7= loadImage("./animations/player/run/Run7.png")
  runner8= loadImage("./animations/player/run/Run8.png")
  bgm = loadSound("./music/temple_run_female_music.aiff")
}

function setup(){

  engine = Engine.create()
  world = engine.world;

  createCanvas(windowWidth, windowHeight);
 
  runner = new Player()

  running = [runner1, runner2, runner3, runner4,
              runner5, runner6, runner7, runner8];

    

      

  ground = new Ground();

  bgm.play()


  bgm.setLoop(true);
}

function draw(){
  background("#25763199")

  Engine.update(engine);

  runner.display();

  ground.display();
}

  

 

function keyPressed(){
  if(keyCode === 32){
    runner.InJumpsTATE = true
    } else {
   runner.InJumpState = false
  }
}



// Classes

class Player{
  constructor(){
    var options = {
      'restitution': 0.1,
      'friction': 0.3,
      'density': 1.0,
    }

    this.body = Bodies.rectangle(10, 10, 20, 100, options)
    World.add(world, this.body)
  }
  i = 0
  display(){
    var positions = this.body.position
    Matter.Body.setAngle(this.body, 0);

    
    this.i += 0.3
    if(this.i < (running.length - 0.5)){
      image(running[Math.round(this.i)], positions.x, positions.y, 641 / 3, 542 / 3)
    }
    
    if(this.i >= (running.length - 0.5)){
      this.i = 0
    }

    
    
  }
}

class Ground{
  constructor(){
    this.body = Bodies.rectangle(0, windowHeight - 80, windowWidth, 80, {isStatic: true})
    World.add(world, this.body)
  }

  display(){
    var positions = this.body.position

    rect(positions.x, positions.y, windowWidth, 80)
  }
}