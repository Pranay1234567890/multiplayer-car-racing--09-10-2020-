var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,gameOver,gamedone;

var form, player, game;
var c1,c2,c3,c4; 
var track;
var cars, car1, car2, car3, car4;

function preload(){
c1 = loadImage("car1.png");
c2 = loadImage("car2.png");
c3 = loadImage("car3.png");
c4 = loadImage("car4.png");
track = loadImage("track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if (gameState === 2) {
  game.End();
  
}
}