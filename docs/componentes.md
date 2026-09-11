# Componentes — Figma "02 · Components"

Fuente: página **"02 · Components"** en
[Figma — CUT&FRIENDS](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=233-4),
sección "Cuts & Friends — Components". Extraído con el MCP de Figma
(`get_design_context` + `get_variable_defs`) el 2026-09-11.

Es documentación de especificación para maquetar en Elementor. **No
contiene código.** Los nombres de tokens citados son los mismos de
`docs/design-tokens.md` (colores, tipografía, espaciado). Cuando un
componente usa un valor o alias que no está en ese catálogo, queda
marcado con ⚠️ y explicado.

La mayoría de los frames de este archivo usan posicionamiento absoluto
(no auto-layout con padding declarado), así que los "paddings" de las
tablas de abajo son **medidas derivadas de la posición de las capas**,
no un valor de padding nativo de Figma. Al maquetar en Elementor hay
que traducirlos a paddings/márgenes reales, aproximando a la escala de
`spacing/*` cuando sea razonable.

## Índice

1. [Botón (Button)](#1-botón-button)
2. [Service Card](#2-service-card)
3. [Team Card](#3-team-card)
4. [Benefit Card](#4-benefit-card)
5. [FAQ Item (acordeón)](#5-faq-item-acordeón)
6. [CTA WhatsApp](#6-cta-whatsapp)
7. [Logo](#7-logo)
8. [Menu Button](#8-menu-button)
9. [Header](#9-header)
10. [Footer](#10-footer)
11. [Colores y estilos de texto no catalogados](#11-colores-y-estilos-de-texto-no-catalogados)
12. [Pendientes con la diseñadora](#12-pendientes-con-la-diseñadora)

---

## 1. Botón (Button)

Nodo: `243:699`. Variantes por propiedades `Breakpoint` × `Label`.

| Variante | Dimensiones | Existe |
|---|---|---|
| Desktop, Label=Agendar | 297 × 61 px | Sí |
| Mobile, Label=Agendar | 146 × 30 px | Sí |
| Mobile, Label=Reserva Online | 161 × 30 px | Sí |
| Desktop, Label=Reserva Online | — | **No existe** ⚠️ (ver pendiente 1) |

No hay variantes de estado (hover/active/disabled) documentadas en el
archivo — Elementor tendrá que resolver el hover con su estilo por
defecto o definirlo a criterio propio.

### Specs

| Propiedad | Desktop / Agendar | Mobile / Agendar | Mobile / Reserva Online |
|---|---|---|---|
| Fondo | `bg/accent` (#3EA69B) | `bg/accent` | `bg/accent` |
| Radio de borde | `30.5px` literal — **no** ligado a `radius/full`, aunque visualmente equivale a un pill (30.5 = mitad de la altura 61px) ⚠️ | `radius/full` (999px), sí ligado a variable | `radius/full`, ligado a variable |
| Texto | "AGENDAR" | "AGENDAR" | "RESERVA ONLINE" |
| Tipografía | `button/md` (Bold 700, 21px, tracking 23% = 4.83px, uppercase) | `button/md` mobile (Bold 700, 11px, tracking 2.53px) | ⚠️ 10px Bold, tracking 23% (2.3px) — catalogado internamente como "body/lg" mobile, pero `body/lg` en `design-tokens.md` es Regular sin tracking. Es una desviación del token, no un uso limpio |
| Color de texto | `text/default` (blanco) | `text/default` | `text/default` |
| Alineación | Centrado | Centrado | Centrado |

Nota de legibilidad: `elementor-setup.md` recomienda subir `button/md`
mobile de 11px a **14px** ("Mobile propuesto") — aplica directo a la
variante Mobile/Agendar.

---

## 2. Service Card

Nodo: `234:3291`. Variantes por `Service` (Corte, Cabello + Barba,
Barba, Facial) × `Breakpoint` (Desktop, Mobile).

⚠️ Matriz incompleta: **Mobile solo existe para "Corte" y "Barba"**.
Faltan las variantes mobile de "Cabello + Barba" y "Facial" (ver
pendiente 2).

Estructura: imagen de fondo a sangre (`object-cover`, cubre toda la
tarjeta) + título y descripción superpuestos en la mitad inferior.

### Specs — Desktop (350 × 551 px, las 4 variantes)

| Elemento | Especificación |
|---|---|
| Imagen | Cubre 100% de la tarjeta (350 × 551), `object-fit: cover` |
| Radio de borde | Sin radius visible en el nodo (consistente con `radius/none`) |
| Título | Tipografía `label/md` (Bold 700, 20px, uppercase, tracking 23% = 4.6px), color `text/default`, centrado, ancho ~270-330px, ubicado a ~377px desde arriba |
| Descripción | Tipografía `body/sm` (Regular 400, 18px, line-height 28px, 0% tracking), color `text/default`, centrado, ancho ~280-330px, debajo del título |
| Overlay oscuro | No se encontró una capa de overlay separada sobre la imagen (`overlay/image`) — las fotos ya vienen en blanco y negro/oscuras. Confirmar si falta aplicar el overlay o si es intencional |

### Specs — Mobile (Corte 339×534, Barba 356×534)

| Elemento | Especificación |
|---|---|
| Título | 17px Bold, uppercase, tracking 23% = 3.91px. El tamaño coincide con `label/lg` mobile (17px), pero el peso del token base `label/lg` es SemiBold (600) y acá es Bold (700) ⚠️ mismatch de peso |
| Descripción | 12px Regular, line-height 17px. ⚠️ No coincide con ningún tamaño mobile catalogado (`body/sm` mobile = 8px, `body/md` mobile = 9px / alt-2 = 16px) — valor suelto de 12px |

---

## 3. Team Card

Nodo: `234:3359`. Variantes por `Member` (Miguel Linares, Natalia
Pino, Diego Cignoni) × `Breakpoint` (Desktop, Mobile). Matriz completa
(6 de 6).

### Specs — Desktop (488 × 841 px)

| Elemento | Especificación |
|---|---|
| Foto | 488 × 704 px, en la parte superior de la tarjeta |
| Nombre | Superpuesto bajo la foto, tipografía `label/lg` (SemiBold 600, 24px, uppercase, tracking 23% = 5.52px), color `text/default`, centrado |
| Botón "AGENDAR" | Pill 297 × 61 px, fondo `bg/accent`, radio **30.5px literal** (mismo caso que el Botón Desktop, no ligado a `radius/full` ⚠️), texto `button/md` (21px Bold, tracking 4.83px), color `text/default` |
| Ícono redes (Instagram) | Círculo `icon-background` 60 × 60 px junto al botón, glifo interior 38 × 38 px |

### Specs — Mobile (342 × 603-610 px)

| Elemento | Especificación |
|---|---|
| Foto | ~342 × 492-493 px |
| Nombre | `label/lg` mobile (SemiBold 600, 17px, uppercase, tracking 23% = 3.91px) — **coincide correctamente** con el catálogo, sin mismatch de peso (a diferencia del título de Service Card mobile) |
| Botón "AGENDAR" | Reutiliza el componente Button (Breakpoint=Mobile, Label=Agendar): 146 × 30 px, `bg/accent`, `radius/full` |
| Ícono redes | Círculo 29 × 30 px |

---

## 4. Benefit Card

Nodo: `234:3426`. Variantes por `Benefit` (Personalized, Professional,
Friendly, Trends) × `Breakpoint` (Desktop, Mobile). Matriz completa (8
de 8).

### Specs — Desktop (341-343 × 357 px)

| Elemento | Especificación |
|---|---|
| Fondo/borde propio | Ninguno — la tarjeta es solo ícono + texto, flotando sobre el fondo de la sección |
| Ícono | Line-art, 134 × 134 px, arriba centrado |
| Título | Tipografía `label/lg` (SemiBold 600, 24px, uppercase, tracking 23% = 5.52px). Color **`text/subtle`** (#D9D9D9) — ⚠️ alias no documentado en `design-tokens.md` (ver sección 11) |
| Descripción | `body/md` (Regular 400, 20px, line-height 30px), color `text/default`, ancho ~305-332px centrado |

### Specs — Mobile (143-220 × 148-177 px)

| Elemento | Especificación |
|---|---|
| Ícono | 70 × 70 px |
| Título | 13px SemiBold, uppercase, tracking 23% = 2.99px — coincide con `label/md` mobile (13px, ver `elementor-setup.md`). Mismo color `text/subtle` |
| Descripción | 11px Regular, line-height 15px. ⚠️ `design-tokens.md` documenta `body/sm` mobile = 8px; acá el valor real del nodo es 11px — discrepancia con la tabla Responsive |

---

## 5. FAQ Item (acordeón)

Nodo: `234:3509`. Variantes por `State` (Open, Closed) × `Item` (1-6)
× `Breakpoint` (Desktop, Mobile).

⚠️ Matriz incompleta / asimétrica — normal para un componente de
acordeón, pero a validar:
- **Desktop**: solo hay ejemplos de `Open` para los items 1 y 2, y
  `Closed` para los items 3, 4, 5 y 6. No existe ningún item con ambos
  estados documentados.
- **Mobile**: las 6 variantes existentes están **todas en estado
  `Closed`**. No hay ninguna variante `Open` en mobile (ver pendiente
  3).

### Specs — Desktop, estado Closed (735 × 103-104 px)

| Elemento | Especificación |
|---|---|
| Contenedor | Fondo `bg/default` (negro), borde 1px solid `border/default` (blanco), sin radio (`radius/none`) |
| Pregunta | Tipografía **`label/md/alt-faq`** (SemiBold 600, tamaño ligado a la variable `typography/label/md/alt-faq/font-size` = 21px desktop), uppercase, tracking 23% = 4.83px, color `text/default`. Padding izquierdo ~22-30px |
| Ícono +/− | Círculo `icon-background` 42.485 × 42.485 px a la derecha (~30px del borde), signo "+" 32px SemiBold centrado. **No existe un ícono/estado visual distinto para "abierto" (−/×)** — se debe simular con rotación CSS del mismo signo "+" (ver pendiente 4) |

### Specs — Desktop, estado Open (735 × 180 px, items 1-2)

Igual que Closed en fondo/borde/ícono, más:

| Elemento | Especificación |
|---|---|
| Respuesta | Tipografía 20px Regular, line-height 32px. El tamaño (20px) coincide con `body/md`, pero el line-height (32) coincide con `body/md/alt-2`, no con el `body/md` base (line-height 30) ⚠️. Color `text/default`, ancho ~654px, aparece ~112px desde el borde superior del ítem |

### Specs — Mobile, estado Closed (331-335 × 48 px)

| Elemento | Especificación |
|---|---|
| Contenedor | Mismo fondo/borde que desktop, **excepto el Item 6**, que no tiene fondo/borde dibujado en el nodo — parece inconsistencia del archivo, a confirmar |
| Pregunta | ⚠️ Estilo interno **"label/md/alt-2" mobile** (SemiBold 600, 10px, uppercase, tracking 23% = 2.3px) — este nombre **no aparece** en el catálogo de 18 estilos de `design-tokens.md` (que solo lista `label/md` sin variante `alt-2`) |
| Ícono +/− | Mismo círculo pero a 19.423 × 19.423 px, signo "+" a 10px |

### Nota de implementación en Elementor

Usar el widget nativo **Accordion** de Elementor Pro: fondo/borde en
"Item Style", tipografía de la pregunta con el estilo global
`label/md` (más el override puntual a 21px/10px según breakpoint, ya
que `label/md/alt-faq` y `label/md/alt-2` no se cargan como globales
per `elementor-setup.md`), e ícono +/− configurado en las opciones del
widget (Elementor soporta ícono + rotación en el estado activo,
resolviendo la falta de un asset visual "−" propio).

---

## 6. CTA WhatsApp

Nodo: `234:4353`. Ícono standalone, 32 × 32 px, SVG. Enlaza a
`https://wa.me/56974291678` (coincide con el teléfono
`+569 742 91 678` mostrado en Header y Footer). Sin variantes de
tamaño ni color en este frame — un solo tamaño documentado. Se usa
dentro del Footer (ver sección 10).

---

## 7. Logo

Frame `243:758`, variantes Desktop (154 × 160 px) y Mobile (82 × 86
px). ⚠️ Inconsistencia detectada: la instancia real usada dentro del
Header mobile mide **41 × 43 px**, más chica que el símbolo "Logo /
Mobile" catalogado en este frame (82 × 86 px) — confirmar cuál es el
tamaño definitivo (ver pendiente 5).

Además existen otros dos assets de logo, usados solo en el Footer y
con proporciones distintas a este frame:
- Footer Desktop: 290 × 294 px (`logo cuts footer 1`)
- Footer Mobile: 55 × 67 px (`logo cuts footer 1`, versión chica)

En total hay **3 variantes de tamaño/asset de logo** en el archivo sin
una relación de escala 1:1 entre ellas — a confirmar con la
diseñadora si son variantes intencionales por contexto (header vs.
footer) o un descuido.

---

## 8. Menu Button

Nodo `243:2532`. 44 × 44 px, target táctil del menú hamburguesa
mobile, ícono interior 22 × 22 px centrado. Según la descripción del
componente en Figma: "Opens Menu mobile as a full-screen overlay;
close action is provided by the X" — es decir, se espera un ícono "X"
para cerrar, pero **no hay una variante separada documentada para ese
estado** (ver pendiente 4, mismo patrón que el ícono +/− del FAQ).

---

## 9. Header

Nodo `243:1104`. No es un componente atómico sino una sección
compuesta reutilizada en todo el sitio (Desktop 1920 × 320 px, Mobile
390 × 150 px).

### Desktop — dos franjas

| Franja | Especificación |
|---|---|
| Barra superior (71px alto) | Fondo **`bg/muted`** (#8E918E) — ⚠️ alias no documentado en `design-tokens.md` (ver sección 11). Contiene dirección y teléfono en `body/lg` (Regular 400, 24px, sin tracking — coincide exacto con el token), color `text/default`, y 5 íconos de contacto/redes de 32 × 32 px alineados a la derecha |
| Nav principal | 4 links de texto ("Barbería/Servicios", "Galería", "Barberos", "Blog") a **28px Regular** — ⚠️ valor suelto, no coincide con ningún estilo catalogado (no es `heading/h2`, que es Bold 45px). Color `text/default`. Logo centrado (154 × 160 px) sobre el nav |

Nota de alcance: el link **"Blog" está en el nav** aunque el blog es
Fase 2 según `CLAUDE.md`. Confirmar con Johan si en Fase 1 el link
queda oculto, deshabilitado o apuntando a un placeholder.

### Mobile (390 × 150 px)

Logo pequeño (41 × 43 px, ver flag de la sección 7), botón hamburguesa
44 × 44 px a la derecha, franja superior con dirección y teléfono en
**`body/sm/alt-2`** (Regular 400, 8px — confirmado como estilo real
vía `get_variable_defs`) e íconos de redes en miniatura (~10px).
⚠️ 8px es justo el tamaño "ilegible" que `CLAUDE.md` pide subir usando
la columna "Mobile propuesto" de `elementor-setup.md` (mínimo 16px
body) — aplica directo a esta franja de contacto.

---

## 10. Footer

Nodo `243:1578`. Desktop 1920 × 473 px, Mobile 390 × 296 px.

### Desktop

| Elemento | Especificación |
|---|---|
| Fondo | Imagen a sangre 1920 × 473 px |
| Logo | 290 × 294 px |
| Nav | Mismos 4 links que el Header, mismo token suelto de 28px Regular ⚠️ |
| Horario | Título "Horario Disponible:" en 28px Regular (mismo valor suelto); horarios ("Lu - Vi: 10am - 7:30pm", "Sá: 11am - 5:30pm") en **24px Light** — ⚠️ el peso Light solo existe en la escala documentada dentro de `heading/h1/alt-2` (Light 300, pero a 77px) — a este tamaño (24px) no hay ningún estilo catalogado con peso Light |
| Dirección | 24px Regular — coincide con `body/lg` |
| Íconos de contacto/redes | 5 íconos de 32 × 32 px, en dos filas (ubicación + CTA WhatsApp arriba, resto abajo) |

### Mobile

Mismo contenido reescalado: horario 11px/10px, dirección 10px, nav
10px, íconos ~10 × 10 px.

---

## 11. Colores y estilos de texto no catalogados

### Colores nuevos (no están en `docs/design-tokens.md`)

| Alias | Hex | Primitivo | Dónde se usa |
|---|---|---|---|
| `bg/muted` | `#8E918E` | `color/gray-500` (mismo primitivo que `text/muted`, alias distinto para uso de fondo) | Barra superior del Header (desktop) |
| `text/subtle` | `#D9D9D9` | `color/gray-300` (primitivo ya declarado en la paleta pero sin alias hasta ahora) | Título de Benefit Card (desktop y mobile) |

### Estilos de texto nuevos o con desviaciones respecto al catálogo

| Estilo | Specs reales | Dónde se usa | Nota |
|---|---|---|---|
| `label/md/alt-faq` | SemiBold 600, 21px (ligado a variable) | Pregunta del FAQ, desktop | Resuelve el pendiente #2 de `design-tokens.md`: **sí** es un estilo de texto válido y catalogado en Figma, solo faltaba mapearlo a su uso |
| `label/md/alt-2` (mobile) | SemiBold 600, 10px, tracking 23% | Pregunta del FAQ, mobile | No está en el catálogo de 18 estilos de `design-tokens.md` — agregar |
| Texto suelto 28px Regular | Regular 400, sin tracking | Links de nav en Header y Footer | No coincide con ningún estilo nombrado del sistema |
| Texto suelto 24px Light | Light 300, 24px | Horarios en Footer desktop | El peso Light solo existe documentado en `heading/h1/alt-2`, a otro tamaño |
| `body/lg` mobile (override Bold) | Bold 700, 10px, tracking 23% | Botón "Reserva Online" mobile | El token base `body/lg` es Regular sin tracking — acá aparece con peso y tracking distintos |
| `body/sm` mobile (Benefit Card) | Regular 400, 11px | Descripción de Benefit Card, mobile | `design-tokens.md` documenta `body/sm` mobile = 8px |
| `body/md` mobile (Service Card) | Regular 400, 12px | Descripción de Service Card "Corte", mobile | `design-tokens.md` documenta `body/md` mobile = 9px |

---

## 12. Pendientes con la diseñadora

1. El botón "Reserva Online" no tiene variante Desktop — ¿se usa solo
   en mobile, o falta crearla?
2. Service Card: faltan las variantes mobile de "Cabello + Barba" y
   "Facial" (solo existen "Corte" y "Barba").
3. FAQ Item: no existe ninguna variante en estado "Open" para mobile —
   confirmar cómo debe verse la respuesta expandida en ese breakpoint.
4. El ícono +/− del FAQ y el ícono del Menu Button no tienen un
   segundo estado visual (−/×) documentado — se resolverá con
   rotación CSS/JS en Elementor; confirmar que es aceptable.
5. Tres tamaños de logo sin relación de escala clara: Header desktop
   154×160, símbolo "Logo/Mobile" catalogado 82×86 vs. instancia real
   en Header mobile 41×43, Footer desktop 290×294, Footer mobile
   55×67. ¿Son variantes intencionales por contexto?
6. Varios botones/tarjetas "Desktop" usan un radio de borde literal de
   30.5px en vez de estar ligados a la variable `radius/full` (999px)
   — mismo resultado visual pero sin trazabilidad al token.
7. El texto de navegación (Header y Footer) usa 28px Regular sin
   ningún token asignado — ¿crear un estilo nuevo o reusar uno
   existente?
8. Los alias `bg/muted` y `text/subtle` no están en
   `docs/design-tokens.md` — agregarlos si se confirma su uso
   definitivo (impacta también la guía de Elementor).
9. Varias tarjetas tienen tamaños mobile reales distintos a los
   documentados en la tabla Responsive de `design-tokens.md`
   (`body/sm`, `body/md`) — indica que el Figma se ajustó después de
   documentar los tokens; conviene re-sincronizar ese archivo.
