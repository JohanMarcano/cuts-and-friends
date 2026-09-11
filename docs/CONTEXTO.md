# Cuts And Friends — Contexto del proyecto

## Cliente

Barbería ubicada en Las Condes, Santiago (Av. Apoquindo 6314, of 302).
Cliente de Shopbot Agency.
Dominio: **cutsandfriends.cl**

## Objetivo

Sacar el sitio de Wix y reemplazarlo por un sitio nuevo en WordPress,
construido con Elementor sobre un diseño ya aprobado en Figma.
El desarrollo ocurre en un staging propio y el dominio se apunta al
servidor nuevo solo cuando el cliente aprueba.

**El proyecto está atrasado respecto de la fecha comprometida.**
La prioridad es desbloquear y avanzar, no ampliar el alcance ni
rediscutir el diseño.

## Alcance por fases

El alcance se acotó el 2026-09-11 para desbloquear la aprobación del
cliente.

### Fase 1 — lo que se construye ahora

- Header y footer (Theme Builder de Elementor Pro)
- **HOME**, desktop y mobile

Con HOME se pide la aprobación del cliente (H7). No se maqueta nada
más hasta tenerla.

### Fase 2 — después de la aprobación

- BLOG HOME
- Plantilla de BLOG POST

El blog requiere el **Theme Builder de Elementor Pro** para las
plantillas de entrada. La versión gratuita no lo permite.

### Fuera de alcance

- **Página de CONTACTO.** Se elimina definitivamente. La conversión va
  por el embed de Agenda Pro y por el botón de WhatsApp.

**Consecuencia:** sin página de contacto, toda la conversión del sitio
depende de dos elementos. El botón de WhatsApp debe quedar flotante y
visible durante todo el scroll, no solo como enlace del header.

## Infraestructura confirmada

### Dominio y DNS
- Dominio `.cl`, registrado en **NIC Chile** (no en Wix).
  No hay transferencia de dominio ni candado de 60 días involucrados.
- Zona DNS administrada por Wix: nameservers `ns2.wixdns.net` y
  `ns3.wixdns.net`.
- Registros A del dominio raíz apuntan a IPs de Wix
  (185.230.63.107 / .171 / .186).
- `www` resuelve por el CDN de Wix sobre Cloudflare
  (CNAME `cdn3.wixdns.net`).

### Correo
- **Google Workspace.** MX apuntan a `aspmx.l.google.com` y los
  `alt1`–`alt4`. El correo no depende de Wix.
- SPF: `v=spf1 include:_spf.google.com ~all`
- Existe un TXT de `google-site-verification`.
- **DKIM: no publicado.**
- **DMARC: no publicado.**

### Hosting del staging
- Webempresa, hosting propio de la agencia. Cuenta `pecesyma`,
  plan WordPress Talla L 10gb.
- **Sin acceso SSH.** El plan no lo incluye; requiere Talla XL o
  superior. Por lo tanto **no hay WP-CLI disponible**: el
  `search-replace` del cutover se hará con el plugin Better Search
  Replace desde wp-admin.
- El staging vive en `cuts.shopbotagency.com`, subdominio de la
  agencia. No en el dominio del cliente y no en Wix.

### Agenda
- Usan **Agenda Pro**, integrada mediante un **iframe**.
- No usan Wix Bookings, así que la agenda no se pierde al migrar.
- **Riesgo de lista blanca descartado.** El embed se probó en el
  staging y funciona, verificado en incógnito.
- El código que entrega Agenda Pro trae `width="810"` fijo y
  `scrolling="yes"`. Al maquetar hay que envolverlo en un contenedor
  con `width:100%` y alto controlado por breakpoint: el iframe no
  puede autoajustar su alto por ser de otro dominio.

### Diseño
- Figma con asiento Full pagado. MCP remoto conectado en Claude Code
  vía el plugin oficial `figma@claude-plugins-official`.
- Diseñadora principal: **Agustina Hassenrück**.
- Los frames definitivos viven en la página **"03 landings"** del
  archivo CUT&FRIENDS. Agustina rehizo el archivo el 2026-09-11
  normalizando colores y tipografías.
- Fuente decorativa **GOOD_BRUSH**: archivo recibido, licencia libre
  con donación opcional. Se sube en Elementor → Fuentes personalizadas
  (wp-admin, no dentro del editor). Es función exclusiva de Pro.
