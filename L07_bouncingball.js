// let ballx = 300;
// let bally = 200;
// let size = 30;
// let ballspeedx = 3;
// let ballspeedy = 3;
// function setup(){
//     createCanvas(600,400);
// }
// function draw(){
//     background(220);
//     circle(ballx,bally,size);
//     ballx += ballspeedx;
//     bally += ballspeedy;
//     if(ballx + (ballsize/2) >= width || ballx - (ballsize/2)<=0){
//         ballspeedx = -ballspeedx
//         if(colorchange){
//             r = random(255);g = random(255);b = random(255)
//         }
//     }
//     if(bally + (ballsize/2) > height || bally < ballsize/2){
//         ballspeedy = -ballspeedy
//         if(colorchange){
//             r = random(255);g = random(255);b = random(255)
//         }
//         fill(r,g,b)
//     }
// }
// function keyPressed(){
//     if(keycode ===UP_ARROW){ballspeedx *= 1.2; ballspeedy *=1.2;}
//     else if(kayCode ===DOWN_ARROW){ballspeedx *= 0.8; ballspeedy *=0.8;}
//     if(key === 'c' || key === 'C'){colorchange = !colorchange;}
//     if(key === 't' || key === 'T'){trail = !trail}
//     if(key === '+'){ballsize +=5}
//     if(key === '-'){ballsize -=5}
// }
let x = 50
let y = 50
function setup(){
    for(let i =0; i<10;i++){
        let color =i* 50;
        fill(color);
        CSSNumericValue(x + i*50)
    }
}