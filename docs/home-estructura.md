# HOME — Estructura de construcción (Figma "03 · Landing")

Fuente: frame **"HOME — Systematized"** (desktop, 1920×7244) y
**"Landing / Mobile"** (mobile, 390×6848) en
[Figma — CUT&FRIENDS](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=233-5),
página "03 · Landing". Extraído con el MCP de Figma el 2026-09-11.

Es el plan de construcción para maquetar en Elementor. **No contiene
código.** Los componentes referenciados ("usa: Service Card", etc.)
son los documentados en `docs/componentes.md` — para specs de color,
tipografía y estado, ver ese archivo. Acá el foco es **orden, contenido
y layout** de cada sección.

Ambos frames (desktop y mobile) tienen debajo de todo una capa
`background-decoration` (vectores/blobs decorativos) que corre por
**toda la altura de la página**, no por sección — se implementa una
sola vez como fondo global, no repetida en cada sección.

## Decisiones confirmadas

Estas decisiones ya están tomadas y reemplazan las dudas que había
quedado abiertas en la primera versión de este documento (Figma traía
un enlace externo distinto para "Agendar", y no estaba claro si
Services/Gallery eran carrusel o grid):

1. **CTA de agenda → popup con el iframe embebido de Agenda Pro.**
   Los 9 botones "Agendar" / "Reserva Online" de la página (Hero,
   Team ×3, FAQ, etc. — no el enlace externo
   `barberiacutsandfriends.site.agendapro.com` que trae el Figma)
   abren el **mismo popup de Elementor Pro**, con la URL del iframe ya
   documentada en `docs/ESTADO.md`. Es un solo popup reutilizado, no
   uno por botón.
   - El iframe va en un contenedor a `width: 100%`, con el alto
     definido por breakpoint (no un alto fijo único).
   - En mobile el popup se configura a **pantalla completa** (100vw ×
     100vh), sin bordes, con el botón de cierre bien visible.
   - Prioridad del proyecto: como CONTACTO está fuera de alcance, toda
     la conversión mobile pasa por este popup — la UX de agendar en
     teléfono es crítica, no un detalle secundario.
   - **Plan B**: si al probar en un teléfono real el popup resulta
     incómodo (el iframe de Agenda Pro no se adapta bien, scroll
     doble, etc.), la salida es reemplazar el popup por un **enlace
     directo a Agenda Pro solo en mobile**, dejando el popup únicamente
     en desktop.
2. **Services es carrusel**, en desktop y en mobile — no un grid ni
   una lista estática. La barra de progreso es un **scrollbar de
   Swiper con el módulo `draggable` activado** (arrastrable, no solo
   decorativa). Ver detalle y riesgo de implementación en la sección 3
   más abajo.
3. **Gallery es un grid estático**, en ambos breakpoints. La barra de
   progreso que aparecía bajo el grid en la versión desktop del Figma
   era un **error de capas ya corregido por la diseñadora** — no
   implica scroll ni carrusel.

## Orden de secciones (de arriba hacia abajo)

| # | Sección | Alto Desktop | Alto Mobile |
|---|---|---|---|
| 1 | Header | 320px | 150px (superpuesto al Hero, ver nota) |
| 2 | Hero | 810px | 508px |
| 3 | Services | 783px | 1338px |
| 4 | Gallery | 1207px | 1026px |
| 5 | Experience | 720px | 461px |
| 6 | Team | 1260px | 2082px |
| 7 | Benefits | 750px | 540px |
| 8 | FAQ | 921px | 589px |
| 9 | Footer | 473px | 296px |

---

## 1. Header

**Contenido:** franja de contacto (dirección, teléfono, íconos de
redes) + nav (Barbería/Servicios, Galería, Barberos, Blog) + logo.

**Usa:** componente `Header` (ver `docs/componentes.md` §9).

**Layout Desktop:** en flujo normal, antes del Hero (Header ocupa
0-320px, Hero empieza en 321px — no se superponen).

**Layout Mobile:** ⚠️ el Header **se superpone al Hero** — ambos
instances arrancan en y=0 dentro del frame mobile. El Header mobile
(logo + botón hamburguesa) flota como barra transparente encima del
fondo del Hero, en vez de empujarlo hacia abajo como en desktop. Al
maquetar en Elementor, el Header mobile necesita **posición
absoluta/sticky sobre el Hero**, no ir en flujo normal de secciones
apiladas.

---

## 2. Hero

**Contenido:**
- Palabra grande "BARBERÍA" en `display/xl` (GOOD BRUSH, color
  `text/accent`) — **solo en desktop**.
- Titular "Donde el estilo se encuentra con la comodidad" en
  `heading/h1/alt-2` (desktop) — en mobile es un párrafo más corto con
  pesos mixtos (Regular + SemiBold + la frase "la comodidad" en GOOD
  BRUSH color accent, todo a 25px).
- Foto de barbero (imagen a la izquierda en desktop).
- CTA "AGENDAR" → botón pill, **abre el popup con el iframe de Agenda
  Pro** (ver "Decisiones confirmadas" al inicio del documento — no el
  enlace externo que trae el Figma).

