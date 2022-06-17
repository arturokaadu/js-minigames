const computerChoiceDisplay = document.getElementById('computer-choice');

const userChoiceDisplay = document.getElementById('your-choice');

const resultDisplay = document.getElementById('result');


const possibleChoices = document.querySelectorAll('button');


let userChoice
let computerChoice 
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice =  e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)  + 1// or possibleChoices.LENGTH
    
    if (randomNumber === 1){
        computerChoice = 'Rock'
    }else if (randomNumber === 2){
        computerChoice = 'Paper'
    } else if (randomNumber === 3){
        computerChoice = 'Scissors'
    } 
    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult(){
    if (computerChoice === userChoice){
     result = 'its a draw Motherf****'
    } else if (computerChoice === 'Rock' && userChoice === "Paper"){
        result = 'you win, champ'
    } else if (computerChoice === 'Rock' && userChoice === "Scissors"){
        result = 'you lose, champ'
     } else if (computerChoice === 'Paper' && userChoice === "Scissors") { 
        result = 'you win , champ'
    } else if (computerChoice === 'Paper' && userChoice === "Rock") { 
        result = 'you lose , champ'
    } else if (computerChoice === 'Scissors' && userChoice === "Rock") { 
        result = 'you win , champ'
     } else if (computerChoice === 'Scissors' && userChoice === "Paper") { 
        result = 'you lose , champ'  }
 
  resultDisplay.innerHTML = result
}
