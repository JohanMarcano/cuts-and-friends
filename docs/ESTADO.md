# Cuts And Friends — Estado

**Hito actual:** H4 — Maquetación (fase 1: header, footer y HOME)
**Última actualización:** 2026-09-11

## Hecho

- Setup del Mac de trabajo: Homebrew, git, node, Cursor.
- Claude Code instalado (nativo por Homebrew, 2.1.236, arm64) y
  autenticado como johan@shopbotagency.com.
- Repo local en `~/shopbot-ops/cuts-and-friends` con `CLAUDE.md` en la
  raíz y `docs/` conteniendo CONTEXTO.md y ESTADO.md.
- Auditoría DNS y de correo del dominio cutsandfriends.cl.
- **H1 cerrado.** Staging operativo en `https://cuts.shopbotagency.com`:
  - Subdominio creado en cPanel de Webempresa (cuenta `pecesyma`),
    raíz en `/home2/pecesyma/public_html/cuts.shopbotagency.com`.
  - SSL Let's Encrypt emitido, vence 2026-12-05.
  - WordPress instalado por Softaculous en la raíz del subdominio
    (sin subdirectorio `/wp`), idioma español, sin los plugins que
    ofrece Softaculous y sin Extendify.
  - Noindex activo en Ajustes → Lectura.
  - Protección por contraseña activa en el directorio (cPanel).
  - Tema Hello Elementor activo.
  - Elementor 4.2.4 + Elementor Pro 4.2.3 instalados y activos.
    Licencia Elementor Pro Advanced conectada (A-S03331748).
- **H2 cerrado.** Embed de Agenda Pro probado en una página del
  staging. Funciona, verificado en incógnito. No hay lista blanca de
  dominios.
- Figma: archivo CUT&FRIENDS movido del equipo SHOPBOT 9 (Free) al
  equipo SHOPBOT (Professional), proyecto "Cuts". Asiento Full
  confirmado.
- MCP de Figma conectado en Claude Code vía el plugin oficial
  (`figma@claude-plugins-official`), instalado en user scope,
  41 herramientas disponibles.
- Tokens de diseño extraídos del Figma a `docs/design-tokens.md`
  (versión previa al rehecho de Agustina).
- Lista depurada de colores y tipografías para Elementor en
  `docs/estilos-globales-elementor.md`.
- Archivo de la fuente GOOD_BRUSH recibido. Licencia libre con
  donación opcional.

## En curso

- Prueba del sitio estático (HTML/CSS/JS planos en `src/`, sin
  WordPress ni Elementor — ver bloque "Prueba en curso" de
  `CLAUDE.md`). Con el cierre de sesión del 2026-09-14, las 9
  secciones de HOME están maquetadas (Header, Hero, Services, Gallery,
  Experience, Team, Benefits, FAQ, Footer) más el popup de Agenda Pro
  y el botón flotante de WhatsApp. Falta: assets reales (fotos, logo,
  íconos, fuente GOOD_BRUSH aplicada), copy definitivo (Benefits, FAQ,
  párrafos de Gallery/Experience son placeholder), y decidir si el
  proyecto sigue por esta vía o vuelve a Elementor.

## Bloqueado / esperando

- Definir con el cliente quién queda como titular de la licencia de
  Elementor Pro y cómo se maneja la renovación anual.

## Decisiones tomadas

- WordPress + Elementor, no sitio estático.
- Staging en `cuts.shopbotagency.com`, bajo el dominio de la agencia.
  Se descartó usar `staging.pecesymascotas.com` por colgar del dominio
  de otro cliente y tener restos de una instalación anterior.
- WordPress en la raíz del subdominio, sin `/wp`, para no arrastrar
  prefijos de URL al cutover.
- Elementor Pro plan Advanced. El primer año lo asume la agencia; la
  renovación queda a cargo del cliente.
- El dominio no se transfiere de registrador. Se migra la zona DNS a
  Cloudflare y luego se cambia solo el registro A.
- El crawl del sitio Wix se hace en H5, no antes.
- **Fase 1 incluye solo HOME.** Con esa página se pide la aprobación
  del cliente.
- **CONTACTO se elimina del alcance.** La conversión va por Agenda Pro
  y WhatsApp.
- **Blog queda para fase 2**, posterior a la aprobación.
- **No se usa MCP de WordPress.** El plugin de Automattic fue archivado
  en enero 2026, y la contraseña de directorio bloquearía la REST API
  de todos modos.
- **No se cambia de plan de hosting ahora.** Se revisa después del
  cierre del proyecto.
