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
// let foods = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta","Rice"]
// let yPos=400
// function setup(){
//      createCanvas(400,400)
//      textSize(16)
//      textAlign(LEFT)
//      text("my favourite foods:", 50,50)
//      for(let i = 0; i <foods.length; i++){
//          text((i+1)+ "."+ foods[i] ,50,80 +i*25)
//      }
// }
// function draw(){
//     background(220);
    
//     text("my favourite foods; ",50,yPos)
//     for(let i = 0; i <foods.length; i++){
//         text((i+1 + "." + foods[i], 50, yPos + 30 +i*25))
//     }
//     yPos = yPos -1

// }
let storyText = [
    "A long time ago in a galaxy far,",
    "far away....",
    "EPISODE 1",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Student have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the code be with you"
];
let yPos = 400;
function setup(){
    createCanvas(400,400)

}
function draw(){
    background(0)
    fill(255,255,0)
    textSize(24)
    textAlign(CENTER)
    for(let i=0 ; i<storyText.length ; i++){
        let sentence = storyText[i];
        text(storyText[i],50, 80+i*25)
        text(sentence)
    }
}



