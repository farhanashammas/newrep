// var promise1=new Promise(function(resolve,rejecr){
//     const x=10;
//     const y=10;
//     if(x===y){
//         resolve();
//     }else{
//         reject()
//     }
// });
// promise1.
// then(function(){
//     console.log("equal")
// },function(){
//     console.log('not  equal')
// });



var promise1=new Promise(function(resolve,reject){
    const x=10;
     const y=1;
    if(x===y){
        resolve("success");
    }else{
        reject("failure");
    }
});
promise1.
then(function(msg){
    console.log(msg)
}).
catch(function(msg){
    console.log(msg);
});