class Animal{
    private name:string;
    get name():string{
        return this.name;
    }
    set name(name:string){
        this.name =name;
    }
    constructor(name:string){
        this.name=name;
    }
    sayHello():void{
        console.log('Hello animal'+this.name);
    }
}

class  Cat extends Animal{
    sayHello():void{
        console.log('Hello cat '+this.name); // 报错不能引用父类属性
    }
}

class Dog extends Animal{
    sayHello():void{
        console.log('Hello dog'+this.name);// 报错不能引用父类属性
    }
}