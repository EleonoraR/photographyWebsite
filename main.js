// // Mobile menu toggle
// const menuToggle = document.querySelector(".menu-toggle");
// const navUl = document.querySelector("nav ul");

// menuToggle.addEventListener("click", () => {
//   navUl.classList.toggle("show");
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// // Gallery filtering
// const filterButtons = document.querySelectorAll(".filter-btn");
// const galleryItems = document.querySelectorAll(".gallery-grid img");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const filter = button.getAttribute("data-filter");

//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");

//     galleryItems.forEach((item) => {
//       if (filter === "all" || item.getAttribute("data-category") === filter) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });
//   });
// });

// Lightbox functionality
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Gallery filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-grid img");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    galleryItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Lightbox functionality
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "block";
  lightboxImg.src = img.src;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax");
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
});

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   alert('Thank you for your message! We will get back to you soon.');
//   this.reset();
// });
