function PowerUp(x, y, bulletType){
    this.x = x;
    this.y = y;
    this.size = 20;
    this.bulletType = bulletType;
     
      if(this.bulletType == 1){

      this.show = function(){
       image(ThreeBulletsImg, this.x, this.y, this.size,this.size);
      }
      
      this.move = function(){
       this.y++;
      }
    }
  
}
  
