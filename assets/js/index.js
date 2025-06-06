// words that will be used in the game when playable.
const words = [
	"sloth",
	"pancake",
	"dragon",
	"zombie",
	"robot",
	"glitter",
	"ninja",
	"donut",
	"wizard",
	"volcano",
];

// important vairables durig the game.

let currentWord = "";
let scrambledLetters = [];
let revealedLetters = [];
let timer;
let timeLeft = 60;
let score = 0;
let hintsUsed = 0;

// find html by their IDs so we can use them in the game to show, change, or get information from them.

const startBtn = document.getElementById("start-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const instructionsDiv = document.getElementById("instructions");
const gameContainer = document.getElementById("game-container");
const startContainer = document.getElementById("start-container");
const scrambled = document.getElementById("scrambled");
const word = document.getElementById("word");
const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const hintBtn = document.getElementById("hint-btn");
const restartBtn = document.getElementById("restart-btn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

// This is to shuffle the each word.

function shuffleWord(word) {
	let array = word.split("");
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i);
		let temp = array[i];
		array[i];
		array[j];
		array[j] = temp;
	}
	return array;
}

function displayScrambled() {
	scrambled.textContent = scrambledLetters.join(" ");
}

// shows where the correct letter is and blank for the others. 

function displayWord() {
	word.innerHTML = "";
	for (
		let i = 0;
		i < currentWord.length;
		i++ 
	)
		if (revealedLetters[i]) {
			word.innerHTML += currentWord[i] + " ";
		} else word.innerHTML += "_ ";
}
// Starts the game

function startGame(){
  startContainer.style.display = "none"
  gameContainer.style.display = "block"
  message.textContent = ""
  input.value = ""
  score = 0
  timeLeft = 60
  hintsUsed = 0

  scoreDisplay.textContent = "Score: " + score
  timerDisplay.textContent = "Time: " + timeLeft;

  currentWord = words[Math.floor(Math.random()*words.length)]
  scrambledLetters = shuffleWord(currentWord)
  revealedLetters = []

  for(let i = 0; i < currentWord.length; i++){
    revealedLetters.push(false)
  }

  displayScrambled()
  displayWord()

  input.disabled = false
  submitBtn.disabled = false;
  hintBtn.disabled = false

  clearInterval(timer)

  timer = setInterval(function(){
    timeLeft = timeLeft - 1
    timerDisplay.textContent = "Time: " + timeLeft
    if(timeLeft == 0){
      endGame("Time's up!")
    }
  },1000)
}
