//global function. Functions can change the these variables.
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

//Change player choice box css when clicked
function clicked(e) {
    const hands = document.querySelectorAll('.choice');
    const clickedHand = document.querySelector(`#${e}`);
    if (e === 'scissors') clickedHand.classList.add('clicked-scissors');  
    else if(e === 'rock') clickedHand.classList.add('clicked-rock');
    else if(e === 'paper') clickedHand.classList.add('clicked-paper');
    return hands.forEach(e => e.addEventListener('transitionend', transitionEnd));
}
function transitionEnd(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('clicked-scissors', 'clicked-rock', 'clicked-paper');
}

//Pick random hand for the computer
function computerPlay() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
} 

//player clicked on a hand and reflect the result on score board.
function selectedPlayerHand(e) {
    const result = playRound(e);
    reachedFivePoints();
    if (result === playerWin) {
        return document.querySelector('.player-score').textContent = playerWin;
    }
    else if (result === computerWin) {
        return document.querySelector('.computer-score').textContent = computerWin;
    }
    else return;
}

//play one round. compare the result. announce the result. user input automatically becomes case INsensetive
function playRound(e) {
    const computerSelection = computerPlay() ;
    console.log(playerWin);
    console.log(computerWin);
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

function reachedFivePoints() {
    if (playerWin === 5) {
        alert('Stranger: "You win this time... come again."')
    }
    else if (computerWin === 5){
        alert('Stranger: "I win... there is no escape.')
    }
}

//inputName();

//Saving this code in legacy of help from Harrison (JUN2021)
//play 5 rounds(repeat playRound() and computerPlay()). keep the scores in console.log(). announce the winnder and loser at the end.
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




