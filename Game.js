class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //car 1
    car1 = createSprite(100,200);
    car1.addImage(c1); 
    //car 2
    car2 = createSprite(300,200);
    car2.addImage(c2);
    //car 3
    car3 = createSprite(500,200);
    car3.addImage(c3);
    // car 4
    car4 = createSprite(700,200);
    car4.addImage(c4);
   // making all car with one name
    cars = [car1, car2, car3, car4];

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("brown");
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);  
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 150;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          fill("red");
          ellipse(x,y,150,150);
          //cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    
  
    
    if(player.distance > 3770){
     gameState = 2; 
    }

    drawSprites();
  }
 End(){
background("white");
form.reset();
//console.log("gane end");
form.gameover();

}
}