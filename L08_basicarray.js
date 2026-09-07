// let x =0
// let y = 120
// let size = 40
// let speed = 2
// let r=100
// let g=50
// let b=200
// function setup(){
//     createCanvas(400,300)

// }
// function draw(){
//     background(220)
//     fill(r,g,b)
//     square(x,y,size)
//     x=x+speed;

//     if(x <= 0 || x+size>= width){
//         speed = speed * -1
//         r = random(255)
//         g = random(255)
//         b = random(255)
//     }
// }
// function setup(){
//     createCanvas(400,400)
//     textSize(15)
//     background(220)
//     text("My name is Ke Bin", 50,50)
//     text("I am 12 years old", 50,100)
//     text("My favourite activity is playing video games all day", 50,150)
// }
let foods = ["Pizza", "Burger", "sushi", "Tacos", "Pasta"]

function setup(){
    createCanvas(400,400)
    textSize(16)
    text("my favourite foods:", 50,50)
    for(let i = 0; i < foods.length; i++){
        text((i+1)+ ".",50,80 +i*25)
    }
}

