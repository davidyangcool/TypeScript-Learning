// var sites:string[]
// sites=["google",'tabao','baidu']
var numbers = [1, 4, 9];
// var roots =numbers.map(Math.sqrt)
// console.log(roots)
var total = numbers.reduce(function (a, b) {
    return a + b;
});
console.log(total);
