const myHeadline = document.getElementById("headline");

document.getElementById("button").addEventListener("click", changePage);

function changePage(){
    if (myHeadline.innerHTML == "Hello World!") {
        myHeadline.style.color = "red";
        myHeadline.innerHTML = "Goodbye World!";
    } else {
        myHeadline.style.color = "blue";
        myHeadline.innerHTML = "Hello World!";
    }   
}
