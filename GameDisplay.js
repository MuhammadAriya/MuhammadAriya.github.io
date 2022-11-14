let RabbitCanvas = document.getElementById("LevelCanvas")
let CanvasMenu = document.getElementById("CanvasMenu")

let TheTittleGame = document.getElementById("TheTittleGame")
let PlayButtonMenu = document.getElementById("PlayButtonMenu")
let AboutButtonMenu = document.getElementById("AboutButtonMenu")

let GameLevelOne = document.getElementById("GameLevelOne")
let GameLevelTwo = document.getElementById("GameLevelTwo")
let GameLevelThree = document.getElementById("GameLevelThree")
let HomeButton = document.getElementById("HomeButton")

let TheTittleGameOver = document.getElementById("TheTittleGameOver")
let NextLevelButton = document.getElementById("NextLevelButton")
let RestartButton = document.getElementById("RestartButton")
let MainMenuButton = document.getElementById("MainMenuButton")
let TittleScore = document.getElementById("TittleScore")
let ScoreGame = document.getElementById("ScoreGame")

let LevelRunning = document.getElementById("LevelRunning")
let DisplayScore = document.getElementById("DisplayScore")
let Score = document.getElementById("Score")

let TittleAbout = document.getElementById("TittleAbout")
let AboutGame1 = document.getElementById("AboutGame1")
let AboutGame2 = document.getElementById("AboutGame2")
let AboutGame3 = document.getElementById("AboutGame3")
let ButtonPaused = document.getElementById("ButtonPaused")
ButtonPaused.onclick = function(){
    ButtonPaused.style.visibility = "hidden"
    PauseLevel()
    DisplayLevelThreePaused()
}

function showRabbitCanvas(){
    RabbitCanvas.style.visibility = "visible"
}
function hideRabbitCanvas(){
    RabbitCanvas.style.visibility = "hidden"
}
function showCanvasMenu(){
    CanvasMenu.style.visibility = "visible"
}
function hideCanvasMenu(){
    CanvasMenu.style.visibility = "hidden"
}
function showTheTittleGame(){
    TheTittleGame.style.visibility = "visible"
}
function hideTheTittleGame(){
    TheTittleGame.style.visibility = "hidden"
}
function showPlayButtonMenu(){
    PlayButtonMenu.style.visibility = "visible"
}
function hidePlayButtonMenu(){
    PlayButtonMenu.style.visibility = "hidden"
}
function showAboutButtonMenu(){
    AboutButtonMenu.style.visibility = "visible"
}
function hideAboutButtonMenu(){
    AboutButtonMenu.style.visibility = "hidden"
}
function showHomeButton(){
    HomeButton.style.visibility = "visible"
}
function hideHomeButton(){
    HomeButton.style.visibility = "hidden"
}
function showGameLevelOne(){
    GameLevelOne.style.visibility = "visible"
}
function hideGameLevelOne(){
    GameLevelOne.style.visibility = "hidden"
}
function showGameLevelTwo(){
    GameLevelTwo.style.visibility = "visible"
}
function hideGameLevelTwo(){
    GameLevelTwo.style.visibility = "hidden"
}
function showGameLevelThree(){
    GameLevelThree.style.visibility = "visible"
}
function hideGameLevelThree(){
    GameLevelThree.style.visibility = "hidden"
}
function showTheTittleGameOver(){
    TheTittleGameOver.style.visibility = "visible"
}
function hideTheTittleGameOver(){
    TheTittleGameOver.style.visibility = "hidden"
}
function showNextLevelButton(){
    NextLevelButton.style.visibility = "visible"
}
function hideNextLevelButton(){
    NextLevelButton.style.visibility = "hidden"
}
function showRestartButton(){
    RestartButton.style.visibility = "visible"
}
function hideRestartButton(){
    RestartButton.style.visibility = "hidden"
}
function showMainMenuButton(){
    MainMenuButton.style.visibility = "visible"
}
function hideMainMenuButton(){
    MainMenuButton.style.visibility = "hidden"
}
function showTittleScore(){
    TittleScore.style.visibility = "visible"
}
function hideTittleScore(){
    TittleScore.style.visibility = "hidden"
}
function showScoreGame(){
    ScoreGame.style.visibility = "visible"
}
function hideScoreGame(){
    ScoreGame.style.visibility = "hidden"
}
function showLevelRunning(){
    LevelRunning.style.visibility = "visible"
}
function hideLevelRunning(){
    LevelRunning.style.visibility = "hidden"
}
function showDisplayScore(){
    DisplayScore.style.visibility = "visible"
}
function hideDisplayScore(){
    DisplayScore.style.visibility = "hidden"
}
function showScore(){
    Score.style.visibility = "visible"
}
function hideScore(){
    Score.style.visibility = "hidden"
}
function showTittleAbout(){
    TittleAbout.style.visibility = "visible"
}
function hideTittleAbout(){
    TittleAbout.style.visibility = "hidden"
}
function showAboutGame1(){
    AboutGame1.style.visibility = "visible"
}
function hideAboutGame1(){
    AboutGame1.style.visibility = "hidden"
}
function showAboutGame2(){
    AboutGame2.style.visibility = "visible"
}
function hideAboutGame2(){
    AboutGame2.style.visibility = "hidden"
}
function showAboutGame3(){
    AboutGame3.style.visibility = "visible"
}
function hideAboutGame3(){
    AboutGame3.style.visibility = "hidden"
}
function DisplayMainMenu(){
    showRabbitCanvas()
    showTheTittleGame()
    showPlayButtonMenu()
    showAboutButtonMenu()

    hideGameLevelOne()
    hideGameLevelTwo()
    hideGameLevelThree()
    hideHomeButton()

    hideTittleAbout()
    hideAboutGame1()
    hideAboutGame2()
    hideAboutGame3()

    hideTheTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()

    hideLevelRunning()
    hideDisplayScore()
    hideScore()

    ButtonPaused.style.visibility = "hidden"
}

