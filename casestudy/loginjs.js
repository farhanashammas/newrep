$(document).ready(function(){


$("button").click(function(){
    let username=$("#username").val();
    let password=$("#password").val();

    validateLogin(username,password,function(f){
    
    if(f==1)
    window.location.href="home.html";
    else
    alert("invalid user id/password")
})
   
})
function validateLogin(username,password,callback){
    var flag=0;
   
    if(username=="admin"&&password=="12345")
   { flag=1;
    console.log(flag)
   }
    else
    flag=0;
    callback(flag);
}










});