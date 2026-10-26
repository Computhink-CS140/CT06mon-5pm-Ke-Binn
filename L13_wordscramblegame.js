let word = ["nathan","jaden","keith"]
let currentwor,scrambleword,input,rescramblebutton,submitbutton
let score = 0
let streak = 0
let maxstreak = 0
let message= ""
function preload(){
    winsound = loadSound('assets/Win.mp3')
    losesound = loadSound('assets/Lose.mp3')
    rescramblesound = loadSound('assets/DunDunDunnn.mp3')
}
function setup(){
    createCanvas(600,400)
    currentword = random(word)
    scrambleword = shuffleWord(currentword)
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
    text("Score" + score,300,250)
    text("Streak " + streak+ "(Max: )" + maxStreak,300,275)
    text(message,300,315)
}
function shuffleWord(word){
    let arr = word.split('')
    for(let i = arr.length -1;i>0; i--){
        let j = floor(random(i+1))
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr.join('')
}
function rescrambleWord(){
    rescrambleWord.play()
    scrambleword = shuffleword(currentword)
}
function checkAnswer(){
    let answer = input.value().trim().toUpperCase()
    if(answer === currentword){
        winsound.play()
        score++
        streak++
        if(streak>maxStreak){
            maxStreak = streak
        }
        message: "correct"
        currentword = random(word)
        scrambleword = shuffleword(currentword)
    }else{
        losesound.play()
        streak = 0
        message = "try again"

    }
    input.valve("")
}
function displayText(){
    displaytext = input.value()
}