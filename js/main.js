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
var slideIndex = 1;
var slideIndexs = 1;
var feedbackIndex = 1;


function loopSlide(n) {

    setTimeout(function() {
        slideIndex += n;
        //if (slideIndex > 4) slideIndex = 1;
        showSlide(slideIndex);
        loopSlide(n);
    }, 3000);
}

function currentSlides(n) {
    setTimeout(showSlide(slideIndex = n), 1000);

}


function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.querySelectorAll(".far.fa-square");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" visit", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " visit";
}
// function solai(){
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.querySelectorAll(".far.fa-square");
//     var index = 0;
//     var img = ["url(\"images/slide1.jpg\")", "url(\"images/slide2.jpg\")", "url(\"images/slide3.jpg\")" ];
//     setTimeout(function{
//         index++;
//         if (index>4) index = 0;

//     },3000);
// }

// xu li list awesome tab
var acc = document.getElementsByClassName("list-awesome-item");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        console.log(panel);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
//////////////////////////////// list image

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


//showSlides(slideIndexs);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndexs += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndexs = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndexs = 1
    }
    if (n < 1) {
        slideIndexs = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexs - 1].style.display = "block";
    dots[slideIndexs - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
/// feedback 




function plusFeedback(n) {
    showFeedback(feedbackIndex += n)
}

function currentFeedback(n) {
    showFeedback(feedbackIndex = n);
}

function showFeedback(n) {
    var feedbackText = document.querySelectorAll(".feedback-list-item");
    var feedbackImage = document.querySelectorAll(".circle-item");
    if (n > feedbackImage.length) {
        feedbackIndex = 1;
    }
    if (n < 1) {
        feedbackIndex = feedbackImage.length;
    }
    for (let i = 0; i < feedbackImage.length; i++) {
        feedbackImage[i].className = feedbackImage[i].className.replace(" visited", "");
    }
    for (let i = 0; i < feedbackText.length; i++) {
        feedbackText[i].style.display = "none";
    }
    feedbackImage[feedbackIndex - 1].className += " visited";
    feedbackText[feedbackIndex - 1].style.display = "block";
}
// back tot top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showInputSearch() {

    var input_search = document.querySelector(".input-search");
    input_search.style.display = "block";
}
var btn_search = document.querySelector(".btn-search");
btn_search.addEventListener("click", showInputSearch);
showSlide(1);
showFeedback(1);
loopSlide(1);