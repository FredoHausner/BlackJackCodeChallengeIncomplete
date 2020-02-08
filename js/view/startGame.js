app.model.startGameScreen = new function(){

    let gameContainer = document.getElementById('GameContainer');
    let startGameButton = document.getElementById('StartGameButton');


    (function initializeStartGameButton(){
        startGameButton.addEventListener('click', changeLandingPageToGameScreen)
    }())

    function changeLandingPageToGameScreen(){
        removeEventListenerFromStartButton();
        changeClassesForGameBoard();
        app.view.gameScreen.gameScreen();
    }

    function removeEventListenerFromStartButton(){
        startGameButton.removeEventListener('click', changeLandingPageToGameScreen)
    }

    function changeClassesForGameBoard(){
        gameContainer.classList.remove('StartGameHomeScreen');
        gameContainer.classList.add('cardTable')
    }
}