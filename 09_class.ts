class Animal{
    private name:string;
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