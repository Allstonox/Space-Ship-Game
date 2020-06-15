function Play(x, y){
  this.x = x;
  this.y = y;
  this.size = 30;
 
  this.show = function(){
    var colVal = color(255, 0, 0);
    if(dist(mouseX, mouseY, this.x, this.y) < 30){
      colVal = color(255, 255, 255);
      if(gameStarter){
       gameStart = true; 
      }
    }
    stroke(255);
    fill(colVal);
    textSize(50);
    textAlign(CENTER);
    text("Start", this.x, this.y); 
    
 //shipImg = loadImage("Ship.png");
 //alienImg = loadImage("Alien.png");
 //alienImgTwo = loadImage("AlienTwo.png");
 //ThreeBulletsImg = loadImage("ThreeBullets.png");
    imageMode(CENTER);
    image(shipImg, width / 5 , height / 2 + 15, this.size, this.size);
    image(alienImg, (width / 5) * 2 , height / 2 + 15, this.size, this.size);
    image(alienImgTwo, (width / 5) * 3 , height / 2 + 15, this.size, this.size);
    image(ThreeBulletsImg, (width / 5) * 4 , height / 2 + 15, this.size, this.size);
  }
}
