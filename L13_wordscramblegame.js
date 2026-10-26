// write your codes here
function setup(){
    createCanvas(600,400)
    currentword = random(words)
    scrambleword = shuffleword(currentword)
    input = createInput("Enter your wtv")
    input.position(245,175)
    input.size(110,30)
    input.style('font-size',"16px")
    rescramblebutton = createButton("Rescramble")
    rescramblebutton.position(120,175)
    rescramblebutton.size(110,35)
    rescramblebutton.style('font-size',"16px")
    rescramblebutton.mousePressed(rescrambleWord)
    submitbutton = createButton("Submit")
    submitbutton.position(375,175)
    submitbutton.size(100,35)
    submitbutton.style('font-size',"16px")
    submitbutton.mousePressed(checkAnswer)
}
function draw(){
    background(220)
    text("Word Scramble Game!",300,60)
    textSize(18)
    text("Random word:" + scrambleword,300,125)
    textSize(16)
    text()
}