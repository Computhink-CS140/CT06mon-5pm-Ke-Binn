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
        text("Lycus",350,50)
        text("Jaden",350,100)
        text("Keith",350,150)
        text("Alexander",350,200)
        text("Ke Bin",350,250)

        textSize(20)
        fill(255,255,0)
        textAlign(LEFT)
        text("My favourite food:",50,yPos - 30)
        for(let i=0; i<favfood.length;i++){
            text((i+1)+ "."+favfood.length[i],50,yPos+i *lineGap)
        }
        yPos-=0.6

        if(yPos< -favfood.length * lineGap){
            yPos  = height
        }
    }else{
        fill(225,225,0)
        
    }
}