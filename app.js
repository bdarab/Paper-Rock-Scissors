const btnContainer = document.querySelector('.btnContainer');
const btn = document.querySelectorAll('.btnItem');
const h2 = document.querySelector('.result h2');
const selections = ['rock', 'paper', 'scissors'];

// Functionality

let Round = () => {
	// for (i = 0; i < 6; i++) {
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
		btn.forEach((btn) => btn.addEventListener('click', onClick));
	};

	let onClick = function (e) {
		let li = e.target.getAttribute('data-name');
		console.log(li);
		computerPlay();
		h2.textContent = 'Round: ' + count++;
	};

	document.addEventListener('DOMContentLoaded', playerSelection);
};
// };
Round();
