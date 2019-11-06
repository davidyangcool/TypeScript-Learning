var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, name2, name3, name4) {
        this.name = name;
        this.public_name = name2;
        this.protect_name = name3;
        this.private_name = name4;
        console.log("print the names of animal " + this.name + "\n" + this.public_name + " \n" + this.protect_name + "\n" + this.private_name);
    }
    Animal.prototype.show_protect_name = function () {
        console.log('protect_name', this.protect_name);
    };
    Animal.prototype.show_private_name = function () {
        console.log('private_name', this.private_name);
    };
    return Animal;
}());
// instance of Animal
// let horse = new Animal('Hosre','Pub_Horse','Pro_Hose','Pri_Horse');
// console.log(horse.name);
// console.log(horse.public_name);
// console.log(horse.protect_name);
// console.log(horse.private_name);
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name, name2, name3, name4) {
        return _super.call(this, name, name2, name3, name4) || this;
    }
    return Horse;
}(Animal));
var pony = new Horse('Pony', 'PubPony', 'ProPony', 'PriPony');
console.log(pony.name);
console.log(pony.public_name);
pony.show_protect_name();
pony.show_private_name();
