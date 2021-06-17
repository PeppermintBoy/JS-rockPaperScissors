function computerPlay () {
    const hands = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = hands[Math.floor(Math.random() * hands.length)];
    return randomIndex;
} 
console.log(computerPlay())