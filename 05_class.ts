class Animal{
    private name:string;
    constructor(theName:string){ this.name = theName;}
}

class Rhino extends Animal{
    constructor(){
    super('Rhino');
    }
}

class Employee{
    private name:string;
    constructor(theName:string){ this.name= theName;}
    getName(){return this.name;}
}

let animal = new   Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob')

animal=rhino;
//animal=employee;
//animal.getName()
console.log(typeof animal);
console.log(animal instanceof Animal);
console.log(animal instanceof Rhino);

