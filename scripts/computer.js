let computersMoves = '';
let computersMovesAll = '';
let computerMoveCounter = 0;
let computerMove;
let computerInterval;

function computersTurn() {
    computerInterval = setInterval(() => {
        computerMove = Math.floor(Math.random() * gridButtonItself.length);
        if (computersMovesAll.includes(computerMove.toString())) {
            computerMove = Math.floor(Math.random() * gridButtonItself.length);
        } else {
            gridButtonItself[computerMove].textContent = '0';
            computersMoves = computersMoves + gridButtonItself[computerMove].value;
            computersMovesAll = computersMovesAll + gridButtonItself[computerMove].value;
            // INCREMENTING BY ONE
            computerMoveCounter++;
            // CHANGING THE TURN
            isXsTurn = true;
            changeTheTurn();
            // 
            clearInterval(computerInterval);
        };
    }, 1);
};