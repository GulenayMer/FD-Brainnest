
/* ---  select the elements to manipulate --- */
let options = document.querySelectorAll(".options");
let score = document.getElementById("score");
let result = document.getElementById("result");
let restart = document.getElementById("restart");
let over = document.getElementById("over");

/* -----  computer choices randomly -----  */
function getComputerChoice() 
{ 
   	let choices = ["rock", "paper", "scissors"]; 
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
	return randomChoice;
};


/*----  who is the winner? --- */
function playRound(playerChoice, computerChoice)
{

	if (playerChoice === computerChoice)
	{
    	return "It is a Draw";
	}
	else if ((playerChoice === "rock" && computerChoice === "paper") 
		|| (playerChoice === "paper" && computerChoice === "scissors")
  		|| (playerChoice === "scissors" && computerChoice === "rock"))
	{
     	return "Computer wins this round"
  	} 
	else if ((playerChoice === "paper" && computerChoice === "rock") 
			||(playerChoice === "scissors" && computerChoice === "paper")
			|| (playerChoice === "rock" && computerChoice === "scissors"))
	{
      	return "Player wins this round"
	}

};

let playerScore = 0;
let computerScore = 0;
/* ------------ show the winner -------- */
function getScore(winner, playerScore, computerScore)
{
 	if (winner === "Player wins this round")
	{
    	playerScore++;
 	}
 	else if (winner === "Computer wins this round")
	{
    	computerScore++;
 	}

	score.innerHTML = `
 		<h2 class="cDisplay">Computer: <span style= color:green>${computerScore}</span></h2>
 		<h2 class="pDisplay">Player: <span style= color:green>${playerScore}</span></h2>`
}

function gameOver(playerScore, computerScore)
{
    if(playerScore === 2)
       over.innerHTML += `\n\n GAME OVER... You lost...`;
    else if(computerScore === 2)
        over.innerHTML += `\n\n GAME OVER... You won!!`

}
/* ------ play ------------ */
function play(e)
{
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = playRound(playerChoice, computerChoice);
    result.innerHTML = winner;
    getScore(winner, playerScore, computerScore);
	gameOver(playerScore, computerScore);
};


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

