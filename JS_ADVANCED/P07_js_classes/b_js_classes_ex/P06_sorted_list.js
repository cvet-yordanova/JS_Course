class result{

    constructor(){
        this.arr = [];
        this.size = 0;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;

    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
    }

    log() {
        console.log(this.arr);
    }

}

//expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
//expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
//expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = new result();
console.log(myList.hasOwnProperty('size'));

myList.add(5);
console.log(myList.get(0));
//expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
console.log(myList.get(0));
//expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
console.log(myList.get(0));
//expect(myList.get(0)).to.equal(5, "Element wasn't removed");
expect(myList.size).to.equal(1, "Element wasn't removed");
















