const customtext = document.getElementById("customheading");
const button = document.getElementById("entbtn");
const userInput = document.getElementById("userinput");
const result = document.getElementById("result");
const remainingAttempts = document.getElementById("remaining");

let min = Number(localStorage.getItem("min"));
let max = Number(localStorage.getItem("max"));
let guesses = Number(localStorage.getItem("guesses"));
let answer = Number(localStorage.getItem("answer"));

customtext.textContent = `Enter a number between ${min} and ${max}`;

button.onclick = function(){

    const userGuess = Number(userInput.value);

    if(isNaN(userGuess)){
        result.textContent = ` ❗ Please enter a valid number`;
        return;
    }
    if(userGuess < min || userGuess > max){
        result.textContent = ` ❗ ${userGuess} is out of range, please enter a valid number ${min}-${max}`;
        return;
    }

    guesses--;

    localStorage.setItem("guesses", guesses);
    remainingAttempts.textContent = `You have ${guesses} guesses left`;

    if(userGuess === answer){
        result.textContent = `correct! the answer was ${answer}, you win!`;
        endGame();
    }
    else if(guesses === 0){
        result.textContent = `❗You have run out of attempts.`;
        endGame();
    }
    else{
        result.textContent = userGuess > answer? `${userGuess} is higher than the number` : 
                                                 `${userGuess} is lower than the number`;
    }
};

function endGame(){
    userInput.disabled = true;
    button.disabled = true;
    remainingAttempts.textContent = `Game Over.`;
    localStorage.clear();

    setTimeout(()=>{
        window.location.href = "index.html"
    }, 5000);
}
