# Cuts And Friends — Estado

**Hito actual:** H2 — Riesgo del iframe despejado
**Última actualización:** 2026-09-09

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
- Figma: archivo CUT&FRIENDS movido del equipo SHOPBOT 9 (Free) al
  equipo SHOPBOT (Professional), proyecto "Cuts". Asiento Full
  confirmado.
- MCP de Figma conectado en Claude Code vía el plugin oficial
  (`figma@claude-plugins-official`), instalado en user scope,
  41 herramientas disponibles.

## En curso

- H2: probar el embed de Agenda Pro en una página del staging.

## Bloqueado / esperando

- Credenciales de acceso a Agenda Pro para obtener el código de embed.
  Sin eso no se puede cerrar H2.
- Definir con el cliente quién queda como titular de la licencia de
  Elementor Pro y cómo se maneja la renovación anual.

## Decisiones tomadas

- WordPress + Elementor, no sitio estático. El cliente va a publicar
  contenido en el blog.
- Staging en `cuts.shopbotagency.com`, bajo el dominio de la agencia.
  Se descartó usar `staging.pecesymascotas.com` por colgar del dominio
  de otro cliente y tener restos de una instalación anterior.
- WordPress en la raíz del subdominio, sin `/wp`, para no arrastrar
  prefijos de URL al cutover.
- Elementor Pro plan Advanced. El primer año lo asume la agencia; la
  renovación queda a cargo del cliente.
- El dominio no se transfiere de registrador. Se migra la zona DNS a
  Cloudflare y luego se cambia solo el registro A.
- El crawl del sitio Wix se hace una vez que el staging esté corriendo.
- **No se usa MCP de WordPress.** El plugin de Automattic fue archivado
  en enero 2026, y la contraseña de directorio bloquearía la REST API
  de todos modos.
- **No se cambia de plan de hosting ahora.** Se revisa después del
  cierre del proyecto.

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
| Hosting staging | Webempresa, cuenta `pecesyma`, cPanel |
| URL del staging | `https://cuts.shopbotagency.com` |
| PHP del staging | 8.2 |
| Plan de hosting | WordPress Talla L 10gb, 208.48 USD/año |
| SSH | **No disponible** en el plan actual |

## Riesgos abiertos

- **No cancelar el plan de Wix hasta después del cutover.** La zona DNS
  todavía vive en sus nameservers.
- El iframe de Agenda Pro puede tener lista blanca de dominios. Al
  pedir la autorización, solicitar los dos dominios de una vez:
  `cuts.shopbotagency.com` y `cutsandfriends.cl`.
- **Sin SSH no hay WP-CLI.** El `search-replace` del cutover se hará
  con el plugin Better Search Replace, que maneja datos serializados
  y trae modo de simulación. Instalarlo recién en H8.
- La cuenta tiene un addon **PHP Legacy** y el sistema está en PHP 7.3.
  Identificar qué sitio lo necesita antes de cualquier cambio de plan.
- `staging.pecesymascotas.com` y los dos zips en `public_html` son
  restos de otros proyectos. No borrarlos hasta descargar el respaldo.
- Titularidad de la licencia de Elementor Pro sin definir con el
  cliente.

## Pendientes de la sesión

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
es Google Workspace y que no hay DKIM ni DMARC. Se confirma alcance
real del proyecto: incluye blog, no es solo landing.

**2026-09-09** — H1 cerrado. Staging levantado en
`cuts.shopbotagency.com` con SSL, WordPress, noindex, contraseña de
directorio, Hello Elementor y Elementor Pro Advanced con licencia
activa. Se resolvió un bloqueo de Softaculous por PHP 7.3 en el
subdominio. Archivo de Figma movido al equipo con plan Professional y
MCP de Figma conectado en Claude Code. Se descartó el MCP de WordPress.
Se confirmó que el plan de hosting actual no incluye SSH: el cutover
usará Better Search Replace en vez de WP-CLI. H2 queda bloqueado a la
espera del acceso a Agenda Pro.
