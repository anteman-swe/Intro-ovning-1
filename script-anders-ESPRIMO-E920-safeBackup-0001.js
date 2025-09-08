const myHeadline = document.getElementById("headline");
const hello = "Hello World!";
const goodbye = "Goodbye World!";
const helloColor = "blue";
const goodbyeColor = "red";

myHeadline.innerHTML = hello;
document.getElementById("button").addEventListener("click", changePage);

function changePage(){
    if (myHeadline.innerHTML == hello) {
        myHeadline.style.color = "red";
        myHeadline.innerHTML = "Goodbye World!";
    } else {
        myHeadline.style.color = "blue";
        myHeadline.innerHTML = "Hello World!";
    }   
}
