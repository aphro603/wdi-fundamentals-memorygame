//Card logic
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamons.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	alert("You found a match!");
	} 
	else console.log("Sorry, not a match!");
	     alert("Sorry, not a match!");
  }
}

function flipCard(cardId) {
console.log("You flipped a " + cards[cardId].rank + " of " + cards[cardId].suit + ".");
console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}

flipCard(0);
flipCard(3);


