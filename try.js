let max_ = 11;
let min_ = 2;

const newCard = () => {
    let firstNumber = Math.floor(Math.random()*(max_ - min_ + 1) + min_);
    let secondNumber = Math.floor(Math.random()*(max_ - min_ + 1) + min_);
    console.log(firstNumber,secondNumber)
}

newCard()