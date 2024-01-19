const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";
const BESTOUTOFFIVE = 5;

let playerScore = 0;
let machineScore =0;

function getComputerChoice(){
    let options = [ROCK, PAPER, SCISSORS];
    let ran =Math.random();
    //console.log(ran);
    let choice = Math.floor( ran* options.length);
    return options[choice];
}

function playOneRound(playerSelection, computerSelection)
{

    const bigResult = document.querySelector('#container');
    console.log(playerSelection);
    console.log(computerSelection);
    
    //let result ="";
    let result = document.createElement('p');
    
    if(playerSelection === null)
    {
        playerSelection = ROCK;
        console.log("you did not pick so we picked for you");
    }

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        
        result.textContent ="Its a tie. Play this round again";
        console.log("Its a tie. Play this round again");
       // result = playOneRound(prompt("Rock, paper or scissors?"), getComputerChoice());
    }
    else if (playerSelection.toLowerCase() === ROCK)
    {
        
        if(computerSelection.toLowerCase() === SCISSORS)
        {
            result.textContent ="You win! rock beats scissors";
            playerScore++;

        }
        else 
        {
            result.textContent ="you lose, Paper beats rock";
            machineScore++;
        }
       
    }
    else if (playerSelection.toLowerCase() === SCISSORS)
    {
        if(computerSelection.toLowerCase() === PAPER)
        {
            result.textContent = "You win! scissors beats paper";
            playerScore++;

        }
        else
        {
            result.textContent="you lose, rock beats scissors";
            machineScore++;
        }
    }
    else if (playerSelection.toLowerCase() === PAPER)
    {
        if(computerSelection.toLowerCase() === ROCK)
        {
            result.textContent ="You win!  paper beats rock";
            playerScore++;

        }
        else
        {
            result.textContent="you lose, scissors beats paper";
            machineScore++;
        }
    }
   // result.textContent = "I did not make it into anypoint of an if";
   
    console.log(result);
   bigResult.appendChild(result);
   let winner = document.createElement('p');
   if(playerScore == BESTOUTOFFIVE ||machineScore== BESTOUTOFFIVE)
   {
       if(playerScore > machineScore)
       {
       
           winner.textContent="Congratulations! you beat the system";

       }
       else
       {
           winner.textContent = "Better luck next time champ";
       }
       bigResult.appendChild(winner);

       playerScore =0;
       machineScore =0; 

   }
   
}

function  game(){


    // const bigResult = document.querySelector('#container');
    // let lastChild =bigResult.lastElementChild();
    // while(lastChild){
    //     document.removeChild(lastChild);
    //     lastChild = bigResult.lastElementChild();
    // }
   // while(playerScore!=BESTOUTOFFIVE|| machineScore != BESTOUTOFFIVE)
    //{
        let rock = document.querySelector('.rock');
        rock.addEventListener("click", () =>playOneRound(rock.textContent, getComputerChoice()))
        
        let paper = document.querySelector('.paper');
        paper.addEventListener("click", () =>playOneRound(paper.textContent, getComputerChoice()))
        //console.log(buton.textContent);
        let scissors = document.querySelector('.scissors');
    
        scissors.addEventListener("click", () =>playOneRound(scissors.textContent, getComputerChoice()))
   // }
   
        console.log("Igot us here");

}
game();
console.log("This is the end");

// function game()
// {
//     //to multiline comment is ctrl + / key

   
//     let playerScore = 0;
//     let result = "";
//     for(let i = 0; i< 5; i++){
//         const playerSelection = prompt("What is your pick? rock, paper, or scissors?");
//         const computerSelection = getComputerChoice();
//         console.log(computerSelection);
//         result = playOneRound(playerSelection, computerSelection);
//         console.log(result);
//        if(result.includes("win!")){
//          playerScore++;
//        }
//     }

//     if(playerScore > (5 -playerScore))
//     {
//         console.log(playerScore);
//         console.log("COngratulations! You won!");
//     }
//     else{
//         console.log("Better luck next time sport.");
//     }
// }
// game();
