// Creating DOM Elements

const appContainer = document.querySelector('#app');
const title = document.createElement('h1');
const subTitle = document.createElement('h2');
const btnContainer = document.createElement('div');
// let possibleChoices = document.querySelectorAll('button');
let Rock = document.createElement('button');
let Paper = document.createElement('button');
let Scissors = document.createElement('button');

title.textContent = 'Rock, Paper & Scissors';
appContainer.appendChild(title);
subTitle.textContent = "let's play a game against your computer";
appContainer.appendChild(subTitle);
appContainer.appendChild(btnContainer);
btnContainer.appendChild(Rock);
btnContainer.appendChild(Paper);
btnContainer.appendChild(Scissors);
btnContainer.classList.add('Btns');

Rock.innerHTML = `
	<i class="fas fa-hand-rock" data-value="rock"><p>Rock</p></i>`;

Paper.innerHTML = `
<i class="fas fa-hand-paper" data-value="paper"><p>Paper</p></i>`;

Scissors.innerHTML = `
<i class="fas fa-hand-scissors" data-value="scissors"><p>Scissors</p></i>`;

// Create functionality
let possibleChoices = [Rock, Paper, Scissors];

let userChoice = possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener('click', (e) => {
		userChoice = e.target.getAttribute('data-value');
		console.log(userChoice);
	})
);
