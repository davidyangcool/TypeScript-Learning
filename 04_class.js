var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.getName = function () { return this.name; };
    return Animal;
}());
console.log(new Animal("Cat").getName());
