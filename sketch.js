var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surface
    surface1 = createSprite(100,580,200,20);
    surface1.shapeColor = "blue";
    surface2 = createSprite(310,580,200,20);
    surface2.shapeColor = "green";
    surface3 = createSprite(520,580,200,20);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(730,580,200,20);
    surface4.shapeColor = "red";

    //create box sprite and give velocity
    box = createSprite(random(20,750),200,30,30)
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 5;

}

function draw() {
    background(220);
    //create edgeSprite

    edges = createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface3)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "yellow";
        music.play();
       }
    if(box.isTouching(surface1)){
        box.shapeColor = "blue";
        box.bounceOff(surface1);
        music.play();
    }
    if(box.isTouching(surface2)){
        box.shapeColor = "green";
        box.bounceOff(surface2);
        music.play();
    }
    if(box.isTouching(surface4)){
        box.shapeColor = "red";
        box.bounceOff(surface4);
        music.play();
    }
    drawSprites();
}
