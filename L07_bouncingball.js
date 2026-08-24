let ballx = 300;
let bally = 200;
let size = 30;
let speedx = 3;
let speedy = 3;
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(220);
    circle(ballx,bally,size);
    ballx += ballspeedx;
    bally += ballspeedy;
}