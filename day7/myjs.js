$(document).ready(function(){
    // $("button").click(function(){
        // $("div").animate({
        //     left: '250px',
        //     opacity: '0.5',
        //     height: '150px',
        //     width: '150px'
        //   });
    //     $("#div1").toggle();
    //     $("#div2").toggle("slow");
    //     $("#div3").toggle(3000);
    //     $("#panel").slideDown("slow")
    // });



// function showDiv(){
//     var fruits='<ul><li>apple</li><li>orange</li></ul>'
    
//     $("input[id=frts]").change(function(){
//         $("#div1").html(fruits)
//       })
       
// }
// function showDiv1(){
//     var animals='<ul><li>tiger</li><li>lion</li></ul>'
    
//     $("input[id=anmls]").change(function(){
//         $("#div2").html(animals)
//       })
       
// }

// showDiv()
// showDiv1()


function showDiv(){
    var fruits='<ul><li>apple</li><li>orange</li></ul>' 
   
        $("#div1").html(fruits)
}
function showDiv1(){
    var animals='<ul><li>tiger</li><li>lion</li></ul>'
    
    
        $("#div1").html(animals)
      
       
}
$("input[id=frts]").change(function(){
   showDiv()
  })

  $("input[id=anmls]").change(function(){
    showDiv1()
  })









})

