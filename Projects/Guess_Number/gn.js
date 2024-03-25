let randomNumber=parseInt(Math.random()*100+1)
// console.log(randomNumber);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.low');
const startover=document.querySelector('.result');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
     e.preventDefault();
     const guess=parseInt(userInput.value)
     console.log(guess);
      validateGuess(guess);
    })
}
const validateGuess=(guess)=>{
     if (isNaN(guess)) {
        alert('Please Enter a Valid number');
     }
     else if (guess < 1) {
        alert('Please Enter a number greater than 1');
     }
     else if (guess > 100) {
        alert('Please Enter a number less than 100');
     }
     else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displaymssg(`Game Over.Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }          
     }
}
const checkGuess=(guess)=>{
       if (guess === randomNumber) {
         displaymssg(`You Guessed it right`);
         endGame();
       }
       else if (guess < randomNumber) {
        displaymssg(`You Guessed it wrong too low`);
       }
       else if (guess > randomNumber) {
        displaymssg(`You Guessed it wrong too high`);
       }

}
const displayGuess=(guess)=>{
   userInput.value = ''
   guessslot.innerHTML += `${guess},`;
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`;
}
const displaymssg=(mssg)=>{
    loworhi.innerHTML = `<h2>${mssg}</h2>`;
}
const newGame=()=>{
    const buttonNewGame=document.querySelector('#newGame');
    buttonNewGame.addEventListener('click',()=>{
       randomNumber=parseInt(Math.random()*100+1);
       prevGuess=[];
       numGuess=1;
       guessslot.innerHTML='';
       remaining.innerHTML = `${11 - numGuess}`;
       userInput.removeAttribute('disabled');
       startover.removeChild(p);
        playGame=true;
    })
}    
const endGame=()=>{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startover.appendChild(p);
    playGame=false;
    newGame();
}    


