/* burger menu */

let burgerBtn = document.getElementById("burger-btn");
let burgerMenu = document.getElementById("burger-menu");
let closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", function () {
  burgerMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  document.body.style.overflow = "auto";
});

/* swiper */

let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* scroll-btn */

let scrollBtn = document.getElementById("scroll-btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300 && isMobile()) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
