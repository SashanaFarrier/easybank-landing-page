const hamburgerBtn = document.querySelector(".hamburger-btn");

const closeBtn = document.querySelector(".close-btn");

const primaryNav = document.querySelector("header nav");

const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);

function showMenu() {
  primaryNav.style.display = "block";
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideMenu() {
  primaryNav.style.display = "none";
  closeBtn.classList.add("hidden");
  hamburgerBtn.classList.remove("hidden");
  overlay.classList.add("hidden");
}
