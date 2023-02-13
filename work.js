
var dropdown = document.querySelectorAll(".dropdown");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "";
        }
    });
}
var slideIndex = 0;
var slides = document.querySelectorAll(".slide");
slides[slideIndex].style.display = "block";
setInterval(function () {
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}, 2000);
var items = document.querySelectorAll(".item");
var lightboxOverlay = document.querySelector("#lightbox-overlay");
var lightboxImage = document.querySelector("#lightbox-image");
for (var i = 0; i < items.length; i++) {
    items[i].querySelector(".view-button").addEventListener("click", function (event) {
        event.preventDefault();
        lightboxOverlay.style.display = "block";
        lightboxImage.src
    })
}
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
let modal = document.querySelector("#modal");
let showModalButton = document.querySelector("#showModal");
let closeButton = document.querySelector(".close-button");

showModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
let tabButtons = document.querySelectorAll(".tab-button");
let tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((button) => {
            button.classList.remove("active");
        });
        tabContents.forEach((content) => {
            content.style.display = "none";
        });
        button.classList.add("active");
        tabContents[index].style.display = "block";
    });
});
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
let links = document.querySelectorAll('a');
for (const link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
var headers = document.querySelectorAll(".accordion-header");
headers.forEach(function (header) {
    header.addEventListener("click", function () {
        var bodyId = header.getAttribute("id").replace("header", "body");
        var body = document.querySelector("#" + bodyId);
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
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
let accordionQuestions = document.querySelectorAll('.accordion-question');
accordionQuestions.forEach((question) => {
    question.addEventListener('click', function () {
        this.classList.toggle('active');

        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
    });
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
