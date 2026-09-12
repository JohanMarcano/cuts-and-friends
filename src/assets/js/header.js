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
})();
