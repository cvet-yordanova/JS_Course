function createCard(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = ['S', 'H', 'D', 'C'];

    if (!(validFaces.includes(face) && validCardSuits.includes(suit))) {
        throw new Error ('Error')
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

console.log('' + createCard('A', 'S'));
console.log('' + createCard('10', 'H'));
console.log('' + createCard('1', 'C'));
console.log('' + createCard('1', 'S'));
console.log('' + createCard('2', 'A'));
