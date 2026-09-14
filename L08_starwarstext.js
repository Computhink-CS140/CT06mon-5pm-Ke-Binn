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
    React(x,300,40,40)
}