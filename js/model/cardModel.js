app.model.cardModel = new function(){
    cardAPI = 'https://deckofcardsapi.com/api/deck/'
    // vvv drawcard vvv
    'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2'

    let cardObj;
    let playerCardCount = 0;
    let dealerCardCount = 0;

    this.getCardObjectFromAPI = function(){
        var requestOptions = {
            method: 'GET'
        };
          
        fetch(`${cardAPI}new/shuffle/?deck_count=1`, requestOptions)
        .then(response => response.json())
        .then(result => {
            cardObj = result
        })
        .catch(error => console.log('error', error));
    }

    this.drawCardsForPlayer = function(numberOfCards){
        console.log(`draw ${numberOfCards} for player`);
        drawCards(numberOfCards, displayCardsForPlayer)
    }

    this.drawCardsForDealer = function(numberOfCards){
        console.log(`draw ${numberOfCards} for dealer`);
        drawCards(numberOfCards, displayCardsForDealer)
    }

    function drawCards(numberOfCards, callback){
        var requestOptions = {
            method: 'GET'
        }

        fetch(`${cardAPI}${cardObj.deck_id}/draw/?count=${numberOfCards}`)
        .then(response => response.json())
        .then(result => {
            callback(result);
        })
        .catch(error => console.log('error', error));
    }

    function displayCardsForDealer(cards){
        console.log(cards);
    }

    function displayCardsForPlayer(cards){
        console.log(cards);
    }
}