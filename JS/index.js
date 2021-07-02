let playerWin = 0;
let computerWin = 0;

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

//Pick random hand for the computer
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
} 
console.log(computerPlay());

//player clicked on a hand.
function selectedPlayerHand(e) {
    const result = playRound(e);
    if (result === playerWin) {
        return document.querySelector('.player-score').innerHTML = playerWin;
    }
    else if (result === computerWin) {
        return document.querySelector('.computer-score').innerHTML = computerWin;
    }
    else return;
}

//play one round. compare the result. announce the result. user input automatically becomes case INsensetive
function playRound(e) {
    const computerSelection = computerPlay() ;
    //user input = Rock
    if (e === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('you win. You:Rock Computer:Scissors');
            return playerWin += 1;
        }
        else if (computerSelection === 'paper') {
            console.log('you lost. You:Rock Computer:Paper');
            return computerWin += 1;
        }
        else {
            return console.log('it is a tie. You:Rock Comouter:Rock');
            
        }
    }
    //user input = Paper
    else if (e === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win. You:Paper Computer:Rock');
            return playerWin += 1;
        }
        else if (computerSelection === 'scissors') {
            console.log('you lost. You:Paper Computer:Scissors');
            winCondition = 'computer';
            return computerWin += 1;
        }
        else {
            return console.log('it is a tie. You:Paper Computer:Paper');         
            
        }
    }
    // user input = Scissors
    else if (e === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('you win. You:Scissors Computer:Paper');
            return playerWin += 1;
        }
        else if (computerSelection === 'rock') {
            console.log('you lost. You:Scissors Computer:Rock');
            return computerWin += 1;
        }
        else {
            return console.log('it\'s a tie. You:Paper Computer:Rock');
        }
    }
}


//play 5 rounds(repeat playRound() and computerPlay()). keep the scores in console.log(). announce the winnder and loser at the end. //
/*function game(e) {
    let playerScore = 0, computerScore = 0;
    //const userRoundInput = parseInt(prompt('how many rounds y\'all want?'));
    //console.log(userRoundInput);
    for(i = 0; i < 5;  i++) {
        let result = playRound(e);
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
} */

//inputName();


