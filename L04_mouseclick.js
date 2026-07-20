// write your codes here
function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  



function draw() {
    for (let i = 0; i < 5; i++) {
        fill(0,0 + i*25,0)
        circle(mouseX, mouseY, 30);
    }
}
function mousePressed(){
    
}