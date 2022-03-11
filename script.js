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
    text.textContent = `You selected ${playerSelection}, the computer selected ${computerSelection}.`;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "This round is a tie! Rock is equal to rock!";
        } else if (computerSelection == "paper") {
            computer += 1;
            return "You lose this round! Paper beats rock!";
        } else if (computerSelection == "sissors") {
            player += 1;
            return "You win this round! Rock beats sissors!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            player += 1;
            return "You win this round! Paper beats rock";
        } else if (computerSelection == "paper") {
            return "This round is a tie! Paper is equal to paper!";
        } else if (computerSelection == "sissors") {
            computer += 1;
            return "You lose this round! Sissors beats paper!";
        }
    } else if (playerSelection == "sissors") {
        if (computerSelection == "rock") {
            computer += 1;
            return "You lose this round! Rock beats sissors!";
        } else if (computerSelection == "paper") {
            player += 1;
            return "You win this round! Sissors beats paper!";
        } if (computerSelection == "sissors") {
            return "This round is a tie! Sissors is equal to sissors!";
        }
    }
}
// Repeats playRound five times and prints tallied score at the end. (Console)
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
// Checks score for winner
function scoreChecker() {
    if (player == 5) {
        player = 0;
        computer = 0;
        text.textContent = "You win the game!";
        score.textContent = `(Player:${player}|Computer:${computer})`;
    } else if (computer == 5) {
        player = 0;
        computer = 0;
        text.textContent = "You lose the game!";
        score.textContent = `(Player:${player}|Computer:${computer})`;
    }
}

// Score keeping global variables
player = 0;
computer = 0;

const text = document.getElementById('text-box');
const score = document.getElementById('score');

// Uses click as playerSelection result
const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('rock', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
    scoreChecker();
})

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('paper', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
    scoreChecker();
})

const sissors = document.querySelector("#sissors");
sissors.addEventListener('click', () => {
    computerSelection = computerPlay();
    text.textContent = playRound('sissors', computerSelection);
    score.textContent = `(Player:${player}|Computer:${computer})`;
    scoreChecker();
})