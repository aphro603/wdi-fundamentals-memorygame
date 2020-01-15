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
	cardImage: "images/queen-of-diamonds.png"
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

function createBoard() {
	for (i = 0; i < cards.length; i++) {
      cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
	} 
}

function checkForMatch() {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
       result = alert("You found a match!");
  } 
    else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
       result = alert("Sorry, no match! Try again.");
  }
};

function flipCard() {
cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
console.log("You flipped a " + cards[cardId].rank + " of " + cards[cardId].suit + ".");
console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
}

createBoard();