**Usa:** componente `Button` (variante Agendar) — el resto (imagen,
headline) es contenido único de esta sección, no un componente de 02.

**Layout Desktop:** 2 columnas dentro de los 1920px de ancho:
- Columna izquierda (~x207-960, foto 753×708px).
- Columna derecha (~x1045-1766): apilado vertical de "BARBERÍA" →
  titular → botón CTA, alineado a la izquierda dentro de esa columna.

**Layout Mobile:** 1 columna, imagen de fondo recortada con una máscara
decorativa (forma orgánica, no un rectángulo simple), texto y CTA
alineados a la izquierda (no centrados) sobre la imagen, apilados:
texto (top ~198px) → botón (top ~320px).

⚠️ **Falta el bloque "BARBERÍA" (display/xl) en mobile** — no aparece
en el nodo mobile del Hero. Confirmar si es un recorte intencional por
espacio o si falta agregarlo.

---

## 3. Services

**Contenido:** título "SERVICIOS" + (solo mobile) un párrafo
introductorio ("En Cuts&Friends ofrecemos...") que **no existe en la
versión desktop** + 4 tarjetas de servicio (Corte, Cabello + Barba,
Barba, Facial).

**Usa:** componente `Service Card` (las 4 variantes Desktop; en mobile
solo hay 2 instanciadas, ver abajo).

**Layout Desktop:** título centrado arriba (`heading/h2`). Debajo, las
4 Service Card en un **carrusel horizontal de 4 slides** (350px cada
una, gap ~32-33px, cercano a `spacing/32`), con **scrollbar de Swiper
arrastrable** (módulo `draggable`) como indicador/control de avance —
no una fila estática.

**Layout Mobile:** título con un pequeño fondo/badge en `bg/accent`
detrás (decorativo, no está en desktop), párrafo intro debajo, y
luego el mismo **carrusel**, mostrando 1 Service Card visible a la
vez (ancho completo) con el mismo scrollbar arrastrable debajo. Solo
2 de las 4 Service Card están instanciadas en el frame mobile del
Figma (Corte y Barba — coincide con el hallazgo de
`docs/componentes.md` de que Service Card mobile no tiene variantes
para "Cabello + Barba" y "Facial") — **faltan crear esas 2 variantes
mobile** antes de cargar el carrusel completo.

⚠️ **Riesgo de implementación:** el carrusel se resuelve con el widget
de carrusel de Elementor Pro (basado en Swiper), pero el módulo
`scrollbar` con `draggable: true` de Swiper **puede no estar expuesto
en la interfaz de Elementor** — es probable que haya que agregarlo con
CSS/JS adicional (Custom CSS del widget o un snippet). Verificar esto
temprano, antes de dar por cerrado el layout de esta sección.

---

## 4. Gallery

**Contenido:** título "Cortes y estilos" + subtítulo "Inspírate con
nuestros cortes exclusivos" (`heading/h3`) + párrafo descriptivo + 8
fotos de cortes.

**Usa:** ningún componente de 02 (las fotos son contenido único de
esta sección; no hay una "Gallery Card" catalogada en 02).

**Layout Desktop:** título/subtítulo/párrafo centrados arriba. Debajo,
**grid estático tipo masonry de 8 imágenes en 2 filas de 4**, con
anchos alternados 400px/325px (proporción `object-cover`) creando un
patrón escalonado entre fila 1 y fila 2. El Figma traía una barra de
progreso decorativa superpuesta al título en esa zona — **era un
error de capas, ya corregido por la diseñadora**; no se implementa
nada de scroll/carrusel acá.

**Layout Mobile:** título/subtítulo/párrafo apilados arriba (mismo
orden). Las 8 imágenes se muestran en el mismo tipo de **grid estático
de 2 columnas × 4 filas**, alternando columna ancha/angosta igual que
desktop.

---

## 5. Experience ("Nosotros")

**Contenido:** imagen de fondo a sangre + título "NOSOTROS" +
subtítulo de 2 líneas "La barbería donde la excelencia se encuentra
con la comodidad" (`heading/h3/alt-2`) + párrafo descriptivo.

**Usa:** ningún componente de 02 — texto e imagen de fondo únicos de
la sección.

**Layout Desktop:** 1 columna, todo el texto centrado horizontalmente
sobre la imagen de fondo de 1920×720px, apilado verticalmente (título
→ subtítulo → párrafo).

**Layout Mobile:** mismo esquema de 1 columna centrada, imagen de
fondo recortada con una máscara decorativa (mismo patrón de forma
orgánica que el Hero mobile), tamaños de texto reducidos
(`heading/h2-mobile/alt-2` 20px, `heading/h3-mobile` 16px, `body/md`
mobile 12px).

---

## 6. Team ("Nuestros artistas")

**Contenido:** título "Nuestros artistas" + 3 Team Card (Miguel
Linares, Natalia Pino, Diego Cignoni), cada una con foto, nombre,
botón "AGENDAR" e ícono de Instagram.

