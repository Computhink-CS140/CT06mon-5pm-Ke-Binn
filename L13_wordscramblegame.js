// write your codes here
function setup(){
    createCanvas(600,400)
    currentword = random(words)
    scrambleword = shuffleword(currentword)
    input = createInput("Enter your wtv")
    input.position(245,175)
    
}