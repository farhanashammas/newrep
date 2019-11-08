// normal function
// function multiply(num1,num2){
// return num1*num2;
// }
// let result=multiply(2,3);
// console.log(result);


// ES5
// let multiply=function(num1,num2){
// return num1*num2;
// }
// let result=multiply(5,3);
// console.log(result);




// // arrow function
// let multiply=(num1,num2)=>{
// return num1*num2;
// }
// let result=multiply(5,6);
// console.log(result);



// arrow function
// let square=(num1)=>{
//     return num1*num1;
//     }
//     let result=square(50);
//     console.log(result);



// let getDetails=(id,callback,fn3)=>{ //accept the variables here, 2nd value is a fn 
//     console.log("Inside the function");
//     console.log("id:"+id);
//     callback("fahana",fn3); //fn call
    
// }
// getDetails(1,(name,a)=>{
//     console.log("name is "+name);
//     a();
// },()=>{
//     console.log("3rd callback function")
// }); //fn call, 2nd parameter is a function called callback



// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 2000);
// console.log("third");
// console.log("fourth");
// console.log("fifth");




function getUser(id,callback){
    setTimeout(()=>{
        callback ({id:id,name:'farhana'});
    },2000);
}
console.log('before');
getUser(1,function(user){
    console.log(user);
});

console.log("after");


// var person=new Object();
// person.setValue=function(n,a){
//     this.name=n;
//     this.age=a;
// }
// person.getValues=function(){
//     console.log('The name is'+this.name)
//     console.log('age is'+this.age)
// }
// person.setValue('farhana',22);
// person.getValues();



// function person(first_name,last_name){
//      this.first_name=first_name;
//      this.last_name=last_name;
// }

// person.prototype.getDetails=function(){
//     console.log("name is "+this.first_name+this.last_name);
// }

// let person1=new person('farhana','shammas')
// let person2=new person('diya','shammas')
// person1.getDetails();
// person2.getDetails();




// const coder={
//     isStudying: false,
//     printIntroduction :function(){
//         console.log(`my name is ${this.name}.am I studying? ${this.isStudying}.`)
//     }
// }
// var m1=Object.create(coder)
// m1.name='farhana'
// m1.isStudying=true;

// var m2=Object.create(coder)
// m2.name='diya'


// m1.printIntroduction()
// m2.printIntroduction()




// class Vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return(`the name of the vehicle is ${this.name} maker is ${this.maker} and engine is ${this.engine}`)
//     }
//     }
    

//     var bike1=new Vehicle('hayabusa','suzuki','1300cc')
//     var bike2=new Vehicle('ninja','kawasaki','1200cc')

//     console.log(bike1.getDetails());
//     console.log(bike2.getDetails());