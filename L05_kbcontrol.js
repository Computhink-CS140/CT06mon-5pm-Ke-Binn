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
    fill(255,0);
  }else if(keyCode === 40){
    circleColor = 0
  }else{
    circleColor = 200
  }
    console.log("key:",key);
    console.log("keyCode:",keyCode);
}