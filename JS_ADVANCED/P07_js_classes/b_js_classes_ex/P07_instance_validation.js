class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(id) {
        if (!/^[0-9]{6,6}$/g.test(id)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._id = id;
    }

    set email(email) {
        if (!/^[a-zA-Z0-9_]+@[a-zA-Z.]+$/g.test(email)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    set firstName(firstName) {
        if (!/^[a-zA-Z]{3,20}$/g.test(firstName)) {
            if (/^[a-zA-Z]+$/g.test(firstName)) {
                throw new TypeError("First name must be between 3 and 20 characters long")
            } else {
                throw new TypeError("First name must contain only Latin characters")
            }
        }

        this._firstName = firstName;
    }

    set lastName(lastName) {
        if (!/^[a-zA-Z]{3,20}$/g.test(lastName)) {
            if (/^[a-zA-Z]+$/.test(lastName)) {
                throw new TypeError("Last name must be between 3 and 20 characters long")
            } else {
                throw new TypeError("Last name must contain only Latin characters")
            }
        }

        this._lastName = lastName;
    }


}


//let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')