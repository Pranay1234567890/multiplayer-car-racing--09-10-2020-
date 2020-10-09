class Form {

  constructor() {
    this.input = createInput("  ");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetbutton = createButton(" RESET ")
    this.title = createElement('h2');
    this.title2 = createElement('h4')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + " wait until all  players come online ")
      this.greeting.position(displayWidth/2 - 200, displayHeight/4);
    });

  }
reset(){
 this.resetbutton.position(displayWidth -100, displayHeight-200);
 
 this.resetbutton.mousePressed(()=>{
player.updateCount(0);
game.update(0);


 });
}
gameover(){
  this.title2.html("Press the reset button and reload the page  to play again");
    this.title2.position(displayWidth - 1050, 0);
    this.title2.style('font-size', '70px');
    this.title2.style('color', 'skyblue');
}

}
