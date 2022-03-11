// Returns rock paper or sissors, with a 1/3 chance for each.
function computerPlay() {
    chance = Math.random();
    if (chance <= .33) {
        return "rock";
    } else if (chance > .33 && chance < .66) {
        return "paper";
    } else if (chance >= .66) {
        return "sissors";
    }
}
// Formats playerSelctions case and checks for valid options.
function playerPlay() {
    selection = prompt("Rock, paper or sissors?");
    selection = selection.toLowerCase();
    if (selection == "rock") {
        return "rock";
    } else if (selection == "paper") {
        return "paper";
    } else if (selection == "sissors") {
        return "sissors";
    } else {
        console.log("Invalid selection")
        return playerPlay();
    }
}
// Takes playerSelection and computerSelection and returns result as a string while tallying score.
function playRound(playerSelection, computerSelection) {
    console.log(`You selected ${playerSelection}, the computer selected ${computerSelection}.`)
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "You tie! Rock is equal to rock!";
        } else if (computerSelection == "paper") {
            computer += 1;
            return "You lose! Paper beats rock!";
        } else if (computerSelection == "sissors") {
            player += 1;
            return "You win! Rock beats sissors!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            player += 1;
            return "You win! Paper beats rock";
        } else if (computerSelection == "paper") {
            return "You tie! Paper is equal to paper!";
        } else if (computerSelection == "sissors") {
            computer += 1;
            return "You lose! Sissors beats paper!";
        }
    } else if (playerSelection == "sissors") {
        if (computerSelection == "rock") {
            computer += 1;
            return "You lose! Rock beats sissors!";
        } else if (computerSelection == "paper") {
            player += 1;
            return "You win! Sissors beats paper!";
        } if (computerSelection == "sissors") {
            return "You tie! Sissors is equal to sissors!";
        }
    }
}
// Repeats playRound five times and prints tallied score at the end.
function game() {
    console.log("Rock, paper, sissors, best of five!");
    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        console.log(`(Player:${player}|Computer:${computer})`)
    }
    if (player > computer) {
        console.log("The Player wins!")
    } else {
        console.log("The Computer wins!")
    }
}

// Score keeping global variables
player = 0;
computer = 0;
// Game start
// game();

const text = document.getElementById('text-box');
const score = document.getElementById('score');

// Uses click as playerSelection result
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('rock', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
})

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('paper', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
})

const sissors = document.querySelector("#sissors");
sissors.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('sissors', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
})