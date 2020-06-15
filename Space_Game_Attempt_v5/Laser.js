function Laser(x, y){
 this.x = x;
 this.y = y;
 this.size = 5;
 this.speed = 4;
 this.col = color(255, 0, 0);
 this.show = function(){
  stroke(this.col);
  fill(this.col);
  ellipse(this.x, this.y, this.size,this.size);
 }
 
 this.move = function(){
  this.y+= this.speed; 
 }
 
 this.intersects = function(otherX, otherY, otherSize){
   var distance = dist(this.x, this.y, otherX, otherY);
   
   if(distance < ((this.size / 2) + (otherSize / 2))){
     return true;
   }
   else{
    return false; 
   }
 }
 
}
