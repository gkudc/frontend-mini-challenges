let randomNumber = Math.round(Math.random() * 100);

const feedback = document.querySelector('.feedback');
const guesses = document.querySelector('.all-guesses');
const form = document.querySelector('form');
const userGuess = document.querySelector('.userGuess');
const submitGuess = document.getElementById('submitGuess');
const newGame = document.getElementById('newGame');

let allGuesses = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const guessValue = parseInt(userGuess.value);

    if (isNaN(guessValue) || guessValue < 0 || guessValue > 100) {
        feedback.innerText = 'Please enter a valid number between 0 and 100.';
        return;
    } else if (guessValue < randomNumber) {
        feedback.innerText = 'Too low! Try again.';
    } else if (guessValue > randomNumber) {
        feedback.innerText = 'Too high! Try again.';
    } else {
        feedback.innerText = 'Congratulations! You guessed the number!';
        submitGuess.disabled = true;
        newGame.disabled = false;
    }
    allGuesses.push(guessValue);
    guesses.innerText = `Your guesses so far: ${allGuesses.join(', ')}`;
});

newGame.addEventListener('click', () => {
    randomNumber = Math.round(Math.random() * 100);
    feedback.innerText = '';
    guesses.innerText = '';
    userGuess.value = '';
    submitGuess.disabled = false;
    newGame.disabled = true;
    allGuesses = [];
});