- Normalizaciones aplicadas sobre el Figma anterior, pendientes de
  reconfirmar con el archivo nuevo: `#060606` unificado con `#000000`,
  FAQ a 21px, encabezado "Nosotros" a 45px.
- Se evalúa reemplazar Elementor por un tema WordPress a medida.
  Motivo: el cliente no va a editar el sitio, todos los cambios los
  hace Johan, y las dos piezas de mayor riesgo (scrollbar arrastrable
  de Swiper y popup a pantalla completa) son más simples en código
  que en Elementor. Decisión pendiente de la prueba.
- Despliegue por Control de versiones Git de cPanel (Webempresa),
  desde un repo privado de GitHub. El staging sigue siendo
  cuts.shopbotagency.com con contraseña; el cliente no ve ningún
  cambio de flujo.

## Datos confirmados

| Dato | Valor |
|---|---|
| Registrador | NIC Chile (`.cl`) |
| Nameservers actuales | ns2.wixdns.net / ns3.wixdns.net |
| A del dominio raíz | 185.230.63.107 / .171 / .186 (Wix) |
| www | CNAME cdn3.wixdns.net (CDN de Wix sobre Cloudflare) |
| Correo | Google Workspace |
| SPF | `v=spf1 include:_spf.google.com ~all` |
| DKIM | No publicado |
| DMARC | No publicado |
| Agenda | Agenda Pro, vía iframe |
| URL del embed | `https://agendapro.com/iframe/overview/a2bf274c-4983-4407-bc82-c9ba6b6989bf` |
| Hosting staging | Webempresa, cuenta `pecesyma`, cPanel |
| URL del staging | `https://cuts.shopbotagency.com` |
| PHP del staging | 8.2 |
| Plan de hosting | WordPress Talla L 10gb, 208.48 USD/año |
| SSH | **No disponible** en el plan actual |
| Figma — frames definitivos | Página "03 landings", archivo CUT&FRIENDS |

## Riesgos abiertos

- **Toda la conversión depende de dos elementos.** Sin página de
  contacto, el sitio convierte solo por el embed de Agenda Pro y el
  botón de WhatsApp. El de WhatsApp debe ir flotante y visible en todo
  el scroll.
- **El embed trae `width="810"` fijo.** Hay que envolverlo en un
  contenedor `width:100%` con alto controlado por breakpoint, o se
  desborda en móvil.
- **No cancelar el plan de Wix hasta después del cutover.** La zona DNS
  todavía vive en sus nameservers.
- **Sin SSH no hay WP-CLI.** El `search-replace` del cutover se hará
  con el plugin Better Search Replace, que maneja datos serializados
  y trae modo de simulación. Instalarlo recién en H8.
- La cuenta tiene un addon **PHP Legacy** y el sistema está en PHP 7.3.
  Identificar qué sitio lo necesita antes de cualquier cambio de plan.
- `staging.pecesymascotas.com` y los dos zips en `public_html` son
  restos de otros proyectos. No borrarlos hasta descargar el respaldo.
- Titularidad de la licencia de Elementor Pro sin definir con el
  cliente.
- Si Agustina sigue editando el Figma mientras se maqueta, hay riesgo
  de rehacer trabajo. Acordar cuándo da el archivo por cerrado.

## Pendientes

- Crear repo privado en GitHub y conectarlo al Control de versiones
  Git de cPanel.
- Subir GOOD_BRUSH en Elementor → Fuentes personalizadas. Convertir a
  .woff2 antes si el zip solo trae .ttf.
- Guardar el archivo de licencia de la fuente en `docs/licencias/`.
- Ticket a Webempresa: costo de subir de Talla L a Talla XL dentro de
  la misma línea, para habilitar SSH.
- Export completo de la zona DNS de Wix hacia `dns/` (prerequisito de
  H3, es read-only y se puede hacer en cualquier momento).
- Evaluar cambio de hosting después del cierre del proyecto.
  Referencia: HostingPlus eCommerce, $159.900 CLP + IVA anual
  ($190.281 con IVA), pero limitado a 4 sitios.
- Consolidar los equipos de Figma: hay 12+ equipos Free con archivos
  de clientes que pierden historial de versiones a los 30 días.

## Bitácora

**2026-09-06** — Setup inicial del entorno de trabajo. Auditoría DNS:
se confirma que el dominio está en NIC Chile y no en Wix, que el correo
es Google Workspace y que no hay DKIM ni DMARC.

