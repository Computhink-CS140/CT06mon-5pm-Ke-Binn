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
    shapeColor = color(random(255),random(255),random(255));
    x1 = random(400);
    y1 = random(400);
    x2 = random(400);
    y2 = random(400);
    x3 = random(400);
    y3 = random(400);
}

function mouseReleased(){
    shapeColor = color(random(255),random(255),random(255));
    x1 = random(400);
    y1 = random(400);
    x2 = random(400);
    y2 = random(400);
    x3 = random(400);
    y3 = random(400);
}



