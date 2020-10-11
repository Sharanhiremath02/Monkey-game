var PLAY= 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(450,400);  
  monkey = createSprite(30,300,20,50);
  monkey.addAnimation("running",monkey_running);
  
  monkey.scale = 0.1;
  
  ground = createSprite(200,330,400,5);
  ground.x = ground.width /2;
}


function draw() {
 background("White");
  
  
  ground.velocityX = -2 ;
  drawSprites();
  
}






