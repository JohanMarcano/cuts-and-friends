(function () {
  if (typeof Swiper === "undefined") return;

  var el = document.querySelector("#services-carousel");
  if (!el) return;

  // Gaps en px, deben mantenerse sincronizados con --spacing-32 de
  // tokens.css: Swiper no puede leer variables CSS para spaceBetween.
  //
  // Desktop usa slidesPerView: "auto" en vez de un número fijo: con un
  // número fijo, Swiper reparte el ancho del contenedor entre esa
  // cantidad de slides, ignorando el ancho real de 350px de la Service
  // Card (bug corregido 2026-09-14: el slide medía 287.75px con
  // slidesPerView 4, más angosto que la tarjeta de 350px, así que la
  // tarjeta se desbordaba del slide y tapaba el gap). Con "auto",
  // Swiper toma el ancho del slide desde su CSS (ver
  // .services-carousel .swiper-slide en services.css, sincronizado con
  // --service-card-width-desktop) — así el slide y la tarjeta siempre
  // miden lo mismo, y en viewports angostos entran menos tarjetas
  // (incluida una parcial) en vez de comprimirlas.
  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
      el: el.querySelector(".swiper-scrollbar"),
      draggable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    },
  });
})();
