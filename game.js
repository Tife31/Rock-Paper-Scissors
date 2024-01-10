const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
function getComputerChoice(){
    let options = [ROCK, PAPER, SCISSORS];
    let ran =Math.random();
    console.log(ran);
    let choice = Math.floor( ran* options.length);
    return options[choice];
}

function playOneRound(playerSelection, computerSelection)
{
    let result ="";
    if(playerSelection === null)
    {
        playerSelection = ROCK;
        console.log("you did not pick so we picked for you");
    }

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        console.log("Its a tie. Play this round again");
        result = playOneRound(prompt("Rock, paper or scissors?"), getComputerChoice());
    }
    else if (playerSelection.toLowerCase() === ROCK)
    {
        if(computerSelection.toLowerCase() === SCISSORS)
        {
            result ="You win! rock beats scissors";

        }
        else 
        {
            result ="you lose, Paper beats rock";
        }
    }
    else if (playerSelection.toLowerCase() === SCISSORS)
    {
        if(computerSelection.toLowerCase() === PAPER)
        {
            result = "You win! scissors beats paper";
            

        }
        else
        {
            result="you lose, rock beats scissors";
        }
    }
    else if (playerSelection.toLowerCase() === PAPER)
    {
        if(computerSelection.toLowerCase() === ROCK)
        {
            result ="You win!  paper beats rock";

        }
        else
        {
            result="you lose, scissors beats paper";
        }
    }

    return result;
}

function game()
{
    let playerScore = 0;
    let result = "";
    for(let i = 0; i< 5; i++){
        const playerSelection = prompt("What is your pick? rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        result = playOneRound(playerSelection, computerSelection);
        console.log(result);
       if(result.includes("win!")){
         playerScore++;
       }
    }

    if(playerScore > (5 -playerScore))
    {
        console.log(playerScore);
        console.log("COngratulations! You won!");
    }
    else{
        console.log("Better luck next time sport.");
    }
}
game();