**Usa:** componente `Team Card` (matriz completa, 3 de 3 en ambos
breakpoints).

**Layout Desktop:** título centrado arriba (`heading/h2`). Debajo, las
3 Team Card en **una fila de 3 columnas** (488px cada una), con un gap
bastante más ajustado (~18-19px) que el de Services — casi tocándose
entre sí. Centradas como grupo.

**Layout Mobile:** título centrado arriba. Las 3 Team Card **apiladas
en 1 columna a ancho completo**, con un gap generoso entre ellas
(~80px) — notoriamente más espaciado que en desktop, proporcional al
cambio de layout horizontal → vertical.

---

## 7. Benefits ("¿Por qué elegirnos?")

**Contenido:** título "¿POR QUÉ ELEGIRNOS?" + 4 Benefit Card
(Atención Personalizada, Calidad Profesional, Ambiente Cercano,
Tendencias y Estilo), cada una con ícono, título y descripción.

**Usa:** componente `Benefit Card` (matriz completa, 4 de 4 en ambos
breakpoints).

**Layout Desktop:** título centrado arriba. Las 4 Benefit Card en
**una fila de 4 columnas** (~341-343px cada una), centradas como
grupo. ⚠️ Los gaps entre tarjetas **no son uniformes**: ~47px entre la
1ª y 2ª, ~45px entre la 2ª y 3ª, pero solo ~23px entre la 3ª y 4ª —
parece una inconsistencia de maquetación en el Figma más que un
diseño intencional. Al construir en Elementor, usar un gap uniforme
(≈`spacing/48`) en vez de replicar la irregularidad.

**Layout Mobile:** título centrado arriba. Las 4 Benefit Card en
**grid de 2 columnas × 2 filas** (no apiladas en 1 columna como la
mayoría de las otras secciones): fila 1 = Personalizada + Profesional,
fila 2 = Ambiente Cercano + Tendencias.

---

## 8. FAQ ("Preguntas frecuentes")

**Contenido:** título "PREGUNTAS FRECUENTES" + 6 preguntas en formato
acordeón + botón "RESERVA ONLINE".

**Usa:** componente `FAQ Item` (ver `docs/componentes.md` §5 para el
detalle de estados) y componente `Button` (variante Reserva Online en
mobile / botón pill custom en desktop, ver nota).

**Layout Desktop:** título centrado arriba (`heading/h2`). Los 6 FAQ
Item en **grid de 2 columnas × 3 filas** (735px de ancho cada uno, gap
~32-34px entre columnas y ~28-30px entre filas): columna izquierda =
items 1, 3, 5; columna derecha = items 2, 4, 6. En el mock, los items
1 y 2 aparecen **abiertos** (mostrando la respuesta) y el resto
cerrados — es solo el estado de ejemplo del diseño, el comportamiento
real de acordeón debe permitir abrir/cerrar cualquiera. Debajo de la
grilla, un botón "RESERVA ONLINE" centrado (pill 412×71px, con radio
literal 35.7px en vez de `radius/full` — mismo caso ya notado en
`docs/componentes.md`).

**Layout Mobile:** título en 2 líneas centrado arriba. Los 6 FAQ Item
**apilados en 1 columna a ancho completo**, todos en estado cerrado
(altura fija 48px c/u, ~13px de separación entre ítems). Debajo, el
botón "Reserva Online" (instancia del componente `Button`, 161×30px)
centrado.

---

## 9. Footer

**Contenido:** logo + nav (mismos 4 links que el Header) + horario +
dirección + íconos de contacto/redes + CTA WhatsApp.

**Usa:** componente `Footer` completo (ver `docs/componentes.md`
§10), que a su vez incluye el ícono `CTA WhatsApp` (§6) y `Logo` (§7).

**Layout Desktop:** franja completa de 1920×473px, fondo a sangre,
logo grande a la derecha del centro, columna de nav a la izquierda,
bloque de horario y dirección a la derecha, íconos de contacto en dos
filas junto al bloque de horario.

**Layout Mobile:** mismo contenido reescalado a 390×296px, todo
apilado/centrado en una columna angosta (logo arriba, luego
dirección/horario, nav, e íconos de redes en una fila al final).

---

## Notas transversales para la maquetación en Elementor

1. **Header mobile como overlay del Hero** (sección 1) — requiere
   position absoluta/sticky, no sección apilada normal.
2. **Popup de Agenda Pro y carrusel de Services** son las dos piezas
   con más riesgo técnico de todo el HOME (ver "Decisiones
   confirmadas" al inicio) — conviene prototiparlas primero, antes de
   maquetar el resto de las secciones, para no descubrir tarde que
   Elementor no las soporta de forma nativa.
3. Los gaps irregulares en Benefits (sección 7) y el radio de borde
   literal del botón de FAQ (sección 8) son los mismos hallazgos ya
   registrados en `docs/componentes.md` — no son errores nuevos de
   este documento, se repiten acá porque afectan directamente el
   layout de la sección.
