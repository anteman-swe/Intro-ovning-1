const myHeadline = document.getElementById("headline");
const button = document.getElementById("button");
const hello = "Hello World!";
const goodbye = "Goodbye World!";
const helloColor = "blue";
const goodbyeColor = "red";
const buttonTextHello ="Klicka mig!"
const buttonTextGoodbye ="Klicka mig igen!"

myHeadline.innerHTML = hello;
button.i

button.addEventListener("click", changePage);

function changePage(){
    if (myHeadline.innerHTML == hello) {
        myHeadline.style.color = goodbyeColor;
        myHeadline.innerHTML = goodbye;
        button.innerHTML = buttonTextGoodbye;
    } else {
        myHeadline.style.color = helloColor;
        myHeadline.innerHTML = hello;
        button.innerHTML = buttonTextHello
    }   
}
