//node list of buttons
const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result");
let numOfGames = 0, result = "", playerWins = 0, computerWins = 0;

//iterate through each item of buttons
buttons.forEach((button) => {

    //add event listener to each item of buttons
    button.addEventListener('click', () => {
        if (numOfGames != 5) {
            numOfGames++;
            let thisRound = playRound(button.id, computerPlay());
            resultDiv.textContent = thisRound;

            if (numOfGames == 5) {
                endGame();
            }
        }
    });
});

//This function determines the result of the game and displays it to the console
function playRound(playerSelection, computerSelection) {
    let turn = (selectionToInt(playerSelection) - selectionToInt(computerSelection));

    if (turn == 0) {
        //Draw
        return "It's a Draw, you both chose " + playerSelection;
    } else if (turn == -1 || turn == 2) {
        //Computer Wins
        computerWins++;
        return "You Lose! " + computerSelection + " beats " + playerSelection.toUpperCase();
    } else {
        //Player Wins
        playerWins++
        return "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection;
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

//Calculates and Displays the Winner
function endGame()    {
    if (playerWins == computerWins)
        result = "It was a Draw!";
    else if (playerWins > computerWins) {
        result = "You Win " + playerWins + " to " + computerWins + "!";
    } else {
        result = "You Lost " + playerWins + " to " + computerWins + "!";
    }

    resultDiv.textContent = result;
}