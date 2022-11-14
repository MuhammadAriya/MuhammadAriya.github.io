function disableselect(e){
    return false
}
function reEnable(e){
    return true
}
document.onselectstart = new Function ("return false")

if (window.sidebar){
    document.onmousedown = disableselect
    document.onclick = reEnable
}

const SpaceBar = 32 
window.addEventListener("keydown", function(){
    if(LevelRunning.innerHTML == "Level 1"){
        RabbitJump(event)
    }
    if(LevelRunning.innerHTML == "Level 2"){
        RabbitJumpVersi1(event)
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        RabbitJumpVersi2(event)
    }
})
function RabbitJump(event){
    const KeyPressed = event.keyCode
    if(KeyPressed == SpaceBar && Rabbit.y >= 431){
        Rabbit.moveY = -8
    }
}
function RabbitJumpVersi1(event){
    const KeyPressed = event.keyCode
    if(KeyPressed == SpaceBar && Rabbit.y >= 431){
        Rabbit.moveY = -12
    }
}
function RabbitJumpVersi2(event){
    const KeyPressed = event.keyCode
    if(KeyPressed == SpaceBar && Rabbit.y >= 431){
        Rabbit.moveY = -12
    }
}

let ScoreLevel = 0

let LevelOne
let LevelTwo
let LevelThree

