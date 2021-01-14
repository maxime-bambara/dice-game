// Fonction pour changer de joueur
function nextPlayer(){
    if (activePlayer === 0){
        activePlayer = 1
        resetScores()
        document.getElementById('select-player-1').style.display = 'none';
        document.getElementById('select-player-2').style.display= 'inline-block';
    } else{
        activePlayer = 0
        resetScores()
        document.getElementById('select-player-2').style.display = 'none';
        document.getElementById('select-player-1').style.display= 'inline-block';
    }
    return alert('Next player !')
}