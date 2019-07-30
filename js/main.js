// var slideIndex = 1;
// showSlide(1);
// loopSlide(1);

// function loopSlide(n) {
//     if (true)
//         setTimeout(function() {
//             slideIndex += n;
//             plusSlides(n);
//             loopSlide(n);
//         }, 3000);
// }


// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

// function plusSlides(n) {
//     showSlide(slideIndex += n);
// }

// function openModal() {
//     document.getElementById("modal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// function showSlide(n) {
//     var i;
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.querySelectorAll(".far.fa-square");
//     if (n >= slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" visit", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " visit";
// }

// // xu li list awesome tab
// var acc = document.getElementsByClassName("list-awesome-item");


// for (let i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         console.log(panel);
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// hihi