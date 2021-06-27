const btnContainer = document.querySelector('.btnContainer');
const h2 = document.querySelector('.result h2');
const selections = ['rock', 'paper', 'scissors'];

// Functionality

let Round = () => {
	let count = 1;
	// add computer selection random choice
	function computerPlay() {
		computerCount = 0;
		let computerSelection =
			selections[Math.floor(Math.random() * selections.length)];
		console.log(computerSelection);
	}
	// add player selection click event
	let playerSelection = function () {
		btnContainer.addEventListener('click', onClick);
	};

	let onClick = function (e) {
		let li = e.target.getAttribute('data-name');
		console.log(li);
		computerPlay();
		h2.textContent = 'Round: ' + count++;
	};

	document.addEventListener('DOMContentLoaded', playerSelection);
};
Round();
