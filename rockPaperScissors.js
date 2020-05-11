const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
} else {
  console.log('Sorry, try again!');
}
};
const getComputerChoice = () =>{
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie!';
  }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  	if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
         return 'You win!';
       } else {
         return 'Computer wins!';
       }
  	if (userChoice === 'scissors') {
    if(computerChoice === 'paper') {
       return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }
      }
    }
  };
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw a ' + userChoice);
	console.log('The computer threw a ' + 	computerChoice);

console.log(determineWinner(userChoice,computerChoice));
};

playGame ();
