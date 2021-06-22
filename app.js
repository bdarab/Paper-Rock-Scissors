// Creating DOM Elements

const appContainer = document.querySelector('#app');
const title = document.createElement('h1');
const subTitle = document.createElement('h2');
const btnContainer = document.createElement('div');
const Rock = document.createElement('button');
const Paper = document.createElement('button');
const Scissors = document.createElement('button');

title.textContent = 'Rock Paper & Scissors';
appContainer.appendChild(title);

subTitle.textContent = "let's play a game against your computer";
appContainer.appendChild(subTitle);
appContainer.appendChild(btnContainer);
btnContainer.appendChild(Rock);
btnContainer.appendChild(Paper);
btnContainer.appendChild(Scissors);

btnContainer.classList.add('Btns');
Rock.innerHTML = `
<i class="fas fa-hand-rock"></i>
<p>Rock</p>`;

Paper.innerHTML = `
<i class="fas fa-hand-paper"></i>
<p>Paper</p>
`;

Scissors.innerHTML = `
<i class="fas fa-hand-scissors"></i>
<p>Scissors</p>
`;
