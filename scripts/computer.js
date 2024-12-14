let computersMoves = '';
let computersMovesAll = '';
let computerMoveCounter = 0;
let computerMove;
let computerInterval;

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
};