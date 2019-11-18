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
var arr;
arr = [3, 2, 4];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    console.log(a);
}
arr = ['google', 'tabao'];
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var a = arr_2[_a];
    console.log(a);
}
