var Square = /** @class */ (function () {
    // constructor(){
    //     this.width=100;
    //     this.height=100;
    // }
    function Square(width, height) {
        this.width = width;
        this.height = height;
    }
    Square.prototype.showSquare = function () {
        console.log("Square: width" + this.width + " height" + this.height);
    };
    return Square;
}());
var square = new Square(50, 60);
square.showSquare();
