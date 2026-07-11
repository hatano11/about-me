// ==========================
// Fade In Animation
// ==========================

const fadeElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

fadeElements.forEach((element) => {

    element.classList.add("fade");

    observer.observe(element);

});


// ==========================
// Current Navigation
// ==========================

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-list a").forEach((link) => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});