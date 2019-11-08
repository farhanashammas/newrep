// function loadDoc(){
//     var xttp=new XMLHttpRequest;
//     xttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200)
//         {
//          var myJSON=JSON.parse(this.responseText);
//           document.getElementById("demo").innerHTML = myJSON;
//         }
//     }; 
   
//     xttp.open("GET","https://www.randomtext.me/api/lorem/ul-5/5-15",true)
//     xttp.send()
// }

$(document).ready(function(){
    $("button").click (function(){
         $.ajax({
            method:"GET",
            url:"https://www.randomtext.me/api/lorem/ul-5/5-15",
            success:function(result)
            {          
            console.log(result);
              $("#demo").html(result.text_out);
               }

           });
        })
        })