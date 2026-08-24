let ballx = 300;
let bally = 200;
let size = 30;
let ballspeedx = 3;
let ballspeedy = 3;
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(220);
    circle(ballx,bally,size);
    ballx += ballspeedx;
    bally += ballspeedy;
    if(bally = -100){
        ballspeedy = -ballspeedy
    }
    if(ballx = -300){
        ballspeedx = -ballspeedx
    }
}