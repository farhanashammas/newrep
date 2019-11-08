// console.log("Before");
// var promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({id:1,name:"farhana"})
//     },1000);
// });
// promise1.then(function(user){
//     console.log(user);
//     return "Success"
// }).
// then(function(msg1){
//     console.log(msg1)
//     return "to second then"
// }).
// then(function(msg2){
//     console.log(msg2)
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//                 resolve ({id:2,name:"diya"})
//         },2000)
//     })
// }

// ).then(function(user){
//     console.log(user)
// }).

// catch(function(err){
//     console.log(err);
// })
// console.log("after");











// function myf(i,n){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({id:i,name:n})
//         },1000)
//     })
// }
// myf(1,"farhana").then(function(user){
//     console.log(user)
// })









// function myf(msg){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(msg)
//         },1000)
//     })
// }
// myf({id:1,name:"farhana"}).then(function(user){
//     console.log(user)
// })






// async function myf(i,n){
//     var promise1=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({id:i,name:n})
//         },1000)
//     })
//     return await promise1;
// }
// myf(1,"farhana").then(function(user){
//     console.log(user)
// })






 