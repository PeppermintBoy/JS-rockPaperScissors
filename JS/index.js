
//Pick random hand for the computer//

function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
} 
console.log(computerPlay());

//play one round. compare the result. announce the result. user input automatically becomes case INsensetive//


function playRound() {
    let winCondition;
    const playerSelection = prompt('Rock, Paper or Scissors? Input your answer.').toLowerCase();
    const computerSelection = computerPlay() ;
    //user input = Rock//
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('you win. You:Rock Computer:Scissors');

            winCondition = 'player';
            return winCondition;

        }
        else if (computerSelection === 'paper') {
            console.log('you lost. You:Rock Computer:Paper');

            winCondition = 'computer';
            return winCondition;
        }
        else {
            console.log('it is a tie. You:Rock Comouter:Rock');

            winCondition = 'tie';
            return winCondition;
        }

    }
    //user input = Paper//
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win. You:Paper Computer:Rock');
            winCondition = 'player';


            return winCondition;
        }
        else if (computerSelection === 'scissors') {
            console.log('you lost. You:Paper Computer:Scissors');
            winCondition = 'computer';

            return winCondition;
        }
        else {
            console.log('it is a tie. You:Paper Computer:Paper');
            
            winCondition = 'tie';

            return winCondition;
        }
    }
    // user input = Scissors//
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('you win. You:Scissors Computer:Paper');
            winCondition = 'player';
            return winCondition;
        }
        else if (computerSelection === 'rock') {
            console.log('you lost. You:Scissors Computer:Rock');
            winCondition = 'computer';

            return winCondition;
        }
        else {
            console.log('it\'s a tie. You:Paper Computer:Rock');
            winCondition = 'tie';
            return winCondition;
        }
    }
}


//play 5 rounds(repeat playRound() and computerPlay()). keep the scores in console.log(). announce the winnder and loser at the end. //

function game() {
    let playerScore = 0, computerScore = 0;
    const userRoundInput = parseInt(prompt('how many rounds y\'all want?'));
    console.log(userRoundInput);
    

    for(i = 0; i < userRoundInput;  i++) {
        let result = playRound();
        if (result === 'player') {
            playerScore += 1;
            console.log('player score: ' + playerScore);

        }

        else if (result === 'computer') {
            computerScore += 1;
            console.log('computer score: ' + computerScore);
            

        }
        
    }
    
    if (playerScore > computerScore) {
        console.log('You won');

    }

    else if (computerScore > playerScore) {
        console.log('Computer won')
    }

    else {
        console.log('tied.')
    }
    

} 



