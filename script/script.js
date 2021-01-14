// Initialisation des variables
let scores, activePlayer, diceScore, inGame, currentScores, playerNumber

// Récupération du boutton 'Nouvelle partie'
document.getElementById('new-game').addEventListener('click', newGame)

// Récupération du boutton 'Lancer de dé'
document.getElementById('throw-dice').addEventListener('click', function() {
    if(inGame){
        diceScore = Math.trunc(Math.random() * 6 + 1)
        currentScores[activePlayer] = parseInt(document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent, 10)
        if (diceScore != 1){
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.png'
            currentScores[activePlayer] += diceScore
            document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent = currentScores[activePlayer]
        } else {
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.png'
            document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent = currentScores[activePlayer]
            nextPlayer()
        }
    }
})

// Récupération du boutton 'Ajouter au score'
document.getElementById('add-to-score').addEventListener('click', function(){
    if(inGame && currentScores[activePlayer] != 0){
        scores[activePlayer] += currentScores[activePlayer]
        document.getElementById('score-player-' + playerNumber[activePlayer]).textContent = scores[activePlayer]
        checkIfWin()
    }
})
