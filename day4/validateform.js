function validateform(form){
    // alert("vdf")
    var email=form.email.value;
    var email_reg=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/;
    var phone_reg=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    var phone=document.getElementById.phone.value;
    if(document.getElementById("username").value.length<7)
    {
        alert("please enter a valid username")
        return false;
    }else if(email_reg.test(email)==false)
    {
        alert("please enter a valid mail id")
    }else if(phone_reg.test(phone)==false)
    {
        alert("please enter a correct phone number")
    }
}