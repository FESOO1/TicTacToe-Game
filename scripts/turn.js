const turnText = document.querySelector('.game-itself-top-turn');
let isXsTurn = false;

// CHANGING THE TURN BASED ON WHOSE TURN IT IS

function changeTheTurn() {
    if (isXsTurn === true) {
        turnText.textContent = 'X TURN';
    } else {
        turnText.textContent = 'O TURN';
    };
};