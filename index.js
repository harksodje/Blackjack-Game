let cards = []
let hasBlackJack = false;
let isAlive = false;
let message ="";
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")
let max_ = 11;
let min_ = 2;
let newCard_

let player = {
    name : "Per",
    chips : 145,
    sayHello: function (){
        console.log("Hi! Adisa.")
    }
}


let playerName = "Per";
let playerChips = 145;
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name+' : $' + player.chips;

let messageEl = document.getElementById("message-el");


const getRandomCard = () =>{
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    if (randomNumber === 1){
        return11;
    } else if (randomNumber > 10){
        return 10;
    } else {
        return randomNumber;
    }
    
}

const startGame = () => {
    isAlive = true;
    let firstNumber = getRandomCard();
    let secondNumber = getRandomCard();
    cards = [firstNumber,secondNumber]
    sum = firstNumber + secondNumber
    renderGame()
}

const renderGame = ()=>{
    //cards.reverse()
    cardsEl.textContent = "Cards: " ;
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " ";
    }
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
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        newCard_ = card;
        cards.push(card )
        
        sum += newCard_;
        renderGame()
        }
    }
    
