class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rectangle = new Rectangle(2, 4, 'blue');
console.log(rectangle);
console.log(rectangle.calcArea());