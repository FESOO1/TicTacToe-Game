const gridButtonItself = document.querySelectorAll('.game-itself-grid-itself');
let playersMoves = '';
const winningMoves = [
    '123', '132', '213', '231', '312', '321', // Row 1
    '456', '465', '546', '564', '645', '654', // Row 2
    '789', '798', '879', '897', '978', '987', // Row 3
    '147', '174', '417', '471', '741', '714', // Column 1
    '258', '285', '528', '582', '852', '825', // Column 2
    '369', '396', '639', '693', '936', '963', // Column 3
    '159', '195', '519', '591', '915', '951', // Diagonal 1
    '357', '375', '537', '573', '735', '753'  // Diagonal 2
];
let playerMoveCounter = 0;

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
        // CHANGING THE TURN
        isXsTurn = false;
        changeTheTurn();
        // MAKING IT UNCLICKABLE
        gridButtonItself[i].classList.add('game-itself-grid-itself-clicked');
        // INCREMENTING BY ONE
        playerMoveCounter++;

        // CHECKING IF THE PLAYER HAS WON THE GAME.
        checkIfThePlayerWon();
    });
};


// CHECK IF THE GAME IS WON

function checkIfThePlayerWon() {
    // WE WILL CHECK IF THE PLAYER HAS CLICKED THREE TIMES
    if (playerMoveCounter === 3) {
        // IF SO, WE WILL CHECK IF THE PLAYER HAS WON THE GAME
        if (winningMoves.includes(playersMoves)) {
            // HERE WE WILL SHOW A TEXT THAT SHOWS A MESSAGE TO TELL THAT THE PLAYER HAS WON THE GAME.
            alert('Game has been won.');

            // RESETTING EVERYTHING
            playerMoveCounter = 0;
            playersMoves = '';

            for (const gridButtonItselfs of gridButtonItself) {
                gridButtonItselfs.textContent = '';
                gridButtonItselfs.classList.remove('game-itself-grid-itself-clicked');
            };

            // CHANGING THE TURN
            isXsTurn = true;
            changeTheTurn();
        } else {
            playerMoveCounter = 0;
            playersMoves = '';
        };
    };
};