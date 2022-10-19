






function function1() {
    document.getElementById("first").style.visibility = 'visible';
    document.getElementById("fourth").style.visibility = 'hidden';
}

function function2() {
    document.getElementById("second").style.visibility = 'visible';
    document.getElementById("fourth").style.visibility = 'hidden';
}

function function3() {
    document.getElementById("third").style.visibility = 'visible';
    document.getElementById("fourth").style.visibility = 'hidden';
}
function close1() {
    document.getElementById("first").style.visibility = 'hidden';

}
function close2() {
    document.getElementById("second").style.visibility = 'hidden';
}
function close3() {
    document.getElementById("third").style.visibility = 'hidden';
}

function function4() {
    document.getElementById("fourth").style.visibility = 'visible';
    document.getElementById("first").style.visibility = 'hidden';
    document.getElementById("second").style.visibility = 'hidden';
    document.getElementById("third").style.visibility = 'hidden';
}
function close4() {
    document.getElementById("fourth").style.visibility = 'hidden';
    document.getElementById("first").style.visibility = 'hidden';
    document.getElementById("second").style.visibility = 'hidden';
    document.getElementById("third").style.visibility = 'hidden';
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))