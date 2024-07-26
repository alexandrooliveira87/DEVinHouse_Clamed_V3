const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.game-board');
const restartButton = document.getElementById('restart');
const playerXScore = document.getElementById('player-x');
const playerOScore = document.getElementById('player-o');

let isXTurn = true;
let boardState = Array(9).fill(null);
let scores = { X: 0, O: 0 };

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = () => {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return pattern;
        }
    }
    return null;
};

const handleClick = (e) => {
    const cell = e.target;
    const index = [...cells].indexOf(cell);

    if (boardState[index] || checkWin()) return;

    boardState[index] = isXTurn ? 'X' : 'O';
    cell.textContent = boardState[index];

    const winningPattern = checkWin();
    if (winningPattern) {
        winningPattern.forEach(idx => cells[idx].classList.add('winner'));
        alert(`${boardState[winningPattern[0]]} venceu!`);
        scores[boardState[winningPattern[0]]]++;
        updateScores();
    } else if (!boardState.includes(null)) {
        alert('Empate!');
    }

    isXTurn = !isXTurn;
};

const updateScores = () => {
    playerXScore.textContent = scores.X;
    playerOScore.textContent = scores.O;
};

const restartGame = () => {
    boardState = Array(9).fill(null);
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
    });
    isXTurn = true;
};

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartButton.addEventListener('click', restartGame);
