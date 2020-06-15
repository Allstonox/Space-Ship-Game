function Alien(x, y){
 this.x = x;
 this.y = y;
 this.size = alienSize;
 this.speed = 5;
 //this.col = color(255, 0, 0);
 
 this.show = function(){
  //stroke(this.col);
  //fill(this.col);
  imageMode(CENTER);
  image(alienImg, this.x, this.y, this.size,this.size);
 }
 
 this.move = function(){
   this.x+=this.speed; 
   if(this.x >= width){
     this.y+= this.size;
     this.speed = -(this.speed);
   }
   if(this.x <= 0){
     this.y+= this.size;
     this.speed = -(this.speed);
   }
 }
 
 this.shoot = function(){
   lasers.push(new Laser(this.x, this.y));
 }
}
