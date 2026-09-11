# Elementor — carga de estilos globales

Guía para cargar en Elementor los tokens de `docs/design-tokens.md`
(sistema "01 · Foundations" del Figma). Usa los nombres reales del
sistema — no se inventan nombres nuevos ni para colores ni para
fuentes.

## Colores globales

Elementor trae 4 slots por defecto (Primario, Secundario, Texto,
Acento) más colores personalizados ilimitados. Se asignan los 4 slots
a los alias de uso más frecuente en el diseño y el resto queda como
color personalizado, con el nombre del alias tal cual.

| Slot en Elementor | Alias del sistema | Hex | Por qué este alias |
|---|---|---|---|
| **Primario** | `action/primary-bg` | `#3EA69B` | Color del botón principal (AGENDAR / RESERVA ONLINE), se repite en cada CTA de cada sección |
| **Secundario** | `bg/default` | `#000000` | Fondo dominante de secciones y tarjetas (FAQ, franjas oscuras) |
| **Texto** | `text/default` | `#FFFFFF` | Color de casi todo el texto del sitio, que corre sobre fondo oscuro |
| **Acento** | `text/accent` | `#3EA69B` | Resalta palabras/títulos puntuales (ej. "la comodidad", indicador de progreso) — mismo hex que Primario pero rol distinto (texto vs. fondo de botón) |

**Colores personalizados** (los 10 alias restantes, uno por uno, con
ese nombre exacto):

| Nombre del color personalizado | Alias del sistema | Hex |
|---|---|---|
| `bg-inverse` | `bg/inverse` | `#FFFFFF` |
| `bg-accent` | `bg/accent` | `#3EA69B` |
| `text-inverse` | `text/inverse` | `#000000` |
| `text-muted` | `text/muted` | `#8E918E` |
| `border-default` | `border/default` | `#FFFFFF` |
| `border-inverse` | `border/inverse` | `#000000` |
| `action-primary-text` | `action/primary-text` | `#FFFFFF` |
| `action-secondary-bg` | `action/secondary-bg` | `#000000` |
| `action-secondary-text` | `action/secondary-text` | `#FFFFFF` |
| `overlay-image` | `overlay/image` | `#000000` |

Elementor no admite `/` en nombres de swatch en todas las versiones —
si el editor lo rechaza, usar `-` en su lugar (`bg-inverse` en vez de
`bg/inverse`), como ya está escrito arriba. `color/green-900` **no**
entra en esta lista: no tiene alias semántico asignado en el Figma
(ver pendiente en `docs/design-tokens.md`), así que no hay slot al que
mapearlo todavía.

### Cómo cargarlos

1. Abrir cualquier página en el editor de Elementor.
2. Menú hamburguesa (arriba a la izquierda) → **Ajustes del sitio** →
   **Colores globales**.
3. Reemplazar los 4 colores default (Primario/Secundario/Texto/Acento)
   por los hex de la tabla de arriba, en ese orden.
4. Click en **+ Agregar color personalizado** por cada fila de la
   segunda tabla, usando el nombre indicado.
5. Guardar.

## Fuentes globales

Familia principal **Montserrat** (Google Font, nativa en Elementor).
Familia decorativa **GOOD BRUSH** (usada solo en `display/xl`) requiere
subir el archivo en Elementor → **Ajustes del sitio** → **Fuentes
personalizadas**; el archivo `.ttf`/`.woff2` está pendiente de la
diseñadora.

**Regla de conversión de letter-spacing:** Figma define el
letter-spacing como % del tamaño de fuente (23% en la mayoría de los
estilos, 0% en los `body/*`). Elementor pide px, así que cada valor de
la tabla es `tamaño_px × 0.23`, calculado por separado para el tamaño
desktop y el tamaño mobile de Figma.

**Regla de tamaño mobile:** los tamaños mobile originales del Figma
son ilegibles para varios estilos de cuerpo/botón (8–11px). La columna
**Mobile propuesto** sube esos casos a un mínimo usable (16px body,
14px button, 12px label) y deja el original de Figma en la columna
anterior para trazabilidad. Los títulos y el display ya son legibles
en mobile — no se tocan.

