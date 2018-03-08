class Point {

    constructor(x, y) {
        [this.x, this.y] = [x, y];
    }

    static distance(point1, point2) {
        let diffX = point2.x - point1.x;
        let diffY = point2.y - point1.y;
        return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
    }

}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
