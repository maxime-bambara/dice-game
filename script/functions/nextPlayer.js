// Fonction pour changer de joueur
function nextPlayer(){
    if (activePlayer === 0){
        activePlayer = 1
        resetScores()
        document.getElementById('select-player-1').style.opacity = '0';
        document.getElementById('select-player-2').style.opacity= '0.8';
    } else{
        activePlayer = 0
        resetScores()
        document.getElementById('select-player-2').style.opacity = '0';
        document.getElementById('select-player-1').style.opacity= '0.8';
    }
}