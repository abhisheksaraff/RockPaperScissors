game();

//Plays 5 rounds of the game
function game() {
    let playerWins = 0, computerWins = 0;
    
    //for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice: ROCK / PAPER / SCISSORS:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        if (result == 0) {
            //Draw
            console.log("It's a Draw!");
        } else if (result == -1 || result == 2) {
            //Computer Wins
            computerWins++;
            console.log("You Lose! " + computerSelection + " beats " + playerSelection.toUpperCase());
        } else {
            //Player Wins
            playerWins++
            console.log("You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection);
        }
    //}

    //Display the result for 5 rounds
    if (playerWins == computerWins)
        console.log("It was a Draw!");
    else if (playerWins > computerWins) {
        console.log("You Win!");
    } else {
        console.log("You Lost!");
    }
}

//This function randomly returns Rock/Paper/Scissors
function computerPlay() {
    let play = Math.floor(Math.random() * 3 + 1);

    switch (play) {
        case 1:
            return ("ROCK");
            break;
        case 2:
            return ("PAPER");
            break;
        case 3:
            return ("SCISSORS");
            break;
    }
}

//This function determines the result of the game and displays it to the console
function playRound(playerSelection, computerSelection) {
    return (selectionToInt(playerSelection) - selectionToInt(computerSelection));

}

//This function converts Player's input into a numerical value
function selectionToInt(selection) {
    if (selection.toUpperCase() == "ROCK") {
        return 1;
    } else if (selection.toUpperCase() == "PAPER") {
        return 2;
    } else if (selection.toUpperCase() == "SCISSORS") {
        return 3;
    }
}