function printDeckOfCards(arr){
    function createCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validCardSuits = ['S', 'H', 'D', 'C'];

        if (!(validFaces.includes(face) && validCardSuits.includes(suit))) {
            console.log(`Invalid card: ${"" + face + suit}`);
            return;
        }

        let suits = {
            S: '\u2660',  //– Spades (♠)
            H: '\u2665', //– Hearts (♥)
            D: '\u2666', // – Diamonds (♦)
            C: '\u2663'  // – Clubs (♣)
        };

        let card = {
            face: face,
            suit: suits[suit],
            toString: () => {
                return face + suits[suit]
            }
        };

        return card;

    }

    let deckOfCards = [];

    for (let i = 0; i < arr.length; i++) {
        let face = arr[i].substring(0, arr[i].length - 1);
        let suit = arr[i][arr[i].length - 1];

        try {
            deckOfCards.push(createCard(face, suit));
        } catch (arr) {
            console.log("Invalid card: "+ arr[i]);
            return;
        }
    }

    console.log(deckOfCards.join(" "));

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);