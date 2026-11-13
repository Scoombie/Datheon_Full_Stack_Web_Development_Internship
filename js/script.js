// 1. DARK / LIGHT THEME TOGGLE

const themeToggle = document.querySelector(".theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

function updateThemeIcon() {
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("light-theme")
      ? "☾"
      : "☀";
  }
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateThemeIcon();
  });
}

// 2. MOBILE NAVIGATION MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

      menuToggle.textContent = "☰";
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
