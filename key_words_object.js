var sites = {
    site1: 'baidu.com',
    site2: 'google.com'
};
// console.log(sites.site1)
// console.log(sites.site2)
// sites.sayHello =function (){
//     console.log('Hello,'+sites.site1)
// }
// sites.sayHello()
var invokesites = function (obj) {
    console.log("site1:" + obj.site1);
    console.log('site2:' + obj.site2);
};
invokesites(sites);
