const form = document.querySelector(".form");
const submit = document.querySelector('#subt');
const lowOrHi = document.querySelector(".lowOrHi")
const resultParas = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult");
const correctNum = parseInt(Math.random() * (100 + 1))
const userInput = document.getElementById("guessField")
let playgame = true;
let prevGuess = [];
let guessCount = 1;
let button = document.createElement('button')
if (playgame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(correctNum)
        console.log(guess)
        validateGuess(guess)

    })
}

const displayMessage = (msg) => {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

const validateGuess = (num) => {
    if (isNaN(num)) {
        displayMessage("Not a valid number")
        userInput.value = '';
    }
    else if (num < 1) {
        displayMessage("Number couldn't be less than 1")
        userInput.value = '';
    }
    else if (num > 100) {
        displayMessage("Number couldn't be greater than 100")
        userInput.value = '';
    }
    else {
        prevGuess.push(num)
        if (guessCount === 11) {
            cleanup(num)
            displayMessage(`Game Over!! Correct Number was ${correctNum}`)
            endgame()
        }
        else
        {
            cleanup(num)
            checkGuess(num)
        }
    }
}

const checkGuess = (num) => {
    if (num < correctNum) {
        displayMessage("Number is too low")
    }
    else if (num > correctNum) {
        displayMessage("Number is too High")
    }
    else {
        displayMessage("You Guessed the correct Number!")
        endgame()
    }
}

const cleanup = (num) => {
 userInput.value = '';
 guesses.innerHTML += `${num} , `
 remaining.innerHTML =  `${11-guessCount}`
 guessCount++
}

const endgame = ()=>
{
    userInput.value = ''
    userInput.setAttribute('disabled','')
    button.innerHTML = `<button id="newGame" style="padding:5px;background-color:black;color:red;" >start new game</button>`
    resultParas.appendChild(button)
    playgame = false
}

const newgame = ()=>
{
    const newgamebutton = document.querySelector("#newGame");
    newgamebutton.addEventListener("click" ,(e)=>
    {
        correctNum =  parseInt(Math.random() * (100 + 1))
        prevGuess = []
        guessCount = 1;
        guesses.innerHTML = ''
        remaining.innerHTML = `${11-guessCount}`
        userInput.removeAttribute("disabled")
        resultParas.removeChild(button)
        playgame = true

    })
}