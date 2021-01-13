// Initialisation des variables
let scores, activePlayer, diceScore, inGame

// Remettre à zéro les variables pour une nouvelle partie
function newGame(){
    scores = [0,0]
    activePlayer = 0
    diceScore = 0
    inGame = true

    document.getElementById('img-result').src = 'assets/img/1.jpg'
    document.getElementById('dice-result').textContent = 0
    document.getElementById('count-player-1').textContent = 0
    document.getElementById('count-player-2').textContent = 0
    document.getElementById('player1').style.color = 'green'
    document.getElementById('player2').style.color = 'grey'

}

// Fonction pour changer de joueur
function nextPlayer(){
    if (activePlayer === 0){
        activePlayer = 1
        diceScore = 0

    } else{
        activePlayer = 0
        diceScore = 0
    }
    switchColorPlayer()
}
// Changer couleur du User lorsqu'il est actif
function switchColorPlayer() {
    if (activePlayer === 0){
        document.getElementById('player1').style.color = 'green'
        document.getElementById('player2').style.color = 'grey'
    }

    if (activePlayer === 1){
        document.getElementById('player2').style.color = 'green'
        document.getElementById('player1').style.color = 'grey'
    }    
}

// Vérifier si le joueur a gagner et changer de joueur si ce n'est pas le cas
function checkIfWin() {
    let userNumber = activePlayer + 1
    if(scores[activePlayer] >= 10){
        alert('Victoire du joueur ' + userNumber)
        newGame()
        return true
    } else {
        nextPlayer()
    }
}


// Récupération du boutton 'Nouvelle partie'
document.getElementById('new-game').addEventListener('click', newGame)

// Récupération du boutton 'Lancer de dé'
document.getElementById('throw-dice').addEventListener('click', function() {
    if(inGame){
        diceScore = Math.trunc(Math.random() * 6 + 1)
        if (diceScore != 1){
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.jpg'
            document.getElementById('dice-result').textContent = diceScore
        } else {
            document.getElementById('img-result').src = 'assets/img/' + diceScore + '.jpg'
            document.getElementById('dice-result').textContent = diceScore
            nextPlayer()
        }
    }
})

// Récupération du boutton 'Ajouter au score'
document.getElementById('add-to-score').addEventListener('click', function(){
    if(inGame){
        scores[activePlayer] += diceScore
        let userNumber = activePlayer + 1
        document.getElementById('count-player-' + userNumber).textContent = scores[activePlayer]
        checkIfWin()
    }
})
