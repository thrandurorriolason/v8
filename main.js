
function hide()
{  
	 var div = document.getElementById("game");  
	 if (div.style.display !== "flex") 
	 {  
		 div.style.display = "flex";  
	 }  
	 else
	 {  
		 div.style.display = "none";  
	 }  
	 var byrja = document.querySelector(".byrja");
	 byrja.style.display = "none";
}  

const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['skæri','blað','steinn']
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${10-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice)

				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Jafntefli'
		}
		else if(player == 'skæri'){
			if(computer == 'blað'){
				result.textContent = 'Tölva vann...';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Þú vannst!'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'steinn'){
			if(computer == 'skæri'){
				result.textContent = 'Tölva vann...';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Þú vannst!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'blað'){
			if(computer == 'steinn'){
				result.textContent = 'Tölva vann...';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Þú vannst!';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Leik lokið!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Þú vannst leikinn!'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'Þú tapaðir leiknum...';
			result.style.color = 'red';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Jafntefli';
			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	playGame();
	
}

game();
