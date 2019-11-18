// var val:string|number
// val=12
// console.log(val)
// val ="David"
// console.log(val)

// function disp(name:string|string[]){
// if(typeof name =="string"){
//     console.log(name)
// }else{
//     for(let n of name){
//         console.log(n)
//     }
// }
// }

// disp("hello,world")

// disp(['google','baidu','taobao','facebook'])


var arr:number[]|string[]
arr=[3,2,4]
for(let a of arr){
    console.log(a)
}

arr=['google','tabao']

for(let a of arr){
    console.log(a)
}


