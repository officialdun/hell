

let cards = []
let sum = 0
                        let balanceDisp = true
                        let disp = document.getElementById("playerId")
                        let btn = document.getElementById("balanceButton")
                        
let hasBlackJack = false
let isAlive = false
let outcomeMessage = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let playerName = "Dun"
let chips = "200"

function playerDetails(){
    let playerId = document.getElementById("playerId")
    playerId.textContent = playerName+": $"+chips
   
}

function getRandomCard(){
    let ranNumber = Math.floor(Math.random()*13)+1
    if(ranNumber===1){
        return ranNumber = 11
    }
    else if(ranNumber>10){
        return ranNumber = 10
    }
    else{
        return ranNumber
    }
    
    
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame() 
}
function renderGame(){
    cardEl.textContent = "Cards:"
    for(let i=0;i<cards.length;i++){
                cardEl.textContent +=cards[i] +" "
                console.log(cards[i])
             }
    
        if (sum<=20){
            outcomeMessage = "Do you wanna draw a new card? "
            hasBlackJack=false
            isAlive=true
        }
        else if(sum===21){
            outcomeMessage = "You won Blackjack "
            hasBlackJack = true
        }
        else{
            outcomeMessage = "You're out of the  game "
            isAlive = false
        }
        messageEl.textContent = outcomeMessage
        sumEl.textContent = "Sum: "+sum


        console.log(hasBlackJack)
        console.log(isAlive)
      
        
}
function newCard(){   
    if(!hasBlackJack&&isAlive){
        let thirdCard = getRandomCard() 
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}  

function balanceDisplay(){
    showHideBalance()
}
function showHideBalance(){
    if(balanceDisp==true){
            disp.style.display = "none"
            btn.textContent= "Show Balance"
            balanceDisp =false
            console.log(balanceDisp)
}
   else{
            disp.style.display = "block"
            balanceDisp = true       
            console.log(balanceDisp)
            btn.textContent= "Hide Balance"
}}
   

playerDetails()
console.log(cards)
console.log(sum)
