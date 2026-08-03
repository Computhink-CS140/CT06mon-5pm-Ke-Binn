// write your codes here// write your codes here
let rectsize=50;
let showCircle=false;
let showTriangle=false;
function setup() {
    createCanvas(600, 400);
    
    
  }
  

function draw() {
  background(220)
  fill(circleColor,0,0);
  circle(width/2,height/2,100)
  }
function keyPressed(){
  if(keyCode === 38){
    circleColor = 255;
  }
      console.log("key:",key);
    console.log("keyCode:",keyCode);
}