function StartLevel(){
    if(LevelRunning.innerHTML == "Level 1"){
        if(LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(RabbitGameLevelOne, 10)
    }
    if(LevelRunning.innerHTML == "Level 2"){
        if(LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(RabbitGameLevelTwo, 10)
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        if(LevelThree) clearInterval(LevelThree)
            LevelThree = setInterval(RabbitGameLevelThree, 10)
    }
}
//Pause Game
function PauseLevel(){
    if(LevelRunning.innerHTML == "Level 1"){
        clearInterval(LevelOne)
    }
    if(LevelRunning.innerHTML == "Level 2"){
        clearInterval(LevelTwo)
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        clearInterval(LevelThree)
    }
}
//Resume Game
function ResumeLevel(){
    if(LevelRunning.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(RabbitGameLevelOne, 10)
    }
    if(LevelRunning.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(RabbitGameLevelTwo, 10)
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        if (LevelThree) clearInterval(LevelThree)
            LevelThree = setInterval(RabbitGameLevelThree, 10)
    }
}
//Stop Game
function StopLevel(){
    if(LevelRunning.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelComponent()
    }
    if(LevelRunning.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelComponent()
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        if (LevelThree) clearInterval(LevelThree)
        LevelComponent()
    }
}
function RestartLevel(){
    if(LevelRunning.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(RabbitGameLevelOne, 10)
        LevelComponent()
    }
    if(LevelRunning.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(RabbitGameLevelTwo, 10)
        LevelComponent()
    }
    if(LevelRunning.innerHTML == "Level Endless"){
        if (LevelThree) clearInterval(LevelThree)
        LevelThree = setInterval(RabbitGameLevelThree, 10)
        LevelComponent()
    }
}
var DrawRabbitCanvas = RabbitCanvas.getContext('2d');
var GameRabbitHeight = RabbitCanvas.height
var GameRabbitWidth = RabbitCanvas.width
let Fence = []

function LevelComponent(){
    BackgroundGame = new ObjectGame(0, 0, 1200, 600, "BackgroundLevel.png", "image")
    Rabbit = new ObjectGame(100, 0, 235, 169 ,"rabbit.png", "image" )
    ScoreLevel = 0
    Fence.splice(0, Fence.length)
    frameLevelGame = 0
}
function ObjectGame(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.jumpX = 0
    this.jumpY = 0
    this.moveY = 0
    this.moveX = 0
    this.gravity = 2.05
    this.width = width
    this.height = height
    this.color = color
    this.type = type
    if(type == "image"){
        this.image = new Image()
        this.image.src = color ;
    }
    this.update = function(){
        ctx = DrawRabbitCanvas
    if (type == "image"){
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }else{
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    }
    this.movement = function(){
        this.x += this.jumpX
        this.y += this.jumpY += this.gravity
        this.hitBottom()
    }
    this.jump = function(){
        this.x += this.moveX
        this.y += this.moveY
        this.hitTop()
    }
    this.hitBottom = function(){
        var rockbottom = 600 - this.height;
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }
    this.hitTop = function(){
        var rocktop = 200
        if(this.y < rocktop){
            Rabbit.moveY = 1
        }
    }
    this.DetectionScoreLevelOne = function(ScoreOneobj){
        var OneScoreleft = this.x
        var OneScoreright = this.x + 2.5
        var ScoreOneleft = ScoreOneobj.x
        var ScoreOneright = ScoreOneobj.x + 2.5
        if (OneScoreright >= ScoreOneleft && OneScoreleft <= ScoreOneright){
                ScoreLevel += 1
                Score.innerHTML = ScoreLevel
                ScoreGame.innerHTML = ScoreLevel
        }
    }
    this.DetectionScoreLevelTwo = function(ScoreTwoobj){
        var TwoScoreleft = this.x
        var TwoScoreright = this.x + 3.5
        var ScoreTwoleft = ScoreTwoobj.x
        var ScoreTworight = ScoreTwoobj.x + 3.5
        if (TwoScoreright >= ScoreTwoleft && TwoScoreleft <= ScoreTworight){
                ScoreLevel += 1
                Score.innerHTML = ScoreLevel
                ScoreGame.innerHTML = ScoreLevel
        }
    }
    this.DetectionScoreLevelThree = function(ScoreTwoobj){
        var TwoScoreleft = this.x
        var TwoScoreright = this.x + 3.25
        var ScoreTwoleft = ScoreTwoobj.x
        var ScoreTworight = ScoreTwoobj.x + 3.25
        if (TwoScoreright >= ScoreTwoleft && TwoScoreleft <= ScoreTworight){
                ScoreLevel += 1
                Score.innerHTML = ScoreLevel
                ScoreGame.innerHTML = ScoreLevel
        }
    }
    this.crashWith = function(Nextobj) {
        var Myleft = this.x;
        var Myright = this.x + (this.width) - 40
        var Mytop = this.y;
        var Mybottom = this.y + (this.height) - 10
        var TheNextleft = Nextobj.x;
        var TheNextright = Nextobj.x + (Nextobj.width) - 40
        var TheNexttop = Nextobj.y;
        var TheNextbottom = Nextobj.y + (Nextobj.height) - 10
        var crash = true;
        if ((Mybottom < TheNexttop) || (Mytop > TheNextbottom) || (Myright < TheNextleft) || (Myleft > TheNextright)) {
            crash = false;
        }
        return crash;
    }
}
function ClearRabbitCanvas(){
    DrawRabbitCanvas.clearRect(0, 0, GameRabbitWidth, GameRabbitHeight)
}
function RabbitGameLevelOne(){
    for (i = 0; i < Fence.length; i += 1){
        if (Rabbit.crashWith(Fence[i])){
            StopLevel()
            DisplayGameOverLevelOne()
            return
        }
    }
    if(Score.innerHTML == "75"){
        StopLevel()
        DisplayLevelOneFinish()
    }
    ClearRabbitCanvas()
    BackgroundGame.update()
    frameLevelGame += 1
    if(frameLevelGame == 1 || everyInterval(600)){
        var rand1 = Math.random();
        if (rand1 < 0.34) {
            rand1 = "Obs1.png"
        } else if (rand1 >= 0.34 && rand1 < 0.67) {
            rand1 = "Obs2.png"
        } else {
            rand1 = "Obs2.png";
        }
        var rand2 = Math.random();
        if (rand2 < 0.34) {
            rand2 = "Obs1.png"
        } else if (rand2 >= 0.34 && rand2 < 0.67) {
            rand2 = "Obs1.png"
        } else {
            rand2 = "Obs2.png";
        }
        var rand3 = Math.random();
        if (rand3 < 0.34) {
            rand3 = "Obs1.png"
        } else if (rand3 >= 0.34 && rand3 < 0.67) {
            rand3 = "Obs2.png"
        } else {
            rand3 = "Obs3.png";
        }
        Fence.push(new ObjectGame(1200, 600 - 50, 50, 70, rand1, "image"))
        Fence.push(new ObjectGame(1800, 600 - 50, 50, 70, rand2, "image"))
        Fence.push(new ObjectGame(2400, 600 - 50, 50, 70, rand1, "image"))
        Fence.push(new ObjectGame(3000, 600 - 50, 50, 70, rand3, "image"))
        
        // Fence.push(new ObjectGame(1200, 600 - 50, 50, 70, "Obs1.png", "image"))
        // Fence.push(new ObjectGame(1800, 600 - 50, 50, 70, "Obs1.png", "image"))
        // Fence.push(new ObjectGame(2400, 600 - 50, 50, 70, "Obs1.png", "image"))
        // Fence.push(new ObjectGame(3000, 600 - 50, 50, 70, "Obs1.png", "image"))
    }
    for(i = 0; i < Fence.length; i += 1){
        Fence[i].jumpX = -5
        Fence[i].movement()
        Fence[i].update()
        Rabbit.DetectionScoreLevelOne(Fence[i])
    }
    Rabbit.movement()
    Rabbit.jump()
    Rabbit.jumpY = 1
    Rabbit.update()
}
function RabbitGameLevelTwo(){
    for (i = 0; i < Fence.length; i += 1){
        if (Rabbit.crashWith(Fence[i])){
            StopLevel()
            DisplayGameOverLevelTwo()
            return
        }
    }
    if(Score.innerHTML == "75"){
        StopLevel()
        DisplayLevelTwoFinish()
    }
    ClearRabbitCanvas()
    BackgroundGame.update()
    frameLevelGame += 1
    if(frameLevelGame == 1 || everyInterval(200)){
        Fence.push(new ObjectGame(1200, 600 - 50, 50, 70, "Obs1.png", "image"))
        Fence.push(new ObjectGame(1800, 600 - 50, 50, 70, "Obs2.png", "image"))
    }
    for(i = 0; i < Fence.length; i += 1){
        Fence[i].jumpX = -7
        Fence[i].movement()
        Fence[i].update()
        Rabbit.DetectionScoreLevelTwo(Fence[i])
    }
    Rabbit.movement()
    Rabbit.jump()
    Rabbit.jumpY = 2
    Rabbit.update()
}
function RabbitGameLevelThree(){
    for (i = 0; i < Fence.length; i += 1){
        if (Rabbit.crashWith(Fence[i])){
            StopLevel()
            DisplayGameOverLevelThree()
            return
        }
    }
    ClearRabbitCanvas()
    BackgroundGame.update()
    frameLevelGame += 1
    if(frameLevelGame == 1 || everyInterval(200)){
        Fence.push(new ObjectGame(1200, 600 - 50, 50, 70, "Obs1.png", "image"))
        Fence.push(new ObjectGame(1800, 600 - 50, 50, 70, "Obs2.png", "image"))
    }
    for(i = 0; i < Fence.length; i += 1){
        Fence[i].jumpX = -7
        Fence[i].movement()
        Fence[i].update()
        Rabbit.DetectionScoreLevelThree(Fence[i])
    }
    Rabbit.movement()
    Rabbit.jump()
    Rabbit.jumpY = 2
    Rabbit.update()
}
function everyInterval(n){
    if((frameLevelGame / n) % 1 == 0){
        return true
    }
    return false
}