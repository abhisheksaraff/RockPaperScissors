//This function randomly returns Rock/Paper/Scissors
function computerPlay() {
    let play = Math.floor(Math.random() * 3 + 1);
    //console.log(play);
    switch(play)    {
        case 1:
            return("Rock");
            break;
        case 2:
            return("Paper");
            break;
        case 3:
            return("Scissor");
            break;
    }
}

//This function displays the result of the game
function result(playerSelection, computerSelection) {

}