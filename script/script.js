// Initialisation des variables
let scores, activePlayer, diceScore, inGame, currentScores, playerNumber

// Remettre à zéro les variables pour une nouvelle partie
function newGame(){
    scores = [0,0]
    currentScores = [0,0]
    activePlayer = 0
    diceScore = 0
    inGame = true
    playerNumber = [1,2]

    document.getElementById('img-result').src = 'assets/img/0.jpg'
    document.getElementById('score-player-1').textContent = 0
    document.getElementById('score-player-2').textContent = 0
    document.getElementById('dice-result-1').textContent = 0
    document.getElementById('dice-result-2').textContent = 0
}

// Récupération du boutton 'Nouvelle partie'
document.getElementById('new-game').addEventListener('click', newGame)

// Récupération du boutton 'Lancer de dé'
document.getElementById('throw-dice').addEventListener('click', function() {
    if(inGame){
        diceScore = Math.trunc(Math.random() * 6 + 1)
        currentScores[activePlayer] = parseInt(document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent, 10)
        if (diceScore != 1){
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.jpg'
            currentScores[activePlayer] += diceScore
            document.getElementById('dice-result-' + playerNumber[activePlayer]).textContent = currentScores[activePlayer]
        } else {
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.jpg'
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