**2026-09-09** — H1 cerrado. Staging levantado en
`cuts.shopbotagency.com` con SSL, WordPress, noindex, contraseña de
directorio, Hello Elementor y Elementor Pro Advanced con licencia
activa. Se resolvió un bloqueo de Softaculous por PHP 7.3 en el
subdominio. Archivo de Figma movido al equipo con plan Professional y
MCP de Figma conectado en Claude Code. Se descartó el MCP de WordPress.
Se confirmó que el plan de hosting actual no incluye SSH.

**2026-09-11** — H2 cerrado: el embed de Agenda Pro funciona en el
staging, verificado en incógnito, sin restricción de dominios. Se
extrajeron los tokens de diseño del Figma (mobile y desktop HOME) y se
armó la lista depurada para Elementor. Agustina rehizo el archivo de
Figma normalizando colores y tipografías; los frames definitivos
quedaron en la página "03 landings". Se acotó el alcance: fase 1 solo
HOME, CONTACTO fuera del proyecto, blog en fase 2. Se recibió la fuente
GOOD_BRUSH con licencia libre. Siguiente paso: reprocesar el Figma
nuevo y cargar los estilos globales en Elementor.

**2026-09-14** — Corregido el bug del carrusel de Services: con
`slidesPerView: 4` fijo, Swiper repartía el ancho del contenedor entre
4 slides (287.75px) en vez de respetar los 350px de la Service Card, y
la tarjeta se desbordaba del slide tapando el gap. Cambiado a
`slidesPerView: "auto"` en desktop, con el ancho del `.swiper-slide`
sincronizado a `--service-card-width-desktop` — verificado en
navegador, ancho de slide y tarjeta coinciden, gap visible, y en
viewports angostos entran menos tarjetas (con una parcial) en vez de
comprimirse. Agregado radio de borde (`--radius-md`, ~16-18px, medido
por pixel-peeping de un screenshot vía MCP de Figma porque el nodo no
lo expone como variable) y degradado oscuro sobre la mitad inferior de
la Service Card (`--color-overlay-image`, ya declarado pero huérfano
hasta ahora) — ambos confirman que el Figma se rehizo después de la
extracción de `componentes.md` §2, que documentaba `radius/none` y sin
overlay. Construidas las 6 secciones restantes de HOME (Gallery,
Experience, Team, Benefits, FAQ, Footer) más el botón flotante de
WhatsApp, siguiendo `docs/home-estructura.md` §4-9 y `docs/componentes.md`
§3-7 y §10. Probado en navegador (desktop 1440px y mobile 390px):
carrusel, acordeón FAQ (abre/cierra, ícono rota), popup de Agenda Pro
(carga el iframe real), grillas de Gallery/Benefits/FAQ y botón
flotante, todo sin errores de consola. Pendiente: assets reales (fotos,
logo, íconos), copy definitivo de Benefits/FAQ/Gallery/Experience
(hoy son placeholder), y varias decisiones de diseño no confirmadas
(ver detalle entregado a Johan en el chat de la sesión).

**2026-09-14 (2)** — Comparado el mobile contra el frame "Landing /
Mobile" del Figma (MCP) y corregidos los hallazgos:
- Header mobile: fondo negro sólido en toda la barra (antes
  transparente, el texto blanco se perdía sobre la foto del Hero).
  Dirección: pasa de 1 línea con ellipsis (cortada) a envolver en
  hasta 2-3 líneas — al tamaño mínimo legible (16px) no entra completa
  en una línea junto al teléfono dentro de 390px; se priorizó
  legibilidad sobre una sola línea.
- Bug real de `--font-size-heading-h2`: estaba fijo en 45px en mobile y
  desktop por igual (arrastrado de la normalización puntual de
  "Nosotros"), cuando el crudo Figma mobile de heading/h2 es 20px (ya
  legible, sin necesitar "Mobile propuesto"). Eso hacía que el badge de
  "SERVICIOS" no entrara en una línea a 390px y el badge (ancho al
  contenido) se expandiera al 100% de la sección. Corregido: el token
  ahora es un clamp fluido 20px→45px (390→1920px), y el caso de
  Experience/"Nosotros" (normalización confirmada 2026-09-11: 45px fijo
  en todo breakpoint) se separó a su propio token
  `--font-size-heading-h2-experience` para no perder esa excepción.
  Efecto secundario esperado: los títulos de Servicios/Nuestros
  artistas/Preguntas frecuentes en mobile ahora son más chicos (20px en
  vez de 45px), más fieles al Figma — Experience sigue en 45px fijo y
  por eso ahora es el único que envuelve a 2 líneas en 320-360px
  ("NOSOTR/OS"), tradeoff ya existente de esa excepción, no algo nuevo.
