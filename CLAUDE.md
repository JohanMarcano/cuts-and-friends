# Cuts And Friends — instrucciones del repo

Migración del sitio de la barbería Cuts And Friends (cutsandfriends.cl)
desde Wix a WordPress + Elementor, sobre un diseño ya aprobado en Figma.
Cliente de Shopbot Agency. El proyecto está atrasado: la prioridad es
desbloquear y avanzar, no ampliar alcance ni rediscutir diseño.

## Qué es este repo

No contiene el sitio WordPress. Es el repo de operaciones de la
migración: respaldos de zona DNS, inventario del sitio viejo, mapa de
redirecciones, scripts de crawl, notas de tokens de Figma y la
documentación del proyecto.

Estructura actual (lo demás — `dns/`, `crawl/`, `redirects/`,
`scripts/` — todavía no se creó; no asumir que existe):

```
docs/      CONTEXTO.md, ESTADO.md, tokens de diseño, guía de Elementor
```

## Estado del proyecto

El estado real vive en `docs/ESTADO.md`. Al empezar cualquier sesión,
léelo antes de proponer nada. Al cerrar, entrega el bloque actualizado
para pegar.

El plan por hitos está en `docs/CONTEXTO.md`. Cada hito tiene criterio
de salida; no se avanza al siguiente sin cumplirlo.

## Alcance

Fase 1 es **solo HOME**. CONTACTO está fuera del proyecto (no se
maqueta, no se estima, no se menciona como pendiente de esta fase). El
blog (BLOG HOME, BLOG POST) es fase 2, a futuro.

## Fuente de verdad del diseño

- `docs/design-tokens.md` — tokens extraídos del sistema
  "01 · Foundations" del Figma (Variables + Estilos nombrados). Es la
  fuente autoritativa de colores, tipografía y espaciado.
- `docs/elementor-setup.md` — guía de carga de esos tokens como
  estilos globales en Elementor.
- Los archivos con sufijo `-v1` o `-OBSOLETO` son históricos. **No
  usarlos ni citarlos como referencia** — quedaron desactualizados por
  cambios posteriores en el Figma o en el enfoque.
- El Figma tiene páginas antiguas ("CUTS&FRIENDS DESKTOP" y
  "CUTS&FRIENDS MOBILE") que ya no aplican. Los frames vigentes están
  en "01 · Foundations", "02 · Components" y "03 · Landing".

## Reglas duras

- **Nunca proponer cambios sobre producción** — el Wix actual o el DNS
  vivo — sin confirmación explícita de Johan.
- **No cancelar el plan de Wix** hasta después del cutover. La zona DNS
  todavía vive en `ns2.wixdns.net` / `ns3.wixdns.net`.
- Antes de tocar DNS, verificar que existe el export completo de la zona
  actual en `dns/`.
- El staging va siempre con **noindex y protección por contraseña**.
- Sin secretos en el repo: credenciales de cPanel, Cloudflare, Google
  Workspace o Agenda Pro no se commitean nunca.
- Los tamaños de texto mobile del Figma son ilegibles en varios
  estilos (body 9px, button 11px). Al maquetar se usan los valores de
  la columna "Mobile propuesto" de `docs/elementor-setup.md`, no los
  del Figma.
- Al maquetar en Elementor, aplicar siempre estilos globales en los
  widgets, nunca valores escritos a mano.

## Datos de infraestructura

| Dato | Valor |
|---|---|
| Registrador | NIC Chile (`.cl`), no Wix |
| Nameservers actuales | ns2.wixdns.net / ns3.wixdns.net |
| A del dominio raíz | 185.230.63.107 / .171 / .186 (Wix) |
| www | CNAME cdn3.wixdns.net |
| Correo | Google Workspace (MX a aspmx.l.google.com) |
| SPF | `v=spf1 include:_spf.google.com ~all` |
| DKIM / DMARC | No publicados |
| Agenda | Agenda Pro, embebida por iframe |
| Hosting staging | Webempresa, cPanel + SSH |

