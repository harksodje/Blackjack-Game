let firstNumber = 10
let secondNumber = 4;
let sum = firstNumber + secondNumber;
let cards = [firstNumber, secondNumber]
let hasBlackJack = false;
let isAlive = true;
let message ="";
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")
let max_ = 11;
let min_ = 2;
let newCard_


let messageEl = document.getElementById("message-el");

const startGame = () => {
    
    renderGame()
}

const renderGame = ()=>{
    //cards.reverse()
    cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
    sumEl.textContent = "Sum:" + " " + sum;
    if (sum < 21){
        message = "Do you want to draw a new card"
    } else if (sum === 21){
        message = "Wohooo! You have got a BlackJack !";
        hasBlackJack = true;
    } else { 
       message = "You are out of the game";
       isAlive  = false;
    }
    messageEl.textContent = message;
}

const newCard = () => {
    //newCard_ = 6;
    cards.push(newCard_)
    //newCard_= Math.floor(Math.random()*(max_ - min_ + 1) + min_);
    //secondNumber = Math.floor(Math.random()*(max_ - min_ + 1) + min_);
    sum += newCard_;
    renderGame()
}
