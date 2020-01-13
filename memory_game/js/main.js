//Card logic
const cards = ["queen","queen","king","king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("You Flipped a " + cardOne);

let cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("You Flipped a " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else alert("Sorry, not a match!");
}
