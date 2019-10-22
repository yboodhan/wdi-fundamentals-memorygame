var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},

	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},

	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},

	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}

];

var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  	console.log("You found a match!");
	} else {
	  	console.log("Sorry, try again.");
	}
}


function flipCard(cardId) {
	console.log("The flipped card is " + cards[cardId].rank + " of " + cards[cardId].suit +".");
	console.log("The flipped card's image is " + cards[cardId].cardImage + ".");
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipCard(0);
