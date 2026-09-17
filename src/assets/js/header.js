(function () {
  var menuBtn = document.querySelector(".site-header__menu-btn");
  var menuDialog = document.getElementById("mobile-menu");
  var closeBtn = document.querySelector(".mobile-menu__close");

  if (!menuBtn || !menuDialog) return;

  menuBtn.addEventListener("click", function () {
    menuDialog.showModal();
    menuBtn.setAttribute("aria-expanded", "true");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      menuDialog.close();
    });
  }

  // El evento "close" cubre tanto el botón X como Escape (nativo del
  // <dialog>). El foco vuelve solo al botón que abrió el diálogo:
  // comportamiento estándar de showModal()/close() del elemento nativo.
  menuDialog.addEventListener("close", function () {
    menuBtn.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  // Los links del menú mobile que navegan a una sección (Barbería/Servicios,
  // Galería, Barberos) tienen que cerrar el <dialog> ANTES del scroll: si el
  // salto de ancla ocurre con el dialog todavía abierto, el usuario ve el
  // menú un instante antes de que se cierre encima del destino.
  document.querySelectorAll('.mobile-menu__nav-list a:not([aria-disabled="true"])').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href");
      var isAnchor = hash && hash.charAt(0) === "#" && hash.length > 1;
      var target = isAnchor ? document.getElementById(hash.slice(1)) : null;

      if (target) {
        event.preventDefault();
      }

      menuDialog.close();

      if (target) {
        if (history.pushState) {
          history.pushState(null, "", hash);
        }
        // setTimeout: el cierre del <dialog> devuelve el foco al botón
        // hamburguesa (comportamiento nativo de close(), vía una tarea
        // encolada del propio user agent) y ese cambio de foco dispara su
        // propio scroll-to-focus, que pisa el scrollIntoView si se llama en
        // el mismo tick o el mismo frame (un requestAnimationFrame no
        // alcanza: la tarea de foco puede resolverse después). Se difiere
        // a la macrotarea siguiente para que ese scroll del foco termine
        // primero.
        setTimeout(function () {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    });
  });
})();
