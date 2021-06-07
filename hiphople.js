const left = document.querySelector(".left");
const right = document.querySelector(".right");
const Img = document.getElementsByClassName("Img");
const logIn = document.querySelector(".logIn");
const logInDetails = document.querySelector(".logInDetails");
const closeBtn = document.querySelector(".closeBtn");
//console.log(Img.length);

right.addEventListener("click", moveRight);
left.addEventListener("click", moveLeft);

var i = 0;

Img[0].style.display = "block";

function moveRight() {

    Img[i].style.display = "none";

    if (i < Img.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    Img[i].style.display = "block";

}

function moveLeft() {

    Img[i].style.display = "none";

    if (i <= 0) {
        i = 2;
    }
    else {
        i--;
    }
    Img[i].style.display = "block";

}

logIn.addEventListener("click", function () {
    logInDetails.classList.toggle("active");
});

closeBtn.addEventListener("click", function () {
    logInDetails.classList.remove("active");
});


























// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
