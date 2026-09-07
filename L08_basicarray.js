let x =0
let y = 120
let size = 40
let speed = 2
let r=100
let g=50
let b=200
function setup(){
    createCanvas(400,300)

}
function draw(){
    background(220)
    fill(r,g,b)
    square(x,y,size)
    x=x+speed;

    if(x <= 0 || x>= width){
        speed = speed -1
    }
}