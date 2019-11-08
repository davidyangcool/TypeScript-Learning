interface Graphic{
    width:Number;
    height:Number;
}

class Square implements Graphic{
    width:Number;
    height:Number;
    // constructor(){
    //     this.width=100;
    //     this.height=100;
    // }
    constructor(width:Number,height:Number){
        this.width=width;
        this.height=height;
    }
    showSquare(){
        console.log(`Square: width${this.width} height${this.height}`)
    }

}


let square = new Square(50,60)
square.showSquare()
