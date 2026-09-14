let x = 200
let r = 100
let g = 100
let b = 100
let speed = 3
let favfood = ["Potato chip","ramen","Pizza","Chicken Rice","skittles","Fried Rice","Pasta"]
let yPod = 500
let lineGap = 30
let bgSound
let started = false
function preload(){
    bgSound = loadSound('assets/star_wars_there_8_bit.mp3')
}
function setup(){
    createCanvas(500,500)

}

function draw(){
    background(0)
    fill(r,g,b)
    rect(x,300,40,40)
    x += speed
    if(x < 0 || x >= width-40){
        r = random(255)
        g = random(255)
        b = random(255)
    }
    if(started){
        text()
    }
}