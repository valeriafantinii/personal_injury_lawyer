const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");

    const isExpanded =
      navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", !isExpanded);
  });
}