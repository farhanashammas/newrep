$(document).ready(()=>{

// showFile=()=>{

// }

$("input").change(function(){
    for(let i=0;i<this.files.length;i++){
    var reader=new FileReader();
    let file=(this).files[i];
    // alert (file.name)
    // console.log(this.files[i])
    reader.readAsText(file)
    reader.onload=function(e){
        console.log(e.target.result);
    };
    reader.onerror=function(){
        console.log("Error")
    }

}

})
})