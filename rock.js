const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Write rock, paper or scissors');
    }
  }
  
  const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random() * 3);
     switch(randomNumber) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissors';
     }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie!';
    }
    
    if (userChoice === 'bomb') {
      return 'User wins!'
    }
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins because paper beats rock';
      } else {
        return 'User wins because rock beats scissors';}
    }
      
    else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'User wins as paper beats rock';
        } else {
          return 'Computer wins as scissors beats paper';}
    }
    
    else {
      if (computerChoice === 'paper') {
        return 'User wins as scissors beats paper';}
      else {
        return 'Computer wins as rock beats scissors';}
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice ('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  