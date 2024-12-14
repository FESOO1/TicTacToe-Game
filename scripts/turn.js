const turnText = document.querySelector('.game-itself-top-turn');
const gameItselfGrid = document.querySelector('.game-itself-grid');
let isXsTurn = false;

// CHANGING THE TURN BASED ON WHOSE TURN IT IS

function changeTheTurn() {
    if (isXsTurn === true) {
        turnText.textContent = 'X TURN';
        gameItselfGrid.classList.remove('game-itself-grid-inactive');

        // 
        for (const gridButtonItselfs of gridButtonItself) {
            gridButtonItselfs.disabled = false;
        };
    } else {
        gameItselfGrid.classList.add('game-itself-grid-inactive');
        turnText.textContent = 'O TURN';

        // LET COMPUTER PLAY
        setTimeout(() => {
            computersTurn();
        }, Math.floor(Math.random() * 3000));
    };
};