| Estilo (= nombre en Elementor) | Familia | Peso | Tamaño desktop | Tamaño mobile (Figma) | Mobile propuesto | Line-height | Letter-spacing px desktop | Letter-spacing px mobile (Figma) | Transform |
|---|---|---|---|---|---|---|---|---|---|
| `display/xl` | GOOD BRUSH | Regular (400) | 128px | 25px | 25px *(sin cambio)* | 100% (=128px) | 0px | 0px | Ninguno (contenido ya en mayúsculas) |
| `heading/h1` | Montserrat | Bold (700) | 52px | 25px | 25px *(sin cambio)* | 100% (=52px) | 11.96px | 5.75px | Uppercase |
| `heading/h1/alt-2` | Montserrat | Light (300) | 77px | 55px | 55px *(sin cambio)* | 100% (=77px) | 0px | 0px | Ninguno |
| `heading/h2` | Montserrat | Bold (700) | 45px | 20px | 20px *(sin cambio)* | 100% (=45px) | 10.35px | 4.6px | Uppercase |
| `heading/h2/alt-2` | Montserrat | Bold (700) | 45px | 32px | 32px *(sin cambio)* | 100% (=45px) | 10.35px | 7.36px | Uppercase |
| `heading/h3` | Montserrat | Medium (500) | 34px | 16px | 16px *(sin cambio)* | 30px desktop / 22px mobile | 7.82px | 3.68px | Uppercase |
| `heading/h3/alt-2` | Montserrat | Medium (500) | 34px | 27px | 27px *(sin cambio)* | 51px desktop / 40px mobile | 7.82px | 6.21px | Uppercase |
| `body/lg` | Montserrat | Regular (400) | 24px | 10px | **16px** | 100% (=tamaño) | 0px | 0px | Ninguno |
| `body/lg/alt-2` | Montserrat | Regular (400) | 28px | 23px | 23px *(sin cambio)* | 100% (=tamaño) | 0px | 0px | Ninguno |
| `body/lg/alt-3` | Montserrat | Regular (400) | 28px | 23px | 23px *(sin cambio)* | 146.1% (=1.461em) | 0px | 0px | Ninguno |
| `body/md` | Montserrat | Regular (400) | 20px | 9px | **16px** | 30px desktop / 17px mobile | 0px | 0px | Ninguno |
| `body/md/alt-2` | Montserrat | Regular (400) | 20px | 16px | 16px *(sin cambio)* | 32px desktop / 24px mobile | 0px | 0px | Ninguno |
| `body/sm` | Montserrat | Regular (400) | 18px | 8px | **16px** | 28px desktop / 15px mobile | 0px | 0px | Ninguno |
| `label/lg` | Montserrat | SemiBold (600) | 24px | 17px | 17px *(sin cambio)* | 100% (=tamaño) | 5.52px | 3.91px | Uppercase |
| `label/lg/alt-2` | Montserrat | SemiBold (600) | 32px | 16px | 16px *(sin cambio)* | 100% (=tamaño) | 7.36px | 3.68px | Uppercase |
| `label/md` | Montserrat | Bold (700) | 20px | 13px | 13px *(sin cambio)* | 100% (=tamaño) | 4.6px | 2.99px | Uppercase |
| `button/md` | Montserrat | Bold (700) | 21px | 11px | **14px** | 21px desktop / 21px mobile | 4.83px | 2.53px | Uppercase |
| `button/md/alt-2` | Montserrat | SemiBold (600) | 21px | 17px | 17px *(sin cambio)* | 100% (=tamaño) | 4.83px | 3.91px | Uppercase |

**Nota sobre letter-spacing cuando el tamaño mobile cambió:** en
`body/lg`, `body/md` y `body/sm` el letter-spacing es 0%, así que subir
el tamaño mobile a 16px no afecta nada. En `button/md` sí importa: el
letter-spacing de la tabla (2.53px) está calculado sobre los 11px
originales de Figma, pero como el tamaño real que se va a usar en
mobile es 14px, el letter-spacing correcto a cargar en el campo mobile
de Elementor es **14 × 0.23 = 3.22px**, no 2.53px.

### Cómo cargarlas

1. Menú hamburguesa → **Ajustes del sitio** → **Fuentes globales**.
2. Por cada fila de la tabla, **+ Agregar fuente global**, nombrarla
   igual que la columna "Estilo" (reemplazando `/` por `-` si el campo
   lo exige).
3. Familia = Montserrat (o GOOD BRUSH ya subida como fuente
   personalizada para `display/xl`); Peso = el de la columna.
4. En el tamaño de fuente, click en el ícono de dispositivos (arriba
   del campo) para fijar Desktop y luego cambiar a Mobile y fijar el
   valor de "Mobile propuesto" (no el original de Figma).
5. Repetir el mismo cambio de dispositivo para Line-height y
   Letter-spacing, usando los valores desktop/mobile de la tabla (y el
   ajuste de la nota anterior para `button/md`).
6. Transform: activar "Uppercase" en los estilos marcados así; dejar
   "None" en el resto — el contenido de `display/xl` ya viene escrito
   en mayúsculas, no depende del estilo.
7. Guardar. Elementor no tiene un breakpoint "tablet" separado a menos
   que se active en Ajustes del sitio → Layout; si se activa, replicar
   el valor de mobile también en tablet salvo que se vea mal en ese
   ancho intermedio.

## Estilos que NO conviene cargar como globales

Los 8 estilos `alt-2`/`alt-3` son variantes de un solo uso dentro del
sistema reconstruido, no estilos reutilizables:

- `heading/h1/alt-2`
- `heading/h2/alt-2`
- `heading/h3/alt-2`
- `body/lg/alt-2`
- `body/lg/alt-3`
- `body/md/alt-2`
- `label/lg/alt-2`
- `button/md/alt-2`

**Por qué:** cada uno difiere de su versión base solo en un detalle
puntual (line-height, o el tamaño mobile, o el peso) que corresponde a
un único bloque de la landing, no a un patrón que se repita en varias
páginas. Cargarlos los 18 como Fuentes globales de Elementor infla el
selector de estilos en cada widget con opciones casi idénticas y hace
más difícil elegir la correcta al maquetar.

**Recomendación:** cargar como Fuente global solo los 10 estilos base
(`display/xl`, `heading/h1`, `heading/h2`, `heading/h3`, `body/lg`,
`body/md`, `body/sm`, `label/lg`, `label/md`, `button/md`). Para el
bloque puntual que use una variante `alt-*`, aplicar el estilo base
global y sobrescribir a mano el único valor que cambia (tamaño,
line-height o peso) directamente en ese widget — así no se duplica un
estilo global por cada excepción de una sola sección.

## Pendientes que bloquean esta guía

- Archivo de fuente **GOOD BRUSH** (`.ttf`/`.woff2`) y confirmación de
  licencia para uso web — sin esto, `display/xl` no se puede cargar.
- Confirmar con la diseñadora el uso de `color/green-900` antes de
  decidir si necesita un slot de color propio.
- Los alias `typography/body/lg/alt-phone` y
  `typography/label/md/alt-faq` (marcados con ⚠️ en
  `docs/design-tokens.md`) no están en esta guía porque no tienen
  estilo de texto catalogado — no hay suficiente información para
  cargarlos todavía.
