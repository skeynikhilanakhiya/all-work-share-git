
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	const options = ['paper', 'rock', 'scissors'];

	const playGame = () => {
		const rock = document.querySelector('.rock');
		const paper = document.querySelector('.paper');
		const scissor = document.querySelector('.scissor');
		const playerOptions = [rock, paper, scissor];
		const computerOptions = options;


		rock.addEventListener("click", function () {
			player1.innerHTML = "rock";
			computer1.innerHTML = computerOptions[Math.floor(Math.random() * computerOptions.length)];
		});
		paper.addEventListener("click", function () {
			computer1.innerHTML = computerOptions[Math.floor(Math.random() * computerOptions.length)];
			player1.innerHTML = "paper";
		});
		scissor.addEventListener("click", function () {
			computer1.innerHTML = computerOptions[Math.floor(Math.random() * computerOptions.length)];
			player1.innerHTML = "scissor";
		});


		playerOptions.forEach(option => {
			option.addEventListener('click', function () {
				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10 - moves}`;

				//   const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
				const computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]



				winner(this.innerText, computerChoice);

				if (moves === 10) {
					gameOver(playerOptions, movesLeft);
				}
			});
		});
	};

	const winner = (player, computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');


		player = player.toLowerCase();
		computer = computer.toLowerCase();

		if (player === computer) {
			result.textContent = 'Tie';
			result.style.color = 'white';
		} else if ((player === 'rock' && computer === 'scissors') ||
			(player === 'scissors' && computer === 'paper') ||
			(player === 'paper' && computer === 'rock')) {
			result.textContent = 'Player Win';
			result.style.color = 'white';
			playerScore++;
			playerScoreBoard.textContent = playerScore;
		} else {
			result.textContent = 'Computer Win';
			result.style.color = 'white';
			computerScore++;
			computerScoreBoard.textContent = computerScore;
		}

	};
 
	const gameOver = (playerOptions, movesLeft) => {
		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		});
		//other code here
	};


	playGame();
};
game();

