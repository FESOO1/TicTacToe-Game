let computersMoves = '';
let computersMovesAll = '';
let computerMoveCounter = 0;
let computerMove;
let computerInterval;

let computerWonCounter = 0;
const computerWonText = document.getElementById('computerWonText');

function computersTurn() {
    computerMove = Math.floor(Math.random() * gridButtonItself.length);
    gridButtonItself[computerMove].textContent = '0';
    computersMoves = computersMoves + gridButtonItself[computerMove].value;
    computersMovesAll = computersMovesAll + gridButtonItself[computerMove].value;
    // INCREMENTING BY ONE
    computerMoveCounter++;
    // CHANGING THE TURN
    isXsTurn = true;
    changeTheTurn();
    // CHECKING IF THE COMPUTER HAS WON THE GAME
    checkIfTheComputerWon();
};

// CHECK IF THE GAME IS WON

function checkIfTheComputerWon() {
    // WE WILL CHECK IF THE PLAYER HAS CLICKED THREE TIMES
    if (computerMoveCounter === 3) {
        // IF SO, WE WILL CHECK IF THE PLAYER HAS WON THE GAME
        if (winningMoves.includes(computersMoves)) {
            // HERE WE WILL SHOW A TEXT THAT SHOWS A MESSAGE TO TELL THAT THE PLAYER HAS WON THE GAME.
            alert('Game has been won.');

            // MAKING THE MENU APPEAR
            gameMenu.classList.add('game-menu-active');

            // GAME MENU CONTROLS
            startButton.disabled = true;
            restartButton.disabled = false;

            // GAME STARTED FALSE
            gameStarted = false;

            // ADD ONE TO PLAYER WON TEXT
            computerWonCounter++;
            computerWonText.textContent = computerWonCounter;

            // SAVING HOW MANY TIMES A PLAYER HAS WON
            localStorage.setItem('playerWonCounterLS', playerWonCounter);
        } else {
            computerMoveCounter = 0;
            computersMoves = '';
        };
    };
};