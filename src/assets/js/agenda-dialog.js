(function () {
  // Plan B (docs/home-estructura.md, "Decisiones confirmadas"): si el
  // popup resulta incómodo en un teléfono real, subir este valor (ej.
  // 768) para desactivar el interceptor bajo ese ancho y dejar el CTA
  // como enlace directo a Agenda Pro solo en mobile.
  var AGENDA_POPUP_MIN_WIDTH = 0;

  var dialog = document.getElementById("agenda-dialog");
  var closeBtn = document.querySelector(".agenda-dialog__close");
  var iframeWrap = document.querySelector(".agenda-dialog__iframe-wrap");

  if (!dialog || !iframeWrap) return;

  var iframeInjected = false;
  var lastTrigger = null;

  function ensureIframe(src) {
    if (iframeInjected) return;
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = "Agenda Pro — Reserva tu hora";
    iframe.loading = "lazy";
    iframeWrap.appendChild(iframe);
    iframeInjected = true;
  }

  document.querySelectorAll("a[data-agenda]").forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      if (window.innerWidth < AGENDA_POPUP_MIN_WIDTH) return; // deja el link directo

      event.preventDefault();
      lastTrigger = trigger;
      ensureIframe(trigger.href);
      dialog.showModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      dialog.close();
    });
  }

  dialog.addEventListener("close", function () {
    if (lastTrigger) lastTrigger.focus();
  });
})();
