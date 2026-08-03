let x = 50
let y = 50
let speed = 3
function setup(){
    createCanvas(400, 400);
    
    
}
function draw(){
    background(220);
    if(keyIsDown(LEFT_ARROW)){
        x -=speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x +=speed;
    }
    if(keyIsDown(UP_ARROW)){
        y -=speed;
    }
    if(keyIsDown(DOWN_ARROW)){
        y +=speed;
    }
    x = constrain(x,50,300)
    y = constrain(x,50,300)
    if(keyIsDown(32)){
        
    }
    square(x,y,50)
}