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

    triangle();
}
function mousePressed(){
    shapeColor = random(0,255);
}

function mouseReleased(){
    shapeColor = color(random(255),random(255),random(255));
    x1
    y1
    x2
    y2
    x3
    y3
}



