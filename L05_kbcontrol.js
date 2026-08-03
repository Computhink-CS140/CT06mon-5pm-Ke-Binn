// write your codes here// write your codes here
let rectsize=50;
let showCircle=false;
let showTriangle=false;
let circleColor = 0
function setup() {
    createCanvas(600, 400);
    
    
  }
  

function draw() {
  background(220)
  fill(circleColor,0,0);
  circle(width/2,height/2,100)
  }
function keyPressed(){
  if(keyCode === 82){
    fill(255,0,0);
  }else if(keyCode === 87){
    fill(255,255,255)
  }else if (keyCode === 71){
    fill(0,255,0)
    
  }
    console.log("key:",key);
    console.log("keyCode:",keyCode);
}