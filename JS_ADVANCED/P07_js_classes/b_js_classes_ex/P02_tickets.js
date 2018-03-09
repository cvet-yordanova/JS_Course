function getTickets(tickets, sortMethod) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArr = [];

    for (let ticketInfo of tickets) {
        let tokens = ticketInfo.split(/\|/g);
        ticketsArr.push(new Ticket(tokens[0], Number(tokens[1]), tokens[2]));
    }

    ticketsArr.sort((a, b) => {
        return b[sortMethod] < a[sortMethod]
    });

    return ticketsArr;

}

console.log(getTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));