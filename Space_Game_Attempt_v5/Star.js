function Star(x, y){
  this.x = x;
  this.y = y;
  this.size = random(1, 3);
  
  this.show = function(){
   var sizeChanger = random(0.7, 1.2);
    noStroke(); 
   fill(random(200, 255), random(220, 255));
   ellipse(this.x, this.y, this.size * sizeChanger);
  }
}