El correo no depende de Wix. Los MX no se tocan en el cutover.

## Estilo de trabajo

- Respuestas concisas y accionables. Si falta un dato para avanzar,
  preguntarlo en vez de asumirlo.
- Comandos destructivos o que tocan servicios externos: mostrarlos
  primero, ejecutarlos después de confirmación.
- Escribir en español.

---

## ⚠️ Prueba en curso — sitio estático (2026-09-11)

Todo lo que este archivo dice sobre Elementor, WordPress y PHP queda
**en pausa** mientras dure esta prueba. No lo apliques.

Se está evaluando construir el sitio como HTML, CSS y JS planos en
`src/`, desplegado a Vercel desde GitHub. Sin PHP, sin WordPress, sin
frameworks, sin paso de build, sin Elementor.

Alcance de la prueba: header, hero y carrusel de Services, más el
popup de Agenda Pro. Si funciona, el proyecto sigue por esta vía. Si
no, se vuelve a Elementor y esta sección se borra. La documentación de
`docs/` sirve para ambas rutas y no cambia.

### Estructura

    src/                        ← Root Directory en Vercel
    ├── index.html
    ├── robots.txt
    └── assets/
        ├── css/
        │   ├── tokens.css
        │   ├── base.css
        │   ├── components/
        │   └── sections/
        ├── js/
        ├── fonts/
        ├── img/
        └── vendor/swiper/

### Reglas no negociables

- Mobile-first. Los estilos base son el layout de 390px.
  Desktop entra solo en `@media (min-width: 1025px)` (bajado de 1200px,
  2026-09-14: el sistema fluido de abajo permite el cambio). Entre
  768px y 1024px el layout sigue siendo el mobile, pero con
  `.container` limitado a 600px y centrado.
- Sistema fluido (2026-09-14): nada de medidas fijas por breakpoint
  salvo la excepción explícita de "espaciados chicos" más abajo.
  - Tamaños de fuente: `clamp(mínimo, preferido en vw, máximo)`, en
    `rem` en los dos extremos (nunca `px`) — mínimo = valor mobile a
    390px (con la corrección de legibilidad de "Mobile propuesto"
    donde aplica), máximo = valor Figma a 1920px. Sin override de
    font-size dentro del media query desktop.
  - Anchos de tarjeta (Service Card, Team Card), fotos (Gallery, Team,
    Hero) y altos de sección (Hero, Experience) fluidos vía
    `aspect-ratio`, `%` del contenedor o `clamp()` — nunca un ancho o
    alto fijo por breakpoint, y nunca `vh` (depende del alto de
    ventana, no del ancho: deforma fotos en pantallas bajas y las hace
    saltar en mobile cuando aparece/desaparece la barra del
    navegador).
  - Espaciados chicos (paddings internos, gaps de texto) sí pueden
    quedar en valor fijo — no forman parte de este sistema.
- Ningún color, tamaño, peso, tracking ni espaciado literal fuera de
  `assets/css/tokens.css`. Todo se consume con `var(--...)`.
- Un componente de `docs/componentes.md` = un CSS en
  `assets/css/components/`. Una sección de `docs/home-estructura.md`
  = un CSS en `assets/css/sections/` y un bloque en `index.html`
  delimitado por comentarios `<!-- SECCIÓN: nombre -->`.
- Clases BEM con el nombre del componente (`.service-card__title`).
- Los textos van inline en el HTML, nunca generados por JS.
- Todo botón de conversión lleva `data-track="agenda"` o
  `data-track="whatsapp"`.
- HTML semántico y accesible: landmarks, foco visible, `aria-expanded`
  en acordeón y menú, `alt` real en las imágenes.
- El CSS se carga por archivos separados con `<link>`, en orden:
  tokens, base, components, sections. Sin `@import`.
- No inventes valores que no estén en la documentación. Si falta un
  dato, preguntá antes de asumir.