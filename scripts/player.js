const gridButtonItself = document.querySelectorAll('.game-itself-grid-itself');
let playersMoves = '';
const winningMoves = ['123','321', '213', '231', '456', '654', '546', '564', '789', '987', '879', '897'];
let moveByPlayer;

// START THE GAME

function startTheGame() {
    isXsTurn = true;
    changeTheTurn();
};

startTheGame();

// PLAYER PLAYING

for (let i = 0; i < gridButtonItself.length; i++) {
    gridButtonItself[i].addEventListener('click', () => {
        gridButtonItself[i].textContent = 'X';
        playersMoves = playersMoves + gridButtonItself[i].value;
        // 
        checkIfTheGameIsWon();
        // CHANGING THE TURN
        isXsTurn = true;
        changeTheTurn();
    });
};


// CHECK IF THE GAME IS WON

function checkIfTheGameIsWon() {
    if (winningMoves.includes(playersMoves)) {
        alert('Game has been won.');
    } else {
        alert('Game has not been won.');
    };
};