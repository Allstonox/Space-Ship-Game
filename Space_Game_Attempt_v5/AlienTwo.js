function AlienTwo(x, y){
 this.x = x;
 this.y = y;
 this.size = alienSize;
 this.speed = 1;

 var chaseDistance = 300;
 
 this.show = function(){
  //stroke(this.col);
  //fill(this.col);
  imageMode(CENTER);
  //tint(255, 0, 0);
  image(alienImgTwo, this.x, this.y, this.size,this.size);
 }
 
 this.move = function(otherX, otherY){
   var distance = dist(this.x, this.y, otherX, otherY);
   if(otherX > this.x && distance < chaseDistance){
     this.x+=this.speed * random(2);
   }
   if(otherX < this.x && distance < chaseDistance){
     this.x-=this.speed * random(2);
   }
      if(otherY > this.y && distance < chaseDistance){
     this.y+=this.speed;
   }
      if(otherY < this.y && distance < chaseDistance){
     this.y-=this.speed;
   }
     else if(distance > chaseDistance){
     this.y+=this.speed;
   }
   if(this.y >= height){
    chaseDistance = 1000; 
   }
 }
 
 this.shoot = function(){
   lasers.push(new Laser(this.x, this.y));
 }
}
