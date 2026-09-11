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

- Prueba de un día: construir header, hero y carrusel de Services
  como tema WordPress a medida, en vez de maquetar con Elementor.
  Si al final del día las tres secciones corren bien, el proyecto
  sigue por esa vía. Si no, se vuelve a Elementor sin pérdida: la
  documentación de diseño sirve para ambas rutas.

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
