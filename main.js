const nav = document.getElementById("primary-navigation");
const toggle = document.querySelector(".nav-toggle");
const triggers = document.querySelectorAll(".nav__trigger");

const closeAllSubmenus = () => {
  triggers.forEach((btn) => {
    const item = btn.closest(".has-menu");
    if (!item) return;

    item.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  });
};

triggers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const item = btn.closest(".has-menu");
    if (!item) return;

    const isOpen = item.classList.contains("is-open");

    closeAllSubmenus();

    if (!isOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = e.target.closest(".has-menu");
  if (!clickedInsideMenu) closeAllSubmenus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllSubmenus();
});

if (nav && toggle) {
  const closeMenu = () => {
    nav.classList.remove("nav--open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    nav.classList.add("nav--open");
    toggle.setAttribute("aria-expanded", "true");
  };

  const isOpen = () => nav.classList.contains("nav--open");

  toggle.addEventListener("click", () => {
    if (isOpen()) closeMenu();
    else openMenu();
  });

  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });

  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 701px)").matches) closeMenu();
  });
}