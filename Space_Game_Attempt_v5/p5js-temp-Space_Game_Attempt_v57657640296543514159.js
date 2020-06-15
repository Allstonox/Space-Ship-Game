var ship;
var keyVal = 0;
shots = [];
lasers = [];
aliens = [];
stars = new Array(100);
var play;
var gameStart = false;
var gameStarter = 0;
powerUps = [];
var bulletVal = 0;

aliensTwo = [];
var alienTwoAmount = 1;

var startingX = 10;
var startingY = 10;
var alienSize = 25;
var deadVal = 0;

var shipImg;
var alienImg;

var rows = 1;
var aliensPerRow = 12;
var alienTotal = 0;
var level = 1;
var aliensKilled = 0;
var levelIncrementer = 1;
var alienAdder = 3; //Level to start adding purple aliens and increment
var waveStart = 0;
var timing;
var restartVal = 0;
var counter;

function preload(){
 shipImg = loadImage("Ship.png");
 alienImg = loadImage("Alien.png");
 alienImgTwo = loadImage("AlienTwo.png");
 ThreeBulletsImg = loadImage("ThreeBullets.png");
}

function setup() {
createCanvas(400,400);
ship = new Ship(width/2, height - 50);
play = new Play(width / 2, height / 2 + 100);
  for(var w = 0; w < stars.length; w++){
  stars[w] = new Star(random(width), random(height));
}
for(var n = 0; n < rows; n++){
  aliens[n] = [];
  //alienTotal = rows * 12;
  for(var j = 0; j < aliensPerRow; j++){
       aliens[n][j] = new Alien(j * (alienSize + 5), startingY - (n * alienSize * 2));
       alienTotal++;
  }
}
counter = millis();
}

function newWave(){
for(var n = 0; n < rows; n++){
  aliens[n] = [];
  for(var j = 0; j < aliensPerRow; j++){
     aliens[n][j] = new Alien(j * (alienSize + 5), startingY - (n * alienSize * 2));
     alienTotal++;
  } 
  }
    if(level > 1){
      for(var u = 0; u < (level * alienTwoAmount); u++){
        aliensTwo[u] = new AlienTwo(random(0, width),random(-300, 100));
        alienTotal++;
      }
    }
    levelIncrementer = 1;
}

