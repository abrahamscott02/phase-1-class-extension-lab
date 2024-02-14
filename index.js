// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3){
            return false;
        } else {
            const [a, b, c] = this.sides;
            if (a + b > c && a + c > b && c + b > a) {
                return true; // Triangle is valid
            } else {
                return false; // Triangle is not valid
            }
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4){
            return false;
        } else {
            const [a, b, c, d] = this.sides;
            if (a === b && a === c && a === d) {
                return true;
            } else {
                return false;
            }
        }
    }
    get area() {
        const [sideLength] = this.sides;
        return sideLength * sideLength;
    }
}