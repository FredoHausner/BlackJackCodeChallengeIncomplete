app.model.pointsModel = new function(){
    playerPoints = 0;
    dealerPoints = 0;


    this.allocatePlayerPoints = function(){
        console.log('allocate player points')
    }

    this.allocateDealerPoints = function(){
        console.log('allocate dealer points');
    }

    this.updatePointsUI = function(){
        console.log('update points');
    }
}