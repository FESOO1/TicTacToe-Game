let computersMoves = '';
let computerMoveCounter = 0;
let computerMove;

function computersTurn() {
    computerMove = Math.floor(Math.random() * gridButtonItself.length);
    if (playersMoves.includes(computerMove)) {
        alert('You can not move it.');
        computerMove = Math.floor(Math.random() * gridButtonItself.length);
        gridButtonItself[computerMove].textContent = '0';
        computersMoves = computersMoves + gridButtonItself[computerMove].value;
        
        // INCREMENTING BY ONE
        computerMoveCounter++;
        // CHANGING THE TURN
        isXsTurn = true;
        changeTheTurn();
    } else {
        gridButtonItself[computerMove].textContent = '0';
        computersMoves = computersMoves + gridButtonItself[computerMove].value;
        
        // INCREMENTING BY ONE
        computerMoveCounter++;
        // CHANGING THE TURN
        isXsTurn = true;
        changeTheTurn();
    };
};