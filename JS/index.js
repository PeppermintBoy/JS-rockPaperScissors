
//input your Name
    function inputName() {
    alert('*phone is ringing.*');
    let firstAnswer = prompt('Answer the call? YES/NO');
    if (firstAnswer.toUpperCase() === 'YES') {
        const userName = prompt('Stranger: "Hello... What is your name..."');
        document.getElementById('player-font').innerHTML =userName;
        return alert(`Stranger: "Lovely name ${userName}... Let's play a game of rock paper and scissors... By the way... I have locked you out in the phone booth..."`);
        }
        else {
            return alert('*phone keeps ringing');
        }
    }
//Pick random hand for the computer//
    function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
    } 
console.log(computerPlay());

function selectedPlayerHand(e) {
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.compiter-score');
    playRound(e);
    console.log(e);
}
//play one round. compare the result. announce the result. user input automatically becomes case INsensetive//
function playRound(e) {
    let winCondition;
    const computerSelection = computerPlay() ;
    //user input = Rock//
    if (e === 'rock') {
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
    else if (e === 'paper') {
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
    else if (e === 'scissors') {
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
//Disabled for now to work on DOM.
/*function game() {
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
}   */

//inputName();


