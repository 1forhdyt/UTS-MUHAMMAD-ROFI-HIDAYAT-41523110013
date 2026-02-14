/* =========================
   SERVICES MODAL (Event Handler)
========================= */

function openModal(service) {
    let title = "";
    let text = "";

    if (service === "consulting") {
        title = "Business Consulting";
        text = "We provide strategic planning, business analysis, and professional guidance to help your company grow and compete effectively.";
    } 
    else if (service === "development") {
        title = "System Development";
        text = "We develop modern, scalable, and secure systems tailored to your business needs using the latest technology.";
    } 
    else if (service === "support") {
        title = "IT Support";
        text = "Our IT support team ensures your systems run smoothly with fast response and reliable technical assistance.";
    }

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;

    document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

/* Close modal if click outside */
window.onclick = function(event) {
    let modal = document.getElementById("serviceModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



/* =========================
   SCROLL REVEAL ANIMATION
========================= */

window.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function (element) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});



/* =========================
   NAVBAR EFFECT ON SCROLL
========================= */

window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});



/* =========================
   ACTIVE MENU ON SCROLL
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Form Submit Handler
function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your data has been submitted.");
}
