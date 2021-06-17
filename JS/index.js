
//Pick random hand for the computer//

function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
} 
console.log(computerPlay());

//play one round. compare the result. announce the result. user input automatically becomes case INsensetive//

function playRound(playerSection, computerSection) {
    const playerSelection = prompt('Rock, Paper or Scissors? Input your answer.').toLowerCase();
    const computerSelection = computerPlay() ;
    //user input = Rock//
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
        
            return alert('you win. You:Rock Computer:Scissors');

        }
        else if (computerSelection === 'paper') {
            return alert('you lost. You:Rock Computer:Paper');
        }
        else {
            return alert('it is a tie. You:Rock Comouter:Rock');
        }

    }
    //user input = Paper//
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return alert('You win. You:Paper Computer:Rock');
        }
        else if (computerSelection === 'scissors') {
            return alert('you lost. You:Paper Computer:Scissors');
        }
        else {
            return alert('it is a tie. You:Paper Computer:Paper');
        }
    }
    // user input = Scissors//
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return alert('you win. You:Scissors Computer:Paper');
        }
        else if (computerSelection === 'rock') {
            return alert('you lost. You:Scissors Computer:Rock');
        }
        else {
            return alert('it\'s a tie. You:Paper Computer:Rock');
        }
    }
}
console.log(playRound());

//play 5 rounds(repeat playRound() and computerPlay()). keep the scores. announce the winnder and loser at the end. //

function game() {
    for(i = 0; i <5;  i++) {
        computerPlay();
        playRound();
        }


    } 


