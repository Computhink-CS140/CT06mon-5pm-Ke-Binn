// write your codes here
let shapeColor='blue';
let x1,y1,x2,y2,x3,y3;
function setup() {
    createCanvas(600, 400);
    background(220);
    
  }
  



function draw() {
    background(220);
    rect(width/2,height/2,rectsize,rectsize);
}
function keyPressed(){
    rectsize = 100;
}
function keyReleased(){
    rectsize = 50
}


