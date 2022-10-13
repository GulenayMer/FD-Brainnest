
/* ---  select the elements to manipulate --- */
let options = document.querySelectorAll(".options");
let score = document.getElementById("score");
let result = document.getElementById("result");
let restart = document.getElementById("restart");


/* ------ play ------------ */
function play(e)
{
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);
    result.innerHTML = winner;
    getScore(winner);
};

/* -----  computer choices randomly -----  */
function getComputerChoice() 
{ 
   	let selectionArray = ["rock", "paper", "scissors"]; 
    let randomChoice = selectionArray[Math.floor(Math.random() * selectionArray.length)];
	return randomChoice;
};

/*----  who is the winner? --- */
function getWinner(player, computer)
{
	if (player === computer)
	{
    	return "It is a Draw";
	} 
	else if ((player === "rock" && computer === "paper") 
		|| (player === "paper" && computer === "scissors")
  		|| (player === "scissors" && computer === "rock"))
		{
     		return "Computer wins"
  		} 
		else if ((player === "paper" && computer === "rock") 
			||(player === "scissors" && computer === "paper")
			|| (player === "rock" && computer === "scissors"))
		{
      		return "Player wins"
		}
   		else 
		{
      		return "Nobody wins"
 		}
};


/* ------------ show the winner -------- */
function getScore(winner)
{
    let playerScore = 0;
    let computerScore = 0;

 	if (winner === "Player wins")
	{
    	playerScore++;
 	}
 	else if (winner === "Computer wins")
	{
    	computerScore++;
 	}

	score.innerHTML = `
 		<h2 class="cDisplay">Computer: <span style= color:green>${computerScore}</span></h2>
 		<h2 class="pDisplay">Player: <span style= color:green>${playerScore}</span></h2>`
}


/* ---------------- restart the game --------- */
function restartGame()
{
    playerScore = 0;
    computerScore = 0;

    score.innerHTML = `
 		<h2 class="cDisplay">Computer: <span style= color:#333>${computerScore }</span></h2>
 		<h2 class="pDisplay">Player: <span style= color:#333>${playerScore }</span></h2>`
		result.innerHTML = `<p>Play again!</p>`
}

/* click the buttons , trigger the event  */
options.forEach(choice => {
    choice.addEventListener("click", play);
});

restart.addEventListener("click", restartGame);

