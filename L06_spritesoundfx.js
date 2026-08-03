let x = 50
let y = 50
let speed = 3
function setup(){
    createCanvas(400, 400);
    
    
  }
function draw(){
    background(220);
    rect(50,50,300,300)
    if(keyIsDown(LEFT_ARROW)){
    x -=speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
       x +=speed;
    }
    x = constrain(x,50,300)
    y = constrain(x,50,300)
    square(x,y,50)
}