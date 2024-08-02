const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true, //курсор перетаскивания

  keyboard: {
    //управление клавиатурой
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    //управление мышкой
    sensitivity: 1,
  },

  spaceBetween: 16, //отступ между слайдами

  breakpoints: {
    //адаптивность
    240: {
      slidesPerView: 0.7,
    },
    320: {
      slidesPerView: 1.2,
    },
    380: {
      slidesPerView: 1.5,
    },
    440: {
      slidesPerView: 1.8,
    },
    520: {
      slidesPerView: 2,
    },
    560: {
      enabled: false,
    },
  },
});
