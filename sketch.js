const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var pigIsland, birdIsland, pigIs, birdIs;
var bird, slingshot;


var gameState = "onSling";
var ground1, ground2, g1;
var score = 0;
var image1, image2;
var bird1img, bird2Img, bird3Img, bird4Img, bird5img;

function preload() {
    bg = loadImage("sprites/ocean.jpg");
    g1 = loadImage("sprites/sling3.png")
    pigIsland = loadImage("sprites/pigisland.png");
    birdIsland = loadImage("sprites/Angrybirdsmovie1.png");
    image1  = loadImage("sprites/Pig1.png");
    image2 = loadImage("sprites/Pig2.png");
    bird1Img = loadImage("sprites/red1.png");
    bird2Img = loadImage("sprites/bigred.png");
   
}

function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;


    pigIs = new Ground(width - 650,height - 480,700,600, pigIsland, 1);
    BirdIs = new Ground(1, height - 480,600,500, birdIsland, 1);
    ground1 = new Ground(width - 500,height - 50,900,20, g1, 0)
    ground2 = new Ground(5, height - 50,400,20, g1, 0);

    box1 = new Box(955,545,50,50);
    box2 = new Box(955,495,50,50);
    pig1 = new Pig(1000, 540, image1);
    log1 = new Log(1000,470,175, PI/2);

    box3 = new Box(1045,550,50,50);
    box4 = new Box(1045,500,50,50);
    pig3 = new Pig(1000, 500, image1);

    log3 =  new Log(1000,525,175, PI/2);

    box5 = new Box(1000,450,60,60);
    log4 = new Log(970,430,125, PI/7);
    log5 = new Log(1030,430,125, -PI/7);

    bird = new Bird(BirdIs.width - 100,BirdIs.height - 25, "sprites/red1.png", "sprites/Flying_Red.png");

    log6 = new Log(1000,565,125, PI/2);
    slingshot = new SlingShot(bird.body,{x:BirdIs.width - 100, y: BirdIs.height - 25});
//  for(){

//  }
}

function draw(){
        background(bg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    // strokeWeight(4);
    BirdIs.display();
    // ground1.display();
    pigIs.display();

    // ground2.display();
    box1.display();
    box2.display();
    pig1.display();
    pig1.score();
    log1.display();
    

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    log6.display();
    slingshot.display();  


}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
   
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 || bird.body.speed <= 4){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, {x:360, y:500});
       slingshot.attach(bird.body);
    }
}

