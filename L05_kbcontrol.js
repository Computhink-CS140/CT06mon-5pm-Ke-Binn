// write your codes here// write your codes here
let rectsize=50;
let showCircle=false;
let showTriangle=false;
function setup() {
    createCanvas(600, 400);
  
    
  }
  

function draw() {
    background(220);
    if (showCircle){
        circle(width / 2, height / 2, 100);
    }
    if (showTriangle){
        triangle(50,100,25,90,54,300);
    }
    
}
function keyPressed() {
    if (key === 'c') {
        showCircle = !showCircle;
    }
    if (key === 't') {
        showTriangle = !showTriangle;
    }
    if (key === 's') {
        showSquare = !show
    }

}
