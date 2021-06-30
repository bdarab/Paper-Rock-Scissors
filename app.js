const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const drawCountDisplay = document.querySelector('#drawCount');
const roundWinnerDisplay = document.querySelector('#roundWinner');
const roundCountDisplay = document.querySelector('#roundCount');
const btnItem = document.querySelector('#btnItem');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;
const computerSelections = ['rock', 'paper', 'scissors'];

// start the game
function Game() {
	let newRound = () => {
		btnItem.addEventListener('click', Round);
	};
	newRound();
	function Round() {
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

			// console.log(playerSelection);

			let computerSelection = computerPlay();
			// console.log('computer selection :', computerSelection);
			function playRound(playerSelection, computerSelection) {
				if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
					drawCount += 1;
					drawCountDisplay.innerHTML = `Draw Count is: ${drawCount}`;
				} else if (
					computerSelection.toLowerCase() === 'rock' &&
					playerSelection.toLowerCase() === 'paper'
				) {
					playerScore += 1;
					playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				} else if (
					computerSelection.toLowerCase() === 'paper' &&
					playerSelection.toLowerCase() === 'rock'
				) {
					computerScore += 1;
					computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
				} else if (
					computerSelection.toLowerCase() === 'rock' &&
					playerSelection.toLowerCase() === 'scissors'
				) {
					computerScore += 1;
					computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
				} else if (
					computerSelection.toLowerCase() === 'scissors' &&
					playerSelection.toLowerCase() === 'rock'
				) {
					playerScore += 1;
					playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				} else if (
					computerSelection.toLowerCase() === 'paper' &&
					playerSelection.toLowerCase() === 'scissors'
				) {
					playerScore += 1;
					playerScoreDisplay.innerHTML = `Player Score: ${playerScore}`;
				} else if (
					computerSelection.toLowerCase() === 'scissors' &&
					playerSelection.toLowerCase() === 'paper'
				) {
					computerScore += 1;
					computerScoreDisplay.innerHTML = `Computer Score: ${computerScore}`;
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
	Round();
}

Game();
