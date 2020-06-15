function Ship(x, y){
 this.x = x;
 this.y = y;
 this.size = 30;
 this.speed = 3;

 
 this.show = function(){
  //stroke(240);
  //fill(240);
  imageMode(CENTER);
  image(shipImg, this.x, this.y, this.size, this.size);
 }
 
 this.move = function(whichKey){
   this.x = constrain(this.x, 0 + (this.size / 2), width - (this.size / 2));
   this.y = constrain(this.y, 0 + (this.size / 2), height - (this.size / 2));
   if(whichKey == 1){
    this.y-=this.speed;
   }
   if(whichKey == 2){
    this.y+=this.speed;
   }
   if(whichKey == 3){
    this.x-=this.speed;
   }
   if(whichKey == 4){
    this.x+=this.speed;
   }
 }
 
 this.shoot = function(bulletNum){
   shots.push(new Bullet(this.x, this.y - (this.size / 2) - 5, 0));
   
   if(bulletNum === 1){
     shots.push(new Bullet(this.x, this.y - (this.size / 2) - 5, 1));
     shots.push(new Bullet(this.x, this.y - (this.size / 2) - 5, 2));
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
 
 this.dead = function(deaded){
  if(deaded == 1){
   return true; 
  }
  else{
   return false; 
  }
 }
 
}
