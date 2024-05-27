const mobileMenu = document.getElementById("mobile-menu");
const menuBar = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
  menuBar.classList.toggle("mobile-nav");
  mobileMenu.classList.toggle("is-active");
});
