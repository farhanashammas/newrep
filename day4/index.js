 console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title="Faru";
// console.log(document.all[7]);



// console.log(document.getElementById("intro"));
// let store=(document.getElementById("intro"));
// console.log(store.textContent);
// store.textContent="Hello";
// console.log(store.textContent);
// //store.innerText="Hello";
// store.innerHTML="<h1>Hello</h1>";
// document.getElementById("idd").innerHTML="<p>Welcome to ictak</p>";

let hold=document.getElementsByClassName("heading");
// hold[1].textContent="Hello";
// console.log(hold);
// hold[0].style.backgroundColor="red";
for(i=0;i<hold.length;i++)
{
    hold[i].style.backgroundColor="red";
    hold[i].style.borderBottom="solid 3px green";
}

let safe=document.getElementsByTagName('h1');
console.log(safe);
safe[1].textContent="tag name changed";

let area=document.querySelectorAll('input');
area[0].value="farhana"
// let area=document.querySelector('#input');
// area.value="farhana";



function myFunction(){
    let send=document.querySelector('input[type="submit"]');
send.value='send';

let child=document.querySelector('.lichild');
child.style.color="green";

let child2=document.querySelector('.lichild:last-child');
child2.style.color="blue";

let child3=document.querySelector('.lichild:nth-child(2)');
child3.style.color="red";

    //alert("hello")
}


function onLoadFunction(){
    alert("hi")
}

function submitting(){
    alert("submitted");
}