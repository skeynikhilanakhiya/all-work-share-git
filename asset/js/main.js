var myIndex = 0;
carousel();
function carousel() {
    var x = document.getElementsByClassName("mySlides");
    Array.from(x).forEach(function (element) {
        element.style.display = "none";
    });
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

var slideIndex = 0;
var slides = document.querySelectorAll(".slide");
slides[slideIndex].style.display = "block";
setInterval(function () {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}, 2000);
const form = document.querySelector("#contactForm");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        alert("Please fill in all fields");
    } else {
        alert("Form submitted successfully");
    }
});
// let modal = document.querySelector("#modal");
// let showModalButton = document.querySelector("#showModal");
// let closeButton = document.querySelector(".close-button");
// showModalButton.addEventListener("click", function () {
//     modal.style.display = "block";
// });
// closeButton.addEventListener("click", function () {
//     modal.style.display = "none";
// });
// window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });
let searchInput = document.querySelector("#search-input");
let searchResults = document.querySelector("#search-results");
let blogPosts = document.querySelectorAll(".blog-post");
searchInput.addEventListener("input", (even) => {
    const searchTerm = even.target.value.toLowerCase();
    searchResults.innerHTML = "";
    blogPosts.forEach((post) => {
        if (post.textContent.toLowerCase().includes(searchTerm)) {
            searchResults.appendChild(post.cloneNode(true));
        }

    });
});
let carouselContainer = document.querySelector('.carousel-container');
let carouselItems = document.querySelectorAll('.carousel-item');
let prevBtn = document.querySelector('#prev-btn');
let nextBtn = document.querySelector('#next-btn');
let currentItem = 0;
carouselItems[currentItem].classList.add('active');
prevBtn.addEventListener('click', () => {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    carouselItems[currentItem].classList.add('active');
});
nextBtn.addEventListener('click', () => {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.add('active');
});
let header = document.querySelector('#header');
let footer = document.querySelector('#footer');

header.addEventListener('mouseenter', function () {
    header.classList.add('highlight');
});

header.addEventListener('mouseleave', function () {
    header.classList.remove('highlight');
});

footer.addEventListener('mouseenter', function () {
    footer.classList.add('highlight');
});

footer.addEventListener('mouseleave', function () {
    footer.classList.remove('highlight');
});
let scrollToTopBtn = document.querySelector('#scroll-to-top-btn');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        }
        else {
            event.classList.add("active");
        }
    })
})

window.onscroll = function () { myFunction() };

// var headers = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("");
    }
}
function openCity(evt, cityName) {
    let tabcontents = document.querySelectorAll(".tabcontent");
    tabcontents.forEach(tabcontent => {
        tabcontent.style.display = "none";
    });

    let tablinks = document.querySelectorAll(".tablinks");
    tablinks.forEach(tablink => {
        tablink.classList.remove("active");
    });

    let cityTab = document.getElementById(cityName);
    cityTab.style.display = "block";
    evt.currentTarget.classList.add("active");
}

let navLinks = document.querySelector('.nav-links');
let burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})  


