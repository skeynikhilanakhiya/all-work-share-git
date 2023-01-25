// // app.js

// // Complete logic of game inside this function
// const game = () => {
// 	let playerScore = 0;
// 	let computerScore = 0;
// 	let moves = 0;

// // const options = ['rock', 'paper', 'scissors'];
// 	// Function to
// 	const playGame = () => {
// 		const rock = document.querySelector('.rock');
// 		const paper = document.querySelector('.paper');
// 		const scissor = document.querySelector('.scissor');
// 		const playerOptions = [rock, paper, scissor];
// 		const computerOptions = ['rock', 'paper', 'scissors']

// 		// Function to start playing game
// 		playerOptions.forEach(option => {
// 			option.addEventListener('click', function () {

// 				const movesLeft = document.querySelector('.movesleft');
// 				moves++;
// 				movesLeft.innerText = `Moves Left: ${10 - moves}`;


// 				const choiceNumber = Math.floor(Math.random() * 3);
// 				const computerChoice = computerOptions[choiceNumber];

// 				// Function to check who wins
// 				winner(this.innerText, computerChoice)

// 				// Calling gameOver function after 10 moves
// 				if (moves == 10) {
// 					gameOver(playerOptions, movesLeft);
// 				}
// 			})
// 		})

// 	}



// 	// Function to decide winner
// 	const winner = (player, computer) => {
// 		const result = document.querySelector('.result');
// 		const playerScoreBoard = document.querySelector('.p-count');
// 		const computerScoreBoard = document.querySelector('.c-count');
// 		player = player.toLowerCase();
// 		computer = computer.toLowerCase();
// 		if (player === computer) {
// 			result.textContent = 'Tie'
//             result.style.color="white";
// 		}
// 		else if (player == 'rock') {
// 			if (computer == 'paper') {
// 				result.textContent= 'Computer Won';
// 				result.style.color ="white";
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;

// 			} else {
// 				result.textContent = 'Player Won'
// 				result.style.color ="white";
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if (player == 'scissors') {
// 			if (computer == 'rock') {
// 				result.textContent = 'Computer Won';
// 				result.style.color ="white";
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			} else {
// 				result.textContent = 'Player Won';
// 				result.style.color ="white";
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 		else if (player == 'paper') {
// 			if (computer == 'scissors') {
// 				result.textContent = 'Computer Won';
// 				result.style.color ="white";
// 				computerScore++;
// 				computerScoreBoard.textContent = computerScore;
// 			} else {
// 				result.textContent = 'Player Won';
// 				result.style.color ="white";
// 				playerScore++;
// 				playerScoreBoard.textContent = playerScore;
// 			}
// 		}
// 	}

// 	// Function to run when game is over.
// 	const gameOver = (playerOptions, movesLeft) => {

// 		const chooseMove = document.querySelector('.move');
// 		const result = document.querySelector('.result');
// 		const reloadBtn = document.querySelector('.reload');

// 		playerOptions.forEach(option => {
// 			option.style.display = 'none';
// 		})


// 		chooseMove.innerText = 'Game Over!!'
// 		movesLeft.style.display = 'none';

// 		if (playerScore > computerScore) {
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Won The Game'
// 			result.style.color = '#308D46';
// 		}
// 		else if (playerScore < computerScore) {
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'You Lost The Game';
// 			result.style.color = 'red';
// 		}
// 		else {
// 			result.style.fontSize = '2rem';
// 			result.innerText = 'Tie';
// 			result.style.color = 'grey'
// 		}
// 		reloadBtn.innerText = 'Restart';
// 		reloadBtn.style.display = 'flex'
// 		reloadBtn.addEventListener('click', () => {
// 			window.location.reload();
// 		})
// 	}


// 	// Calling playGame function inside game
// 	playGame();

// }

// // Calling the game function
// game();


// // const game = () => {
// //     // Variables to keep track of scores
// //     let playerScore = 0;
// //     let computerScore = 0;

//     // Array to store options for the game
//     // const options = ['rock', 'paper', 'scissors'];

//     // // Select elements from the DOM
//     // const rock = document.querySelector('.rock');
//     // const paper = document.querySelector('.paper');
//     // const scissors = document.querySelector('.scissors');
//     // const playerOptions = [rock, paper, scissors];
//     // const result = document.querySelector('.result');
//     // const playerScoreBoard = document.querySelector('.p-count');
//     // const computerScoreBoard = document.querySelector('.c-count');

//     // // Add event listeners to the buttons
//     // playerOptions.forEach(option => {
//     //     option.addEventListener('click', function () {
//     //         // Generate a random choice for the computer
//     //         const choiceNumber = Math.floor(Math.random() * 3);
//     //         const computerChoice = options[choiceNumber];

//     //         // Check for a tie
//     //         if (this.innerText.toLowerCase() === computerChoice) {
//     //             result.textContent = 'Tie';
//     //         }
//     //         // Check for a win
//     //         else if ((this.innerText.toLowerCase() === 'rock' && computerChoice === 'scissors') ||
//     //             (this.innerText.toLowerCase() === 'paper' && computerChoice === 'rock') ||
//     //             (this.innerText.toLowerCase() === 'scissors' && computerChoice === 'paper')) {
//     //             result.textContent


// let a = 2;
// let b = (100 * 50) * a;

// console.log(b);


//  template literal 


// let num = 2;
// let num2 = 4;
// let result = num1 + num2;

// console.log(`the addition ${num1} and ${num2} is ${result}`);



// let i =1;

// while(i<=5){
// 	console.log("hi");
// 	i++;
// }

// let alien = {
// 	name:'hello',
// 	tech:'js',

// 	laptop : {
// 		cpu : '',
// 		ram:'8gb',
// 		brand:'asus'
// 	}
// }
// console.log(alien.laptop.cpu);

// for(let i=1;i<=100;i++){
// 	if(i%3===0)
// 	console.log(i);
// }

// let abc = {
//     name: 'ajay',
//     tech: 'py',

//     laptop: {
//         cpu: 'i5',
//         ram: 8,
//         brand : 'asus'
//     }
// }
// console.log(abc.laptop.brand.length);