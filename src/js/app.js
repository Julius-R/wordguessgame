const numWrong = document.getElementById("wrong_num");
const numRight = document.getElementById("right_num");
const choiceOne = document.getElementById("option1");
const choiceTwo = document.getElementById("option2");
const buttons = document.querySelectorAll("#options button");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

const game = {
	turn: 1,
	words: [
		"chimney",
		"hen",
		"story",
		"steak",
		"pick",
		"ton",
		"clerk",
		"old age",
		"slow",
		"traffic",
		"lion",
		"grant",
		"source",
		"bullet",
		"lip",
		"revise",
		"master",
		"retired"
	],
	numRight: 0,
	numWrong: 0,
	resetScore: function() {
		(this.numRight = 0),
			(this.numWrong = 0),
			console.log(
				`The num wrong is: ${game.numWrong}, and the num right is: ${
					game.numRight
				}`
			);
	}
};

const chosenWord = function() {
	if (this.innerText === randomAnswer.innerText) {
		game.numRight++;
		numRight.innerText = game.numRight;
		game.turn++;
		checkTurn();
	} else {
		game.numWrong++;
		numWrong.innerText = game.numWrong;
		game.turn++;
		checkTurn();
	}
};

const chooseRandomWords = () => {
	choiceOne.innerText = game.words[Math.floor(Math.random() * (18 - 0) + 0)];
	choiceTwo.innerText = game.words[Math.floor(Math.random() * (18 - 0) + 0)];
	if (choiceOne === choiceTwo) {
		chooseRandomWords();
	} else {
		randomAnswer = buttons[Math.floor(Math.random() * (2 - 0) + 0)];
		buttons.forEach(btn => {
			btn.addEventListener("click", chosenWord);
		});
	}
};

const checkTurn = function() {
	if (game.turn > 10) {
		choiceOne.disabled = true;
		choiceTwo.disabled = true;
		if (game.numRight > game.numWrong) {
			result.innerText = `You won!`;
		} else if (game.numRight > game.numWrong) {
			result.innerText = `It's a draw!`;
		} else {
			result.innerText = `Maybe next time. :(`;
		}
	} else {
		chooseRandomWords();
	}
};

const newGame = () => {
	game.resetScore();
	game.turn = 1;
	choiceOne.disabled = false;
	choiceTwo.disabled = false;
	result.innerText = " ";
	numWrong.innerText = game.numWrong;
	numRight.innerText = game.numRight;
	chooseRandomWords();
};

resetButton.addEventListener("click", newGame);

newGame();
