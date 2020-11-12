import Swiper, { Navigation, Keyboard, Pagination } from "swiper";
// import "swiper/swiper-bundle";

Swiper.use([Navigation, Keyboard, Pagination]);
new Swiper(".chapter-2 .swiper-container", {
  slidesPerView: 2.5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    1201: {
      slidesPerView: 2,
    },
  },
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".chapter-4 .swiper-container", {
  slidesPerView: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".chapter-5 .swiper-container", {
  slidesPerView: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
