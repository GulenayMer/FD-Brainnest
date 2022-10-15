
/* -----  computer choices randomly -----  */
function computerPlay() 
{ 
	const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
	console.log("Computer chose" + ` ${computerChoice}`);
	return computerChoice;
};

let playerScore = 0;
let computerScore = 0; 

function playRound(playerSelection, computerSelection) 
{
	if (playerSelection.toLowerCase() === "rock")
	{
		if (playerSelection == "paper")
		{
			computerScore++;
			return "You lose";
	 	} 
		else if (computerSelection == "rock") 
		{
			return "It is a tie";
	  	} 
		else 
		{
			playerScore++;
			return "You win";
	  	}
	}
	else if (playerSelection.toLowerCase() == "scissors") 
	{
	  	if (computerSelection == "paper") 
	  	{
			playerScore++;
			return "You win";
		} 
		else if (computerSelection == "rock") 
		{
			computerScore++;
			return "You lose";
		}
		else 
		{
			return "It is a tie";
	 	}
	}
  
	if (playerSelection.toLowerCase() == "paper") 
	{
		if (computerSelection == "paper") 
		{
			return "It is a tie";
	  	} 
	  	else if (computerSelection == "rock")
		{
			playerScore++;
			return "You win";
	  	} 
		else 
		{
			computerScore++;
			return "You lose";
	 	}
	}
  }
  
  function game()
  {
	for(let i = 0; i < 5; i++)
	{
		const playerSelection = prompt("Do you choose rock, paper or scissors?");
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
		console.log("your score = " + playerScore);
		console.log("Computer's score = " + computerScore);
	}
  }
 
game();
