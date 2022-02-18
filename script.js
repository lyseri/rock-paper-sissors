// Returns rock paper or sissors, with a 1/3 chance for each.
function computerPlay() {
    chance = Math.random()
    if (chance <= .33) {
        return "rock"
    } else if (chance > .33 && chance < .66) {
        return "paper"
    } else if (chance >= .66) {
        return "sissors"
    }
}
// Formats playerSelctions case and checks for valid options.
function playerPlay() {
    selection = prompt()
    selection = selection.toLowerCase()
    if (selection == "rock") {
        return "rock"
    } else if (selection == "paper") {
        return "paper"
    } else if (selection == "sissors") {
        return "sissors"
    } else {
        console.log("Invalid selection")
        return playerPlay()
    }
}
// Takes playerSelection and computerSelection and returns result as a string.
function playRound(playerSelction, computerSelection) {
    console.log(`You selected ${playerSelction}, the computer selected ${computerSelection}.`)
    if (playerSelction == "rock"){
        if (computerSelection == "rock"){
            console.log("You tie! Rock is equal to rock!")
        } else if (computerSelection == "paper"){
            console.log("You lose! Paper beats rock!")
        } else if (computerSelection == "sissors") {
            console.log("You win! Rock beats sissors!")
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats rock")
        } else if (computerSelection == "paper"){
            console.log("You tie! Paper is equal to paper!")
        } else if (computerSelection == "sissors") {
            console.log("You lose! Sissors beats paper!")
        }
    } else if (playerSelction == "sissors") {
        if (computerSelection == "rock") {
            console.log("You lose! Rock beats sissors!")
        } else if (computerSelection == "paper") {
            console.log("You win! Sissors beats paper!")
        } if (computerSelection == "sissors"){
            console.log("You tie! Paper is equal to paper!")
        }
    }
}
// game Function Repeats playRound five times and prints tallied score at the end.
playerSelection = playerPlay();
computerSelection = computerPlay();
playRound(playerSelection, computerSelection)