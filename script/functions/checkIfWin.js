// Vérifier si le joueur a gagner et changer de joueur si ce n'est pas le cas
function checkIfWin() {

    if (scores[activePlayer] >= 100) {
        alert('Victoire du joueur ' + playerNumber[activePlayer]);
        newGame();
        return true;
    } else {
        nextPlayer();
    }
}
