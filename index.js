const Open = document.getElementById("startBtn");
const Close = document.getElementById("nobtn");
const yesBtn = document.getElementById("yesbtn")
const modal_container = document.getElementById("modal-container");
const minInput = document.getElementById("minnum");
const maxInput = document.getElementById("maxnum");
const chances = document.getElementById("chances");
const message = document.getElementById("msg");
const clearButton = document.getElementById("clear");


Open.addEventListener('click', () =>{

    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    let guesses = Number(chances.value);

    const answer = Math.floor(Math.random() * (max - min + 1)) + min;

    //validating
    if(isNaN(min) || isNaN(max) || isNaN(guesses) || min >= max){
        message.textContent = `Please Enter a valid number`;
        yesBtn.disabled = true;
    }
    else if(min === 0 || max === 0 || guesses === 0){
        message.textContent = "Input values can't be empty or zero"
        yesBtn.disabled = true;
    }
    else{

        localStorage.setItem("min", min);
        localStorage.setItem("max", max);
        localStorage.setItem("guesses", guesses);
        localStorage.setItem("answer", answer);

        message.textContent = `You have chosen your minimum number as "${min}" and maximum number as "${max}" 
        and number of chances for guessing as "${guesses}", click on '✓' to move forward.`;
        
    }
    modal_container.classList.add('show');
    
    yesBtn.addEventListener('click', () =>{
        yesBtn = window.location = "customnum.html";
    });
});

clearButton.addEventListener('click', () => {
    minInput.value = '';
    maxInput.value = '';
    chances.value = '';
});
Close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    localStorage.clear();
});


