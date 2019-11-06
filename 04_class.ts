class Animal{
    private name:string;
    constructor(theName:string){
        this.name =theName;
    }
    getName(){return this.name}
}
// new Animal('Cat').name  error
console.log(new Animal("Cat").getName());

