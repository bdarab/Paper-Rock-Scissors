// Creating DOM Elements

const appContainer = document.querySelector('#app');
const title = document.createElement('h1');
const subTitle = document.createElement('h2');
const btnContainer = document.createElement('div');
let btnChoices = document.querySelectorAll('button');
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
btnContainer.classList.add('Btn');

let possibleChoices = [Rock, Paper, Scissors];

Rock.innerHTML = `
	<i class="fas fa-hand-rock" value="rock"><p>Rock</p></i>`;

Paper.innerHTML = `
<i class="fas fa-hand-paper" value="paper"><p>Paper</p></i>`;

Scissors.innerHTML = `
<i class="fas fa-hand-scissors" value="scissors"><p>Scissors</p></i>`;

// Create functionality

let choices = possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener('click', (e) => {
		userChoice = e.target.getAttribute('value');
		let possibleChoice = [
			{
				name: 'rock',
			},
			{
				name: 'Paper',
			},
			{
				name: 'Scissors',
			},
		];
		randomChoice = Math.floor(Math.random() * possibleChoice.length);
		computerChoice = possibleChoice[randomChoice]['name'];
		console.log(userChoice, computerChoice);
	})
);
