// Hamburger script

const btn = document.querySelector(".nav-toggler");
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-toggler")) {
    btn.classList.toggle("toggle");
    header.classList.toggle("active");
  } else if (!e.target.closest(".nav-toggler")) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});
document.addEventListener("scroll", (f) => {
  if (window.scrollY > 50) {
    btn.classList.remove("toggle");
    header.classList.remove("active");
  }
});
