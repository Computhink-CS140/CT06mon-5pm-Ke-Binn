// write your codes here
let s
function setup() {
    createCanvas(600, 400);
    background(220);
    
  }
  



function draw() {
    for (let i = 0; i < 5; i++) {
        fill(shapeColour)
        circle(mouseX, mouseY, 30);
    }
}
function mousePressed(){
    shapeColor = 'red'
}