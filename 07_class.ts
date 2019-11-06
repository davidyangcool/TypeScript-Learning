class Animal{
    name:string;
    public public_name:string;
    protected protect_name:string;
    private private_name:string;
  
    constructor(name:string,name2:string,name3:string,name4:string){
        this.name=name;
        this.public_name=name2;
        this.protect_name=name3;
        this.private_name=name4;
        console.log(`print the names of animal ${this.name}\n${this.public_name} \n${this.protect_name}\n${this.private_name}`)
    }
    show_protect_name(){
        console.log('protect_name',this.protect_name)
    }
    show_private_name(){

        console.log('private_name',this.private_name)
    }
}

// instance of Animal
// let horse = new Animal('Hosre','Pub_Horse','Pro_Hose','Pri_Horse');

// console.log(horse.name);
// console.log(horse.public_name);
// console.log(horse.protect_name);
// console.log(horse.private_name);


class Horse extends Animal{
    constructor(name:string,name2:string,name3:string,name4:string){
        super(name,name2,name3,name4)
    }

}

let pony = new  Horse('Pony','PubPony','ProPony','PriPony');

console.log(pony.name)
console.log(pony.public_name)
pony.show_protect_name()
pony.show_private_name()