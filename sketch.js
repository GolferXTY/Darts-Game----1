const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine, world;
var dartboard, dart;
var hand;
var hit10, hit10_1, hit20, hit20_1, hit50;

var score = 500;

function setup(){
createCanvas(1250, 700);

    engine = Engine.create();

    world = engine.world;

    dartboard = new Dartboard(900, 70, 70, 70);

    dart = new Dart(250,50);

    hand = new Hands(dart.body,{x:250, y:50});

    
    hit10 = createSprite(900, 120, 10, 70);
    hit10.visible = false;

    hit10_1 = createSprite(900, 340, 10, 70);
    hit10_1.visible = false;

    hit20 = createSprite(900, 190, 10, 50);
    hit20.visible = false;

    hit20_1 = createSprite(900, 280, 10, 40);
    hit20_1.visible = false;

    hit50 = createSprite(900, 240, 10, 30);
    hit50.visible = false;


    

}

function draw(){
background(255, 255, 255)
    
        noStroke();
        textSize(35)
        fill("black")
        text("Score  " + score, width-300, 50)
        text("Get to 0 as fast as you can using these darts!", 300, 500);

 
    
    Engine.update(engine);

    //strokeWeight(4);

    dartboard.display();

    dart.display();

    hand.display();  
    
    drawSprites();
}

function mouseDragged(){
    //if (gameState!=="launched"){

        Matter.Body.setPosition(dart.body, {x: mouseX , y: mouseY});

   // }
}


function mouseReleased(){



    hand.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){

        dart.trajectory = [];

        Matter.Body.setPosition(dart.body,{x: 200, y: 50});

        hand.attach(dart.body);
    }
}

