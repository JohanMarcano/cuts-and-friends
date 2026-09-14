(function () {
  if (typeof Swiper === "undefined") return;

  var el = document.querySelector("#services-carousel");
  if (!el) return;

  // Gap en % ("5%"), debe mantenerse sincronizado con
  // --service-card-gap-desktop de tokens.css: Swiper no puede leer
  // variables CSS para spaceBetween, pero sí acepta un string con "%"
  // desde Swiper 9+ (este bundle es 11.2.10) — lo resuelve en cada
  // resize contra el ancho real del carrusel, así que el gap queda
  // fluido igual que el ancho de la tarjeta.
  //
  // Desktop usa slidesPerView: "auto" en vez de un número fijo: con un
  // número fijo, Swiper reparte el ancho del contenedor entre esa
  // cantidad de slides, ignorando el ancho real (20% del carrusel) de
  // la Service Card (bug corregido 2026-09-14: el slide medía menos
  // que la tarjeta con slidesPerView 4, así que la tarjeta se
  // desbordaba del slide y tapaba el gap). Con "auto", Swiper toma el
  // ancho del slide desde su CSS (ver .services-carousel .swiper-slide
  // en services.css, sincronizado con --service-card-width-desktop) —
  // así el slide y la tarjeta siempre miden lo mismo, y en viewports
  // angostos entran menos tarjetas (incluida una parcial) en vez de
  // comprimirlas.
  new Swiper(el, {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
      el: el.querySelector(".swiper-scrollbar"),
      draggable: true,
    },
    breakpoints: {
      1025: {
        slidesPerView: "auto",
        spaceBetween: "5%",
      },
    },
  });
})();
