// Réinitialisation des currents scores et dice score
function resetScores() {
    diceScore = 0;
    currentScores = [0, 0];
    document.getElementById('dice-result-1').textContent = 0
    document.getElementById('dice-result-2').textContent = 0
}
