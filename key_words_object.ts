var sites ={
    site1:'baidu.com',
    site2:'google.com',
    // sayHello:function(){} //
}

// console.log(sites.site1)
// console.log(sites.site2)
// sites.sayHello =function (){
//     console.log('Hello,'+sites.site1)
// }
// sites.sayHello()

var invokesites =function(obj:{site1:string,site2:string}){
    console.log("site1:"+obj.site1)
    console.log('site2:'+obj.site2)

}
invokesites(sites)