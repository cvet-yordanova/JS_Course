let result = (function myModule() {

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];


    class Card {

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!validFaces.includes(value)) {
                throw new Error('Invalid face passed!');
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(a => Suits[a]).includes(value)) {
                throw new Error("Invalid suit");
            }
            this._suit = value;
        }
    }

    return {
        Card,
        Suits
    }
}());

// let Card = result.Card;
// let Suits = result.Suits;
//
// let card = new Card('Q', Suits.CLUBS);
//
// console.log(card);
//
// card.face = 'A';
// card.suit = Suits.DIAMONDS;
//
// console.log(card);
//
// let card2 = new Card("1", Suits.DIAMONDS);



let Suits = result.Suits;
let Card = result.Card;

let card = new Card("2",Suits.DIAMONDS);
console.log(card.face);
console.log(card.face);

// card.face = "J";
// expect(card.face).to.equal("J");

console.log(card);

// expect(card.suit).to.equal(Suits.DIAMONDS);
// card.suit = Suits.HEARTS;
// expect(card.suit).to.equal(Suits.HEARTS);
