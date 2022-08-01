//node list of buttons
const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
let numOfGames = 0, result ="";

//iterate through each item of buttons
buttons.forEach((button) => {

    //add event listener to each item of buttons
    button.addEventListener('click', () => {
        console.log(button.id);
        //console.log(selectionToInt(computerPlay));
        numOfGames++;
        
        //***WORKS HERE***
        let test = Math.floor(Math.random() * 3 + 1);
        console.log(test);
        
        let result = playRound(button.id, computerPlay);
        console.log(result);
    });
});

//This function randomly returns Rock/Paper/Scissors
function computerPlay() {

    /*** DOESN'T WORK HERE ***/
    let play = Math.floor(Math.random() * 3 + 1);

    switch (play) {
        case 1:
            return ("rock");
            break;
        case 2:
            return ("paper");
            break;
        case 3:
            return ("scissors");
            break;
    }
}

//This function determines the result of the game and displays it to the console
function playRound(playerSelection, computerSelection) {
    return (selectionToInt(playerSelection) - selectionToInt(computerSelection));

}

//This function converts Player's input into a numerical value
function selectionToInt(selection) {
    if (selection == "rock") {
        return 1;
    } else if (selection == "paper") {
        return 2;
    } else if (selection == "scissors") {
        return 3;
    }
}

/*
//Plays 5 rounds of the game
function game() {
    let playerWins = 0, computerWins = 0;
    
    for (let i = 0; i < 5; i++) {
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
    }

    //Display the result for 5 rounds
    if (playerWins == computerWins)
        console.log("It was a Draw!");
    else if (playerWins > computerWins) {
        console.log("You Win!");
    } else {
        console.log("You Lost!");
    }
}
*/