- Hero mobile: título, párrafo intro de Services y botón Agendar ya
  estaban en su mínimo correcto ("Mobile propuesto": 25px/16px/14px) —
  no se tocaron.
- Gap entre el bloque de texto del Hero y el botón Agendar: estaba en
  `--spacing-120` (copiado del top del botón en Figma, 320px, sin
  restar el alto del bloque de texto) en vez de los ~23px reales.
  Corregido a `--spacing-24`. El offset superior (198px) ya era
  correcto.
- Alto del Hero mobile: `--hero-min-height` se aplicaba también en
  mobile (pensado solo para el piso desktop). Su extremo inferior
  (508px) es más alto que el que da el aspect-ratio bajo 390px de
  viewport, y un elemento no-reemplazado con aspect-ratio + esa altura
  forzada recalcula el ANCHO para mantener la proporción — el `.hero`
  quedaba fijo en 390px de ancho aunque el viewport fuera 320-375px,
  desbordando la página horizontalmente. Corregido: `min-height` se
  movió al media query desktop (`≥1025px`), donde sí corresponde.
- De paso, mismo tipo de bug de desborde real encontrado en
  `.benefits__list` (`grid-template-columns: repeat(2, 1fr)`): una
  palabra larga sin espacios en una Benefit Card empujaba esa columna
  más ancha que su 50% ("grid blowout"), desbordando ~3px a 320px.
  Corregido a `repeat(2, minmax(0, 1fr))`.
- Verificado sin overflow horizontal a 320/360/390/430px (medido por
  script, no solo visual) tras los cambios de arriba.
- Logo del header: sacado `loading="lazy"` (es above-the-fold).
- Service Card 5-7 (sin foto) comentadas en el HTML con nota para
  reactivar cuando lleguen las fotos — el carrusel queda con las 4
  completas.
- Agregado `icono-horario.svg` junto a "Horario Disponible:" del
  footer, mismo patrón que los demás íconos de contacto (10px mobile /
  32px desktop, tokens ya existentes).

**2026-09-17** — SEO técnico y accesibilidad de HOME:
- Hero reestructurado con un `<h1>` real (la página no tenía ninguno):
  "Barbería" (GOOD BRUSH, accent) + "en Las Condes" (Montserrat,
  blanco, heading/h2) seguido de un `<p>` con el subtítulo — misma
  estructura en mobile y desktop, sin el toggle que tenía el markup
  anterior (`.hero__word` / `.hero__headline--mobile/--desktop`), ya
  innecesario gracias a la tipografía fluida.
- Service Card renombradas con los nombres exactos de Agenda Pro
  ("Corte de Cabello", "Corte de Cabello + Barba", "Perfilado de
  Barba", "Limpieza facial profunda") y descripciones ajustadas al
  copy real de cada servicio en Agenda Pro (verificado navegando el
  booking en `barberiacutsandfriends.site.agendapro.com`). "Perfilado
  de Barba" no tiene descripción propia ahí — se adaptó del tramo
  "Barba" de "Corte de Cabello + Barba", con nota en el HTML.
- Header mobile: la dirección en texto (2-3 líneas) se reemplazó por
  `icono-ubicacion.svg` enlazado a Google Maps, dentro de un
  contenedor `.site-header__location` preparado para sumar Waze
  después. Desktop mantiene el texto, ahora también enlazado.
- `<head>`: title/description con largo verificado, Open Graph y
  Twitter Card completos (imagen y dimensiones reales de
  `imagen-open-graph.png`, 2400×1260), favicon negro/blanco por
  `prefers-color-scheme` + apple-touch-icon, `lang="es-CL"`, y
  canonical dejado comentado con TODO para el cutover. Agregado JSON-LD
  `BarberShop` con dirección, teléfono, horario, `sameAs`, `hasMap` y
  `potentialAction` (ReserveAction → Agenda Pro) — sin
  `aggregateRating` (no permitido por Google) y sin horarios de
  feriados (se manejan en Google Business Profile).
- Alt text de fotos de Servicios y Galería reescritos para describir
  la acción real de cada foto (ej. "Barbero perfilando el degradado en
  la nuca con máquina") en vez de texto genérico.
- Verificado: un solo `<h1>` en toda la página, sin saltos de nivel
  (h1 → h2 de sección → h3 de tarjeta/nombre). Probado en navegador
  (390px y ~1600px) sin errores de consola.
