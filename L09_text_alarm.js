let x = 200;
let speed = 2;
let r = 0;
let g = 0;
let b = 0;
let countdown = 5;
let bgSound;
function preload(){
    bgSound = loadSound('assets/bossaNova.mp3')
}
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(220);
    textSize(16);
    fill(r,g,b);
    textSize(32);
    text("Bounce!",x,100);
    x += speed;
    if(x > width-120 || x<0){
        speed = -speed;
        r = random(255);
        g = random(255);
        b = random(255);
    }
    let h = hour()
    let m = minute()
    let s = second()
    let textString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2);
    textSize(32)
    textAlign(CENTER,CENTER)
    text(textString,width/2,height/2)
    textSize(16)
    text("CLICK ME TO START TIMER",width/2,height/2 + 100)
}
function mousePressed(){
    interval = setInterval(updateCountdown,1000)
}
function updateCountdown(){
    if(countdown > 0){
        countdown -= 1
    }else{
        clearInterval(interval)
        setInterval(alarm,500)
    }
}
function alarm(){
    colors =random(255)
    colorss =random(255)
    colorsss =random(255)
    bgSound.play()
}