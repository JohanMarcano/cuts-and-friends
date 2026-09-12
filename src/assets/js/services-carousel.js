(function () {
  if (typeof Swiper === "undefined") return;

  var el = document.querySelector("#services-carousel");
  if (!el) return;

  // Gaps en px, deben mantenerse sincronizados con --spacing-32 de
  // tokens.css: Swiper no puede leer variables CSS para spaceBetween.
  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
      el: el.querySelector(".swiper-scrollbar"),
      draggable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
})();
