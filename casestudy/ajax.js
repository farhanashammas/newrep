
$(document).ready(function(){
    $("#demo").click (function(){
         $.ajax({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(result)
            {          
            // console.log(result);
            list="<ul>"
            for(i in result){
                    +"<li><input type=checkbox><label>result[i].result</label></li>"
            }
            +"</ul>"
        $("#div").html(result.title)    
        }


           });
        })
        })