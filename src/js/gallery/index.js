import Swiper, { Navigation, Keyboard, Pagination } from "swiper";
// import "swiper/swiper-bundle";

Swiper.use([Navigation, Keyboard, Pagination]);
new Swiper(".chapter-2 .swiper-container", {
  slidesPerView: 2.5,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

new Swiper(".chapter-4 .swiper-container", {
  slidesPerView: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

new Swiper(".chapter-5 .swiper-container", {
  slidesPerView: 3,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
