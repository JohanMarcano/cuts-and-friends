(function () {
  // El acordeón en sí funciona nativo (<details>/<summary>), sin JS.
  // Esto solo espeja el estado [open] a aria-expanded en el <summary>,
  // porque el mapeo ARIA nativo de <summary> no es consistente entre
  // navegadores/lectores de pantalla (CLAUDE.md pide aria-expanded
  // explícito en el acordeón).
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var summary = item.querySelector(".faq-item__question");
    if (!summary) return;

    function syncState() {
      summary.setAttribute("aria-expanded", String(item.open));
    }

    syncState();
    item.addEventListener("toggle", syncState);
  });
})();
