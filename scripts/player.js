let playerWonCounter = 0;
let tiesCounter = 0;
const playerWonText = document.getElementById('playerWonText');
const replayButton = document.querySelector('#replayButton');
const gameMenu = document.querySelector('.game-menu');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const gridButtonItself = document.querySelectorAll('.game-itself-grid-itself');
let playersMoves = '';
let playersMovesAll = [];
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
let gameStarted = false;

// START THE GAME

function startTheGame() {

    // GAME MENU
    gameMenu.classList.remove('game-menu-active');
    // STARTING THE GAME
    gameStarted = true;
    // CHANGING THE TURN
    setTimeout(() => {
        isXsTurn = true;
        changeTheTurn();
    }, 200);
};

startTheGame();

// PLAYER PLAYING

for (let i = 0; i < gridButtonItself.length; i++) {
    gridButtonItself[i].addEventListener('click', () => {
        // 
        gridButtonItself[i].textContent = 'X';
        playersMoves = playersMoves + gridButtonItself[i].value;
        playersMovesAll = playersMovesAll + gridButtonItself[i].value;
        
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

            // MAKING THE MENU APPEAR
            gameMenu.classList.add('game-menu-active');

            // GAME MENU CONTROLS
            startButton.disabled = true;
            restartButton.disabled = false;

            // GAME STARTED FALSE
            gameStarted = false;

            // ADD ONE TO PLAYER WON TEXT
            playerWonCounter++;
            playerWonText.textContent = playerWonCounter;

            // SAVING HOW MANY TIMES A PLAYER HAS WON
            localStorage.setItem('playerWonCounterLS', playerWonCounter);
        } else {
            playerMoveCounter = 0;
            playersMoves = '';
        };
    };
};

// RESTART THE GAME

function restartTheGame() {
    // RESETTING EVERYTHING PLAYER
    playerMoveCounter = 0;
    playersMoves = '';
    playersMovesAll = '';

    // RESETTING EVERYTHING COMPUTER
    computerMoveCounter = 0;
    computersMoves = '';
    computersMovesAll = '';

    // GAME STARTED TRUE
    gameStarted = true;

    // 
    for (const gridButtonItselfs of gridButtonItself) {
        gridButtonItselfs.textContent = '';
        gridButtonItselfs.classList.remove('game-itself-grid-itself-clicked');
    };

    // MAKING THE MENU DISAPPEAR
    gameMenu.classList.remove('game-menu-active');
};

// INITIALIZING BUTTONS
startButton.addEventListener('click', startTheGame);
restartButton.addEventListener('click', restartTheGame);
replayButton.addEventListener('click', restartTheGame);

// LOCAL STORAGE

function displayHowManyTimesPlayerHasWon() {
    const playerWonCounterLS = localStorage.getItem('playerWonCounterLS');

    if (playerWonCounterLS > 0) {
        playerWonCounter = playerWonCounterLS;
        playerWonText.textContent = playerWonCounterLS;
    };
};

displayHowManyTimesPlayerHasWon();