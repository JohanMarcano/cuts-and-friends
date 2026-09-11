# Design tokens — Figma CUT&FRIENDS

Fuente: página **"01 · Foundations"** en
[Figma — CUT&FRIENDS](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=233-3),
reconstruida por la diseñadora como sistema de diseño formal (Variables +
Estilos nombrados de Figma).

> La versión anterior de este documento (extraída directamente de los
> frames de landing, sin sistema de diseño) quedó en
> `docs/design-tokens-v1.md` como referencia histórica. Este archivo la
> reemplaza como fuente de verdad.

Todos los nombres de abajo son **nombres reales** leídos de las
Variables y Estilos del archivo (`get_variable_defs`), no descripciones
inventadas.

## Colores

### Primitivos

| Variable | Hex |
|---|---|
| `color/green-900` | `#1C241D` |
| `color/teal-500` | `#3EA69B` |
| `color/gray-500` | `#8E918E` |
| `color/gray-300` | `#D9D9D9` |
| `color/white` | `#FFFFFF` |
| `color/black` | `#000000` |

### Alias semánticos

| Variable | Hex | Referencia a primitivo |
|---|---|---|
| `bg/default` | `#000000` | `color/black` |
| `bg/inverse` | `#FFFFFF` | `color/white` |
| `bg/accent` | `#3EA69B` | `color/teal-500` |
| `text/default` | `#FFFFFF` | `color/white` |
| `text/inverse` | `#000000` | `color/black` |
| `text/muted` | `#8E918E` | `color/gray-500` |
| `text/accent` | `#3EA69B` | `color/teal-500` |
| `border/default` | `#FFFFFF` | `color/white` |
| `border/inverse` | `#000000` | `color/black` |
| `action/primary-bg` | `#3EA69B` | `color/teal-500` |
| `action/primary-text` | `#FFFFFF` | `color/white` |
| `action/secondary-bg` | `#000000` | `color/black` |
| `action/secondary-text` | `#FFFFFF` | `color/white` |
| `overlay/image` | `#000000` | `color/black` |

`color/green-900` es un primitivo declarado en la paleta pero **sin
alias semántico que lo use** en esta página — confirmar con la
diseñadora si está reservado para un uso futuro (¿dark mode?) o es
resabio de una iteración anterior.

## Tipografía

Familia principal: **Montserrat**. Familia decorativa: **GOOD BRUSH**
(solo en `display/xl`).

18 estilos de texto nombrados. El letter-spacing está definido como
**% del tamaño de fuente** (no px fijo): la mayoría usa `23%`, los
`body/*` usan `0%`.

| Estilo | Familia | Peso (nombre Figma) | Weight CSS | Font-size (var) | Line-height | Letter-spacing |
|---|---|---|---|---|---|---|
| `display/xl` | GOOD BRUSH | Regular | 400 | `typography/display/xl/font-size` | 100% | 0% |
| `heading/h1` | Montserrat | Bold | 700 | `typography/heading/h1/font-size` | 100% | 23% |
| `heading/h1/alt-2` | Montserrat | Light | 300 | `typography/heading/h1/alt-2/font-size` | 100% | 0% |
| `heading/h2` | Montserrat | Bold | 700 | `typography/heading/h2/font-size` | 100% | 23% |
| `heading/h2/alt-2` | Montserrat | Bold | 700 | `typography/heading/h2/alt-2/font-size` | 100% | 23% |
| `heading/h3` | Montserrat | Medium | 500 | `typography/heading/h3/font-size` | `typography/heading/h3/line-height` | 23% |
| `heading/h3/alt-2` | Montserrat | Medium | 500 | `typography/heading/h3/alt-2/font-size` | `typography/heading/h3/alt-2/line-height` | 23% |
| `body/lg` | Montserrat | Regular | 400 | `typography/body/lg/font-size` | 100% | 0% |
| `body/lg/alt-2` | Montserrat | Regular | 400 | `typography/body/lg/alt-2/font-size` | 100% | 0% |
| `body/lg/alt-3` | Montserrat | Regular | 400 | `typography/body/lg/alt-3/font-size` | 146.1% | 0% |
| `body/md` | Montserrat | Regular | 400 | `typography/body/md/font-size` | `typography/body/md/line-height` | 0% |
| `body/md/alt-2` | Montserrat | Regular | 400 | `typography/body/md/alt-2/font-size` | `typography/body/md/alt-2/line-height` | 0% |
| `body/sm` | Montserrat | Regular | 400 | `typography/body/sm/font-size` | `typography/body/sm/line-height` | 0% |
| `label/lg` | Montserrat | SemiBold | 600 | `typography/label/lg/font-size` | 100% | 23% |
| `label/lg/alt-2` | Montserrat | SemiBold | 600 | `typography/label/lg/alt-2/font-size` | 100% | 23% |
| `label/md` | Montserrat | Bold | 700 | `typography/label/md/font-size` | 100% | 23% |
| `button/md` | Montserrat | Bold | 700 | `typography/button/md/font-size` | `typography/button/md/line-height` | 23% |
| `button/md/alt-2` | Montserrat | SemiBold | 600 | `typography/button/md/alt-2/font-size` | 100% | 23% |

### Valores de las variables de font-size / line-height (Desktop)

