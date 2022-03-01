let sum = 0
let isAlive = false
let message = ""
let allCards = []
let messageEl = document.getElementById("message-el")
let cards = document.getElementById("cards")
let sumOfCards = document.getElementById("sum")
let newCardBtn = document.getElementById("newCard-btn")
let playerChips = document.getElementById("player-chips")
let player = {
    "name": "Per",
    "chips": 100
}
playerChips.textContent = player.name + ": P" + player.chips



function startGame() {
    isAlive = true 
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    allCards = [firstCard, secondCard]
    sum = firstCard + secondCard
    newCardBtn.hidden = false
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        updateChips()
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        updateChips()
    };
    
    messageEl.textContent = message
    cards.textContent = "Cards: " + allCards
    sumOfCards.textContent = "Sum: " + sum

    if (!isAlive || hasBlackJack) {
        newCardBtn.hidden = true
    }
}

function newCard() {
    let newCard = getRandomCard()
    sum += newCard
    allCards.push(newCard)
    cards.textContent = "Cards: " + allCards
    renderGame();
}

function getRandomCard() {
    let randomNum = Math.floor((Math.random() * 13) + 1);
    if (randomNum === 1) {
        return 11
    } else if (randomNum > 10){
        return 10
    } else {
        return randomNum
    }
}

function updateChips() {
    if (!isAlive){
        player.chips -= 10
    } else {
        player.chips += 10
    }
    playerChips.textContent = player.name + ": P" + player.chips
}