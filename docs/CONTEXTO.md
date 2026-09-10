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

## Alcance real

No es solo una landing page. El archivo de Figma contiene, en versión
desktop y mobile:

- HOME
- CONTACTO
- BLOG HOME (3 variantes)
- Plantillas de BLOG POST (hasta 7 variantes)

La existencia de un blog implica usar el **Theme Builder de Elementor
Pro** para las plantillas de entrada, header y footer. La versión
gratuita de Elementor no permite construir plantillas de blog post.

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
- **DKIM: no publicado** (verificado con TXT lookup sobre
  `google._domainkey.cutsandfriends.cl`).
- **DMARC: no publicado.**

### Hosting del staging
- Webempresa, hosting propio de la agencia. cPanel con acceso SSH.
- El staging vive en un subdominio de la agencia, no en el dominio
  del cliente y no en Wix.

### Agenda
- Usan **Agenda Pro**, integrada al sitio mediante un **iframe**.
- No usan Wix Bookings, así que la agenda no se pierde al migrar.
- Riesgo a validar temprano: algunos proveedores restringen el embed
  por lista blanca de dominios.

### Diseño
- Figma con asiento Full pagado. MCP remoto disponible
  (`https://mcp.figma.com/mcp`), se conecta desde Cursor o Claude Code.

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
- Respuestas concisas y accionables. Si falta un dato para avanzar,
  preguntarlo en vez de asumirlo.

## Hitos

Sin fechas fijas. Cada hito tiene un criterio de salida; no se avanza
al siguiente hasta cumplirlo.

**H1 — Staging operativo**
Subdominio creado con SSL. WordPress instalado. Noindex y contraseña
activos. Hello Elementor + Elementor Pro instalados.
*Salida:* WP-admin accesible por HTTPS.

**H2 — Riesgo del iframe despejado**
Agenda Pro embebida en una página de prueba del staging, funcionando y
revisada en móvil.
*Salida:* agenda operativa fuera de Wix. Si falla, se resuelve antes de
maquetar.

**H3 — Zona DNS asegurada**
Export completo de la zona actual. Migración de nameservers a
Cloudflare replicando todo: A, CNAME, MX, SPF, verificación de Google.
*Salida:* DNS fuera de Wix, con sitio y correo funcionando igual que
antes.

**H4 — Maquetación**
Header, footer, HOME, CONTACTO, BLOG HOME y plantilla de BLOG POST
construidos desde Figma. Responsive en desktop y mobile.
*Salida:* paridad con el diseño.

**H5 — Inventario y redirecciones**
Crawl del Wix actual: URLs, textos, imágenes en tamaño original,
metadatos. Mapa de redirecciones 301 cargado en el sitio nuevo.
*Salida:* nada del sitio viejo se pierde en la migración.

**H6 — Medición**
GA4 y GTM instalados. Evento de conversión sobre el clic hacia la
agenda — el iframe no reporta por sí solo.
*Salida:* conversiones registrando en staging.

**H7 — Aprobación**
Revisión del cliente sobre el staging, con aprobación por escrito.

**H8 — Cutover**
Cambio del registro A al servidor nuevo. Redirecciones activas. MX
intactos. Google Business Profile revisado y consistente.
*Salida:* sitio nuevo en el dominio, correo funcionando, sin 404s.

## Pendientes post-lanzamiento

- Publicar DKIM en Google Workspace.
- Endurecer SPF (hoy en `~all`).
- Implementar DMARC.
- Optimización de Google Business Profile (crítico para una barbería
  local, más que el sitio mismo).