function ButtonLevelOne(){
    hideHomeButton()
    hideGameLevelOne()
    hideGameLevelTwo()
    hideGameLevelThree()

    showLevelRunning()
    showDisplayScore()
    showScore()
    showRabbitCanvas()

    hideCanvasMenu()

    LevelComponent()
    LevelRunning.innerHTML = "Level 1"
    StartLevel()
}
function ButtonLevelTwo(){
    hideHomeButton()
    hideGameLevelOne()
    hideGameLevelTwo()
    hideGameLevelThree()

    showLevelRunning()
    showDisplayScore()
    showScore()
    showRabbitCanvas()

    hideCanvasMenu()

    LevelComponent()
    LevelRunning.innerHTML = "Level 2"
    StartLevel()
}
function ButtonLevelThree(){
    hideHomeButton()
    hideGameLevelOne()
    hideGameLevelTwo()
    hideGameLevelThree()
    
    showRabbitCanvas()
    showLevelRunning()
    showDisplayScore()
    showScore()

    hideCanvasMenu()

    LevelComponent()
    ButtonPaused.style.visibility = "visible"
    LevelRunning.innerHTML = "Level Endless"
    StartLevel()
}
HomeButton.onclick = function(){
    DisplayMainMenu()
}
PlayButtonMenu.onclick = function(){
    hidePlayButtonMenu()
    hideAboutButtonMenu()

    showHomeButton()
    showGameLevelOne()
    showGameLevelTwo()
    showGameLevelThree()
}
AboutButtonMenu.onclick = function(){
    hidePlayButtonMenu()
    hideAboutButtonMenu()
    hideTheTittleGame()

    showHomeButton()
    showTittleAbout()
    showAboutGame1()
    showAboutGame2()
    showAboutGame3()
}
NextLevelButton.onclick = function(){
    if(NextLevelButton.innerHTML == "Next Level"){
        LevelComponent()
        LevelRunning.innerHTML = "Level 2"
        StartLevel()
    }
    if(NextLevelButton.innerHTML == "Previous Level"){
        LevelComponent()
        LevelRunning.innerHTML = "Level 1"
        StartLevel()
    }
    if(NextLevelButton.innerHTML == "Resume"){
        ResumeLevel()
        ButtonPaused.style.visibility = "visible"
    }
    
    Score.innerHTML = "0"

    showLevelRunning()
    showDisplayScore()
    showScore()

    hideTheTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()
}
RestartButton.onclick = function(){
    RestartButton.innerHTML = "Restart"
    if(LevelRunning.innerHTML == "Level Endless"){
        ButtonPaused.style.visibility = "visible"
    }
    RestartLevel()
    Score.innerHTML = "0"

    showLevelRunning()
    showDisplayScore()
    showScore()

    hideTheTittleGameOver()
    hideNextLevelButton()
    hideRestartButton()
    hideMainMenuButton()
    hideTittleScore()
    hideScoreGame()
}

MainMenuButton.onclick = function(){
    Score.innerHTML = "0"

    DisplayMainMenu()
    hideRabbitCanvas()
    showCanvasMenu()
    StopLevel()
}
function DisplayGameOverLevelOne(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    
    TheTittleGameOver.style.animation = "TiiteGameOverStyle2 2s infinite"
    showTheTittleGameOver()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    TheTittleGameOver.innerHTML = "GAME OVER!"
}
function DisplayGameOverLevelTwo(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    TheTittleGameOver.style.animation = "TiiteGameOverStyle2 2s infinite"
    showTheTittleGameOver()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    TheTittleGameOver.innerHTML = "GAME OVER!"
}
function DisplayGameOverLevelThree(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    TheTittleGameOver.style.animation = "TiiteGameOverStyle2 2s infinite"
    showTheTittleGameOver()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    ButtonPaused.style.visibility = "hidden"

    TheTittleGameOver.innerHTML = "GAME OVER!"
}
function DisplayLevelOneFinish(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    TheTittleGameOver.style.animation = "TiiteGameOverStyle 2s infinite"
    showTheTittleGameOver()
    showNextLevelButton()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    NextLevelButton.innerHTML = "Next Level"
    TheTittleGameOver.innerHTML = "Level 1 Finished"
    RestartButton.innerHTML = "Play Again"
}
function DisplayLevelTwoFinish(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    TheTittleGameOver.style.animation = "TiiteGameOverStyle 2s infinite"
    showTheTittleGameOver()
    showNextLevelButton()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    NextLevelButton.innerHTML = "Previous Level"
    TheTittleGameOver.innerHTML = "Level 2 Finished"
    RestartButton.innerHTML = "Play Again"
}
function DisplayLevelThreePaused(){
    hideLevelRunning()
    hideDisplayScore()
    hideScore()
    TheTittleGameOver.style.animation = "TiiteGameOverStyle 2s infinite"
    showTheTittleGameOver()
    showNextLevelButton()
    showRestartButton()
    showMainMenuButton()
    showTittleScore()
    showScoreGame()
    NextLevelButton.innerHTML = "Resume"
    TheTittleGameOver.innerHTML = "GAME PAUSED!"
}