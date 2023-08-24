const playerTurn = document.querySelector("#playerChoose");
const computerTurn = document.querySelector("#computerChoose");
const resultKey = document.querySelector("#resultChoose");
const buttons = document.querySelectorAll(".pickAChoice");

let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;

    thisComputerTurn()

    playerTurn.textContent = `Player : ${player}`;
    computerTurn.textContent = `Computer : ${computer}`;
    resultKey.textContent = checkForWinner();


}))


function thisComputerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}
function checkForWinner() {
    if (computer === player) {
        return "Draw!";
    }
    else if (computer === "Rock") {
        return (player === "Paper") ? "You Win!" : "You Lose!";
    }
    else if (computer === "Paper") {
        return (player === "Scissors") ? "You Win!" : "You Lose!";
    }
    else if (computer === "Scissors") {
        return (player === "Rock") ? "You Win!" : "You Lose!";
    }


}