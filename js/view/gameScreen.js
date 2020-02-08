app.view.gameScreen = new function(){

    let GameContainer = document.getElementById('GameContainer');
    // let GameButtonsContainer = document.getElementById('GameButtonsContainer');
    // let CardObj;

    this.gameScreen = function(){
        GameContainer.innerHTML = `
            <div id="GameBoard">
                <div id="DealerCards">
                    <div id="DealerCardTotal"></div>
                </div>
                <div id="PlayerCards">
                    <div id="PlayerCardTotal"></div>
                </div>
            </div>
            <div id="SelectionBoard">
                <div id="PointsContainer">
                    <div id="DealerPointsContainer">
                        <h4>DEALER POINTS: </h4>
                        <h4>0</h4>
                    </div>
                    <div id="PlayerPointsContainer">
                        <h4>PLAYER POINTS: </h4>
                        <h4>0</h4>
                    </div>
                </div>
                <div id="GameButtonsContainer">
                    <div id="DealButton">DEAL</div>
                </div>
            </div>
        `
        inititalizeEventListenerForDealButton();
    }

    function inititalizeEventListenerForDealButton(){
        let GameButtonsContainer = document.getElementById('GameButtonsContainer');
        GameButtonsContainer.innerHTML = '<div id="DealButton">DEAL</div>'
        let DealButton = document.getElementById('DealButton');
        DealButton.addEventListener('click', DealButtonEventListener)
        app.model.cardModel.getCardObjectFromAPI();
    }

    function DealButtonEventListener(){
        let DealButton = document.getElementById('DealButton');
        DealButton.removeEventListener('click', DealButtonEventListener);
        let GameButtonsContainer = document.getElementById('GameButtonsContainer');
        GameButtonsContainer.innerHTML = `
            <div id="HitButton">HIT</div>
            <div id="StandButton">STAND</div>
        `

        addEventListenerToHitStandButtons();

        // deal two cards to dealer, and two cards to player, for dealer one card showing for player both cards showing,

        app.model.cardModel.drawCardsForPlayer(2);
        app.model.cardModel.drawCardsForDealer(2);

        // do a check on whether or not player has black jack.
        //after deal change the button to the hitbutton and stand button for further game logic.
    }

    function addEventListenerToHitStandButtons(){
        document.getElementById('HitButton').addEventListener('click',HitButtonEventListener)
        document.getElementById('StandButton').addEventListener('click',StandButtonEventListener)
    }

    function StandButtonEventListener(){
        console.log('STAND');
    }

    function HitButtonEventListener(){
        console.log('HIT');
    }
}






// vvv html for game screen vvv

// <!-- <div id="GameContainer" class="cardTable"> -->
// <!-- <div id="GameBoard">
//     <div id="DealerCards">
//         <div id="DealerCardTotal"></div>
//     </div>
//     <div id="PlayerCards">
//         <div id="PlayerCardTotal"></div>
//     </div>
// </div>
// <div id="SelectionBoard">
//     <div id="PointsContainer">
//         <div id="DealerPointsContainer">
//             <h4>DEALER POINTS: </h4>
//             <h4>0</h4>
//         </div>
//         <div id="PlayerPointsContainer">
//             <h4>PLAYER POINTS: </h4>
//             <h4>0</h4>
//         </div>
//     </div>
//     <div id="GameButtonsContainer">
//         <div id="DealButton">DEAL</div>
//         <div id="HitButton">HIT</div>
//         <div id="StandButton">STAND</div>
//     </div>
// </div> -->