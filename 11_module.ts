module Project{
    export module Core{
        function funA(){} 
        export function funB(){
            funA()
        }
    }
}
module Project.Core{
    export function funC(){
    // funA()
    funB()
    }
}

// Project.Core.funA()
Project.Core.funB()
Project.Core.funC()