function draw() {
background(0);
for( w = 0; w < stars.length; w++){
  stars[w].show();
}
if(!gameStart){
stroke(255);
fill(255, 0, 0);
textSize(32);
textAlign(CENTER);
text("Spicy Space Ship Game", width / 2, height / 3);
textSize(20);
text("Created by Allston Ox", width / 2, height / 3 + 42);
play.show();
counter = millis();
}
if(!ship.dead(deadVal) && gameStart){
if(millis() < counter + 3000){
  textAlign(CENTER);
  stroke(255);
  fill(255);
  textSize(20);
  text("Movement: 'Arrow keys' Shoot:'spacebar'", 200, 260);
  text("Defend the green zone!", 200, 280);
}
stroke(0, 150 , 0);
fill(0, 150 , 0);
rect(0, 300, width, 100);
for(var i = 0; i < powerUps.length; i++){
 if(powerUps[i] != null){
  powerUps[i].show(); 
  powerUps[i].move();
  if(ship.intersects(powerUps[i].x, powerUps[i].y, powerUps[i].size)){
    if(powerUps[i].bulletType == 1){
      bulletVal = 1;
    }
    powerUps[i].x = 1000; 
    powerUps[i].y = 1000;
  }
  if(powerUps[i].y > height){
   powerUps.splice(i, 1); 
  }
 }
}
for(var f = 0; f < shots.length; f++){
  shots[f].show(); 
  shots[f].move();
  if(shots[f].y < 0){
   shots.splice(f, 1); 
  }
}
for(var l = 0; l < lasers.length; l++){
  lasers[l].show(); 
  lasers[l].move(); 
  if(lasers[l].y > height){
   lasers.splice(l, 1); 
  }
}
if(level > 1){
for(var m = 0; m < (level * alienTwoAmount); m++){
  if(aliensTwo[m] != null){
  aliensTwo[m].show();
  aliensTwo[m].move(ship.x, ship.y);
  if(ship.intersects(aliensTwo[m].x, aliensTwo[m].y, aliensTwo[m].size)){
   deadVal = 1; 
  }
  }
}
}
for(var j = 0; j < rows; j++){
  for(var n = 0; n < aliens[j].length; n++){
  var laserChance = random(1);
  aliens[j][n].show();
  aliens[j][n].move();
  if(laserChance > 0.998){
   aliens[j][n].shoot(); 
  }
  //if(aliens[j][n+1] != null){
  //if(dist(aliens[j][n].x, aliens[j][n].y, aliens[j][n + 1].x, aliens[j][n + 1].y) < 5){
  //  console.log(aliens[j][n].speed);
  //  console.log(aliens[j][n + 1].speed);
  //}
  //}
  if(aliens[j][n].y > 300){
   deadVal = 1; 
  }
  if(ship.intersects(aliens[j][n].x, aliens[j][n].y, aliens[j][n].size)){
    deadVal = 1;
  }
}
}
for(var q = 0; q < shots.length; q++){
  if(level > 1){
  for(var g = (level * alienTwoAmount); g > -1; g--){
    if(aliensTwo[g] != null){
    if(shots[q].intersects(aliensTwo[g].x, aliensTwo[g].y, aliensTwo[g].size)){
    if(level == 6 && aliensTwo.length < 2){
     powerUps.push(new PowerUp(aliensTwo[g].x, aliensTwo[g].y, 1)); 
    }
    alienTotal--;
    aliensKilled++;
    shots[q].y = -500;
    shots[q].x = -500;
    aliensTwo.splice(g, 1);
    }
    }
  }
  }    
  for(var k = 0; k < rows; k++){
    for(var t = 0; t < aliens[k].length; t++){
    if(shots[q].intersects(aliens[k][t].x, aliens[k][t].y, aliens[k][t].size)){      
      aliens[k].splice(t, 1);
      alienTotal--;
      aliensKilled++;
      shots[q].y = -500;
      shots[q].x = -500;
    }
    }
  }
}
for(var z = 0; z < lasers.length; z++){
    if(lasers[z].intersects(ship.x, ship.y, ship.size)){
      //lasers.splice(z, 1);
      deadVal = 1;
    }
}
  if(keyIsDown(UP_ARROW)){
    ship.move(1);
  }
  if(keyIsDown(DOWN_ARROW)){
    ship.move(2);
  }
  if(keyIsDown(LEFT_ARROW)){
    ship.move(3);
  }
    if(keyIsDown(RIGHT_ARROW)){
    ship.move(4);
  }
ship.show();
if(alienTotal == 0){
  if(levelIncrementer == 1){
  timing = millis();
  level++;
  levelIncrementer = 0;
  }
 textAlign(CENTER);
 stroke(255);
 fill(255);
 textSize(64);
 text("Level " + level, 200, 200);
 if(millis() > timing + 3000){
 waveStart = 1;
 }
}
if(waveStart == 1){
 if(level == alienAdder){
 rows++;
 alienAdder+=alienAdder;
 }
 newWave();
 waveStart = 0;
}


}
if(ship.dead(deadVal)){
 textAlign(CENTER);
 stroke(255, 0, 0);
 fill(255, 0, 0);
 textSize(64);
 text("GAME OVER", 200, 200);
 textSize(20);
 text("PRESS 'ENTER' TO RESTART", 200, 250);
 textAlign(LEFT);
 text("Level Reached: " + level, 0, 395);
 textAlign(RIGHT);
 text("Aliens Killed: " + aliensKilled, 400, 395);

if(restartVal == 1){
  for(var p = 0; p < rows; p++){
  aliens.splice(p, 1);
}
for(p = 0; p < powerUps.length; p++){
  powerUps.splice(p, 1);
}
for(var b = (alienTwoAmount * level); b > -1 ; b--){
  aliensTwo.splice(b, 1);
}
for(var v = lasers.length; v > -1; v--){
 lasers.splice(v, 1); 
}
for(var a = shots.length; a > -1; a--){
 shots.splice(a, 1); 
}
if(lasers.length == 0 && shots.length == 0 && aliens.length == 0 && powerUps.length == 0 && aliensTwo.length == 0){  
rows = 1;
aliensPerRow = 12;
alienTotal = 0;
level = 1;
waveStart = 0;
aliensKilled = 0;
bulletVal = 0;
levelIncrementer = 1;
ship = null;
alienAdder = 3;
deadVal = 0;
restartVal = 0;
setup();
}
 }
}

}

function keyPressed(){
  if(keyCode == 32){
   ship.shoot(bulletVal);
  }
    if(keyCode == ENTER){
   restartVal = 1;
  }
}
function keyReleased(){
  if(keyCode == ENTER){
   restartVal = 0;
  }
}
  function mousePressed(){
    gameStarter = true;
}
  function mouseReleased(){
    gameStarter = false;
}
