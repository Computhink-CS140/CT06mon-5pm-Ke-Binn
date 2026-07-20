// write your codes here
let shapeColor='blue';
function setup() {
    createCanvas(600, 400);
    background(220);
    
  }
  



function draw() {
    // for (let i = 0; i < 5; i++) {
    //     fill(shapeColor);
    //     circle(mouseX, mouseY, 30);
    // }
    fill(shapeColor)
    circle(200,200,300)
    triangle(random(),random(),random(),random(),random(),random())
}
function mousePressed(){
    shapeColor = random(0,255);
}

function mouseReleased(){
    shapeColor = color(random(255),random(255),random(255));
}



