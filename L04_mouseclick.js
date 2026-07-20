// write your codes here
let shapeColor='blue';
let x1
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

    triangle(x1,y1,x2,y2,x3,y3);
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
    shapeColor = 'white';
}



