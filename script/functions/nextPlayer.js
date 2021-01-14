// Fonction pour changer de joueur
function nextPlayer(){
    if (activePlayer === 0){
        activePlayer = 1
        resetScores()
    } else{
        activePlayer = 0
        resetScores()
    }
}