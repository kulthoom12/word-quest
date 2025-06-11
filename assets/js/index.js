/**  Words that will be used in the game when playable. */
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

// Find html by their IDs so we can use them in the game to show, change, or get information from them.
const startBtn = document.getElementById("start");
const instructionsBtn = document.getElementById("instructions-btn");
const instructionsDiv = document.getElementById("instructions");
const scrambled = document.getElementById("scrambled");
const word = document.getElementById("word");
const input = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const hintBtn = document.getElementById("hint");
const restartBtn = document.getElementById("restart");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameControls = document.getElementById("game-controls");
const gameContainer = document.getElementById("game");
const startContainer = document.getElementById("start-container");

/** This is to shuffle the each word. */

function shuffleWord(word) {
	let array = word.split("");
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i + 1);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
/** Display scrambled letters while game is on */
function displayScrambled() {
	scrambled.textContent = scrambledLetters.join(" ");
}

/** shows where the correct letter is and blank for the others. */
function displayWord() {
	word.innerHTML = "";
	for (let i = 0; i < currentWord.length; i++)
		if (revealedLetters[i]) {
			word.innerHTML += currentWord[i] + " ";
		} else word.innerHTML += "_ ";
}
/** Starts the game */

function startGame() {
	startContainer.style.display = "none";
	gameContainer.style.display = "block";
	gameControls.style.display = "block";

	message.textContent = "";
	input.value = "";
	score = 0;
	timeLeft = 60;
	hintsUsed = 0;

	scoreDisplay.textContent = "Score: " + score;
	timerDisplay.textContent = "Time: " + timeLeft;

	currentWord = words[Math.floor(Math.random() * words.length)];
	scrambledLetters = shuffleWord(currentWord);
	revealedLetters = [];

	for (let i = 0; i < currentWord.length; i++) {
		revealedLetters.push(false);
	}

	displayScrambled();
	displayWord();

	input.disabled = false;
	submitBtn.disabled = false;
	hintBtn.disabled = false;

	clearInterval(timer);

	timer = setInterval(function () {
		timeLeft = timeLeft --;
		timerDisplay.textContent = "Time: " + timeLeft;
		if (timeLeft === 0) {
			endGame("Time's up!");
		}
	}, 1000);
}

/**  Check guessed word and show hints if needed */
function checkGuess() {
	const guess = input.value.trim().toLowerCase();
  if (guess !== currentWord.toLowerCase()) {
  } else {
    score += 10;
		scoreDisplay.textContent = "Score:" + score;
    input.value = "";
		startGame();	
	}
}
/** Reveals a hint */
function revealHint() {
	if (hintsUsed >= 3) {
		message.textContent = "No more hints!";
		return;
	}

	let unrevealed = [];
	for (let i = 0; i < currentWord.length; i++) {
		if (!revealedLetters[i]) {
			unrevealed.push(i);
		}
	}

	let index = unrevealed[Math.floor(Math.random() * unrevealed.length)];
	revealedLetters[index] = true;
	hintsUsed = hintsUsed + 1;

	displayWord();
	message.textContent = "Hint used: " + hintsUsed;
}

/** starts the game, checks guesses, gives hints, shows instructions, ends or restarts the game */
function endGame(msg) {
	clearInterval(timer);
	message.textContent = msg;
	input.disabled = true;
	submitBtn.disabled = true;
	hintBtn.disabled = true;
}

instructionsBtn.addEventListener("click", function () {
	if (instructionsDiv.style.display === "none") {
		instructionsDiv.style.display = "block";
	} else {
		instructionsDiv.style.display = "none";
	}
});

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkGuess);
hintBtn.addEventListener("click", revealHint);
restartBtn.addEventListener("click", startGame);
