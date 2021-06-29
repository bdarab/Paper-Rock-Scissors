const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const drawCountDisplay = document.querySelector('#drawCount');
const roundWinnerDisplay = document.querySelector('#roundWinner');
const roundCountDisplay = document.querySelector('#roundCount');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
const computerSelections = ['rock', 'paper', 'scissors'];

// start the game

function Game() {
	// Create Random Computer's Choice
	for (i = 1; i < 6; i++) {
		function computerPlay() {
			let computerSelection =
				computerSelections[
					Math.floor(Math.random() * computerSelections.length)
				];
			return computerSelection;
		}

		let playerSelection = prompt('select one: rock, paper or scissors');

		console.log(playerSelection);

		let computerSelection = computerPlay();
		console.log('computer selection :', computerSelection);
		function playRound(playerSelection, computerSelection) {
			if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
				drawCount += 1;
				drawCountDisplay.innerHTML = `Draw Count is: ${drawCount}`;
				console.log(drawCount);
			} else if (
				computerSelection.toLowerCase() === 'rock' &&
				playerSelection.toLowerCase() === 'paper'
			) {
				playerScore += 1;
				playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				console.log('Paper wraps around the Rock, Player wins.');
			} else if (
				computerSelection.toLowerCase() === 'paper' &&
				playerSelection.toLowerCase() === 'rock'
			) {
				computerScore += 1;
				computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
				console.log('Paper wraps around the Rock, Computer wins.');
			} else if (
				computerSelection.toLowerCase() === 'rock' &&
				playerSelection.toLowerCase() === 'scissors'
			) {
				computerScore += 1;
				computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
				console.log('Rock breaks the scissors, computer wins.');
			} else if (
				computerSelection.toLowerCase() === 'scissors' &&
				playerSelection.toLowerCase() === 'rock'
			) {
				playerScore += 1;
				playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				console.log('Rock breaks the scissors, player wins.');
			} else if (
				computerSelection.toLowerCase() === 'paper' &&
				playerSelection.toLowerCase() === 'scissors'
			) {
				playerScore += 1;
				playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				console.log('scissors cuts the paper, player wins.');
			} else if (
				computerSelection.toLowerCase() === 'scissors' &&
				playerSelection.toLowerCase() === 'paper'
			) {
				computerScore += 1;
				computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
				console.log('scissors cuts the paper, computer wins.');
			} else {
				console.log('Please make a selection to play.');
			}
		}

		playRound(playerSelection, computerSelection);
	}

	if (playerScore > computerScore) {
		roundWinnerDisplay.innerHTML = `The winner is: Player`;
	} else if (playerScore < computerScore) {
		roundWinnerDisplay.innerHTML = `The winner is: Computer`;
	} else {
		roundWinnerDisplay.innerHTML = `It's a draw`;
	}
	roundCount += 1;
	roundCountDisplay.innerHTML = `Round: ${roundCount}`;
}
Game();