| Variable | Desktop |
|---|---|
| `typography/display/xl/font-size` | 128 |
| `typography/heading/h1/font-size` | 52 |
| `typography/heading/h1/alt-2/font-size` | 77 |
| `typography/heading/h2/font-size` | 45 |
| `typography/heading/h2/alt-2/font-size` | 45 |
| `typography/heading/h3/font-size` | 34 |
| `typography/heading/h3/line-height` | 30 |
| `typography/heading/h3/alt-2/font-size` | 34 |
| `typography/heading/h3/alt-2/line-height` | 51 |
| `typography/body/lg/font-size` | 24 |
| `typography/body/lg/alt-2/font-size` | 28 |
| `typography/body/lg/alt-3/font-size` | 28 |
| `typography/body/md/font-size` | 20 |
| `typography/body/md/line-height` | 30 |
| `typography/body/md/alt-2/font-size` | 20 |
| `typography/body/md/alt-2/line-height` | 32 |
| `typography/body/sm/font-size` | 18 |
| `typography/body/sm/line-height` | 28 |
| `typography/label/lg/font-size` | 24 |
| `typography/label/lg/alt-2/font-size` | 32 |
| `typography/label/md/font-size` | 20 |
| `typography/button/md/font-size` | 21 |
| `typography/button/md/line-height` | 21 |
| `typography/button/md/alt-2/font-size` | 21 |

Estos son los valores tal como están definidos en las Variables (un
solo valor, sin modo). El breakpoint mobile equivalente está en la
sección "Responsive" más abajo — **no** es una segunda variable/modo,
es una tabla de referencia documentada aparte.

## Espaciado

Escala base-4 declarada como Variables (`Foundations — Spacing`):

| Variable | Valor |
|---|---|
| `spacing/4` | 4 |
| `spacing/8` | 8 |
| `spacing/12` | 12 |
| `spacing/16` | 16 |
| `spacing/24` | 24 |
| `spacing/32` | 32 |
| `spacing/40` | 40 |
| `spacing/48` | 48 |
| `spacing/64` | 64 |
| `spacing/80` | 80 |
| `spacing/96` | 96 |
| `spacing/120` | 120 |

La tabla "Responsive" (ver abajo) documenta además `spacing/20`,
`spacing/29`, `spacing/35`, `spacing/52`, `spacing/68` — valores en uso
real dentro de la landing que no tienen swatch en la escala base
anterior. Tratarlos como parte de la misma escala base-4 (múltiplos de
4) pendientes de agregar al catálogo oficial.

## Radio de borde

| Variable | Valor |
|---|---|
| `radius/none` | 0 |
| `radius/full` | 999 (pill / círculo completo) |

## Responsive — Desktop vs. Mobile

Documentado en el frame "Foundations — Responsive" como tabla de
referencia (texto), **no** como modos de Variable — confirmado porque
`get_variable_defs` sobre ese frame no devuelve nada. Sirve para saber
qué valor usar en cada breakpoint, pero no hay swap automático de
variable entre desktop y mobile.

### Spacing

Los mismos valores se usan en desktop y mobile — el spacing **no
cambia** por breakpoint:

`4, 8, 12, 16, 20, 24, 29, 32, 35, 40, 48, 52, 64, 68, 80, 96, 120`

### Typography — font-size (Desktop / Mobile)

| Token | Desktop | Mobile |
|---|---|---|
| `typography/display/xl/font-size` | 128 | 25 |
| `typography/heading/h1/font-size` | 52 | 25 |
| `typography/heading/h1/alt-2/font-size` | 77 | 55 |
| `typography/heading/h2/font-size` | 45 | 20 |
| `typography/heading/h2/alt-2/font-size` | 45 | 32 |
| `typography/heading/h3/font-size` | 34 | 16 |
| `typography/heading/h3/alt-2/font-size` | 34 | 27 |
| `typography/body/lg/font-size` | 24 | 10 |
| `typography/body/lg/alt-2/font-size` | 28 | 23 |
| `typography/body/lg/alt-3/font-size` | 28 | 23 |
| `typography/body/lg/alt-phone/font-size` ⚠️ | 24 | 20 |
| `typography/body/md/font-size` | 20 | 9 |
| `typography/body/md/alt-2/font-size` | 20 | 16 |
| `typography/body/sm/font-size` | 18 | 8 |
| `typography/label/lg/font-size` | 24 | 17 |
| `typography/label/lg/alt-2/font-size` | 32 | 16 |
| `typography/label/md/font-size` | 20 | 13 |
| `typography/label/md/alt-faq/font-size` ⚠️ | 21 | 10 |
| `typography/button/md/font-size` | 21 | 11 |
| `typography/button/md/alt-2/font-size` | 21 | 17 |

⚠️ = token listado en la tabla Responsive pero sin estilo/swatch
catalogado en "Text styles" — falta confirmar con la diseñadora a qué
elemento de la UI corresponde antes de usarlo.

### Line-height (Desktop / Mobile)

| Token | Desktop | Mobile |
|---|---|---|
| `typography/body/md/font-size` (line-height) | 30 | 17 |
| `typography/body/md/alt-2/font-size` (line-height) | 32 | 24 |
| `typography/body/sm/font-size` (line-height) | 28 | 15 |
| `typography/button/md/font-size` (line-height) | 21 | 21 |
| `typography/heading/h3/font-size` (line-height) | 30 | 22 |
| `typography/heading/h3/alt-2/font-size` (line-height) | 51 | 40 |

## Pendientes con la diseñadora

1. Confirmar uso de `color/green-900` — no tiene alias semántico
   asignado en esta página.
2. Aclarar a qué elemento corresponden `typography/body/lg/alt-phone` y
   `typography/label/md/alt-faq` — están en la tabla Responsive pero no
   en el catálogo de Text styles.
3. Confirmar si `spacing/20`, `/29`, `/35`, `/52`, `/68` se incorporan
   formalmente a la escala base o si son casos puntuales a corregir.
4. Verificar si CONTACTO, BLOG HOME y BLOG POST ya se migraron a este
   mismo sistema de tokens o siguen con los valores hardcodeados
   documentados en `docs/design-tokens-v1.md`.
