const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("header nav");
const backdrop = document.querySelector(".backdrop");

const toggleLinks = () => {
  document.body.classList.toggle("modal");
  navLinks.classList.toggle("show_links");
  backdrop.classList.toggle("backdrop_show");
};

hamburger.addEventListener("click", toggleLinks);
backdrop.addEventListener("click", toggleLinks);
