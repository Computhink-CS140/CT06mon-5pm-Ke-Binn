let soundEffect ,bgMusic, staticimage,wineffect,loseEffect;
let sttaticImageX = 0
let staticImageY = 0
let staticSpeed = 5
let colorr
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
    wineffect = loadSound('assets/Win.mp3');
    loseEffect = loadSound('assets/Lose.mp3');
}
function setup(){
    createCanvas(400,400)
    bgMusic.play()
    colorr = color(173,216,230)
}
function draw(){
    background(colorr);
    image(staticImage,0,0,110,133)
    if(keyIsDown(LEFT_ARROW)){
        staticImageX -= staticSpeed
}
    if(keyIsDown(RIGHT_ARROW)){
        staticImageX += staticSpeed
}
    if(keyIsDown(UP_ARROW)){
        staticImageY -= staticSpeed
}
    if(keyIsDown(DOWN_ARROW)){
        staticImageY += staticSpeed
}
if(key === '='){
    staticSize +=1
    staticSize >300? staticSize=300:staticSize<0?staticSize =0:StaticSize
}
    if(staticImageX < 25 || staticImageX>375 || staticImageY<25 ||staticImageY>375){
        colorr = color(255,0,0);
    }else{
        
    }


}
function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();

    }
    if(keyCode === 38){
        loseEffect.play()
    }
    if(keyCode === 40){
        wineffect.play()
   
    }

}