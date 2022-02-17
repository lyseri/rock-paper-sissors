// computerPlay Function Returns rock paper or sissors, with a 1/3 chance for each.
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
// playRound Function Takes playerSelection and computerSelection and returns result as a string.
// caseFormater Function Formats playerSelctions case and checks for valid options.
// game Function Repeats playRound five times and prints tallied score at the end.
console.log(computerPlay())