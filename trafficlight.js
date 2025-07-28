let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

function stop() {
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "rgba(192, 233, 224, 1)";
    b3.style.backgroundColor = "rgba(192, 233, 224, 1)";
    c1.style.backgroundColor = "red";
    c2.style.backgroundColor = "rgb(206, 199, 162)";
    c3.style.backgroundColor = "rgb(206, 199, 162)";
}
function ready() {
    b1.style.backgroundColor = "rgba(192, 233, 224, 1)";
    b2.style.backgroundColor = "yellow";
    b3.style.backgroundColor = "rgba(192, 233, 224, 1)";
    c1.style.backgroundColor = "rgb(206, 199, 162)";
    c2.style.backgroundColor = "yellow";
    c3.style.backgroundColor = "rgb(206, 199, 162)";
}
function go() {
    b1.style.backgroundColor = "rgba(192, 233, 224, 1)";
    b2.style.backgroundColor = "rgba(192, 233, 224, 1)";
    b3.style.backgroundColor = "green";
    c1.style.backgroundColor = "rgb(206, 199, 162)";
    c2.style.backgroundColor = "rgb(206, 199, 162)";
    c3.style.backgroundColor = "green";
}

