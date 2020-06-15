function Bullet(x, y, specialVal){
 this.x = x;
 this.y = y;
 this.size = 5;
 this.speed = 6;
 this.specialVal = specialVal;

 this.show = function(){
  stroke(240);
  fill(240);
  ellipse(this.x, this.y, this.size,this.size);
 }
 
 this.move = function(){
   this.y-= this.speed; 
   if(this.specialVal == 1){
    this.x-= 0.5; 
   }
      if(this.specialVal == 2){
    this.x+= 0.5; 
   }
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