- Los tokens extraídos viven en `docs/design-tokens.md`. La lista
  depurada que se carga en Elementor está en
  `docs/estilos-globales-elementor.md`.

### Equipo de trabajo
- MacBook Air M1 (8 GB), dedicada al trabajo de agencia.
- Instalado: Homebrew, git, node, Cursor, Claude Code (nativo, por
  Homebrew).
- Repo local del proyecto: `~/shopbot-ops/cuts-and-friends`

## Reglas de trabajo

- El estado real del proyecto vive en `ESTADO.md` dentro de la carpeta
  del proyecto, no en el historial de chat. Al iniciar una sesión,
  pedir ese archivo si no está en contexto.
- Al cerrar una sesión de trabajo, entregar el bloque actualizado de
  `ESTADO.md` para pegarlo.
- **Nunca proponer cambios sobre producción** (el Wix actual o el DNS)
  sin confirmación explícita de Johan.
- **No cancelar el plan de Wix** hasta después del cutover: la zona DNS
  todavía vive ahí.
- El staging va siempre con **noindex y protección por contraseña**.
- Antes de tocar DNS, verificar que existe el export completo de la
  zona actual.
- **Al maquetar, aplicar siempre los estilos globales de Elementor en
  cada widget**, nunca tamaños ni colores escritos a mano. Es lo que
  permite ajustar el sitio entero desde un solo lugar.
- Respuestas concisas y accionables. Si falta un dato para avanzar,
  preguntarlo en vez de asumirlo.

## Hitos

Sin fechas fijas. Cada hito tiene un criterio de salida; no se avanza
al siguiente hasta cumplirlo.

**H1 — Staging operativo** ✅ *cerrado 2026-09-09*
Subdominio creado con SSL. WordPress instalado. Noindex y contraseña
activos. Hello Elementor + Elementor Pro instalados.
*Salida:* WP-admin accesible por HTTPS.

**H2 — Riesgo del iframe despejado** ✅ *cerrado 2026-09-11*
Agenda Pro embebida en una página de prueba del staging, funcionando y
verificada en incógnito.
*Salida:* agenda operativa fuera de Wix.

**H3 — Zona DNS asegurada**
Export completo de la zona actual. Migración de nameservers a
Cloudflare replicando todo: A, CNAME, MX, SPF, verificación de Google.
*Salida:* DNS fuera de Wix, con sitio y correo funcionando igual que
antes.
*Nota:* H3 no bloquea H4. Corre en paralelo, pero debe estar cerrado
antes de H8.

**H4 — Maquetación (fase 1)**
Estilos globales cargados. Header, footer y HOME construidos desde
Figma. Responsive en desktop y mobile.
*Salida:* paridad con el diseño de HOME.

**H5 — Inventario y redirecciones**
Crawl del Wix actual: URLs, textos, imágenes en tamaño original,
metadatos. Mapa de redirecciones 301 cargado en el sitio nuevo.
*Salida:* nada del sitio viejo se pierde en la migración.

**H6 — Medición**
GA4 y GTM instalados. Evento de conversión sobre el clic hacia la
agenda y sobre el botón de WhatsApp — el iframe no reporta por sí
solo.
*Salida:* conversiones registrando en staging.

**H7 — Aprobación**
Revisión del cliente sobre HOME en el staging, con aprobación por
escrito.
*Nota:* al presentarlo, dejar explícito que es la fase 1 y que el blog
viene después. Si el cliente espera el sitio completo, un avance de
una página se lee como retraso.

**H8 — Cutover**
Cambio del registro A al servidor nuevo. Redirecciones activas. MX
intactos. Google Business Profile revisado y consistente.
*Salida:* sitio nuevo en el dominio, correo funcionando, sin 404s.

**H9 — Blog (fase 2)**
BLOG HOME y plantilla de BLOG POST con el Theme Builder.
*Salida:* el cliente puede publicar entradas.

## Pendientes post-lanzamiento

- Publicar DKIM en Google Workspace.
- Endurecer SPF (hoy en `~all`).
- Implementar DMARC.
- Optimización de Google Business Profile (crítico para una barbería
  local, más que el sitio mismo).
