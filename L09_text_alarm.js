// write your codes here
function setup(){
    createCanvas(400,400)
}
function draw(){
    background(220)
    textSize(16)
    fill(r,g,b)
    textsize(32)
    text("Bounce!",x,200)
    x += speed
    if(x > width-120 || x<0){
        speed = -speed
        r = random(255)
        g = random(255)
        b = random(255)
    }
}