# Design tokens — Figma CUT&FRIENDS

Fuente: [Figma — CUT&FRIENDS](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=0-1),
página única **"CUTS&FRIENDS MOBILE"**.

**Nota importante:** el archivo originalmente solo tenía frames mobile
(ancho 390px — iPhone) en la página "CUTS&FRIENDS MOBILE". El frame HOME
desktop definitivo (1920px) se agregó después, en
[node-id=73-2508](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=73-2508) —
ver sección "Desktop (1920px)" más abajo. El resto de las secciones
(CONTACTO, BLOG HOME, BLOG POST) todavía no tienen versión desktop
confirmada. El archivo tampoco define Variables de Figma
(colores/espaciados como tokens nativos): todos los valores están
hardcodeados como estilos locales (hex directos), no hay una librería de
estilos con nombre. Los "nombres" de la paleta abajo son descriptivos,
asignados por el rol que cumple cada color en el diseño, no nombres que
existan en el archivo Figma.

Frames revisados: `HOME`, `CONTACTO` (representativos; `BLOG HOME 1/2/3`,
`BLOG POST 1–7` no se inspeccionaron en detalle pero comparten el mismo
frame width de 390px).

## Paleta de colores

| Nombre | Hex | Uso observado |
|---|---|---|
| Accent / Teal | `#3EA69B` | Botones "AGENDAR" / "Reserva Online", texto destacado ("la comodidad" en brush font), bordes activos, indicador de tab activo |
| Background Dark | `#060606` | Fondo de tarjetas de contacto (Dirección, Horarios, Canales) |
| Neutral Light | `#D9D9D9` | Labels de la sección "¿Por qué elegirnos?", barra base de indicador de progreso (tab inactivo) |
| Base White | `#FFFFFF` (`white`) | Texto principal sobre fondos oscuros/imagen, fondo de frame raíz |
| Base Black | `#000000` (`black`) | Fondo de acordeón FAQ, bordes de tarjetas FAQ (`border border-white`) |

No se detectaron colores adicionales (error/success/disabled) en las
secciones revisadas.

## Tipografías

Familia principal: **Montserrat** (Google Font, variable con múltiples
pesos). Familia secundaria/decorativa: **GOOD_BRUSH** (script, solo
`Regular`, usada puntualmente para acentuar una palabra en el hero).

| Peso usado | Nombre en Figma |
|---|---|
| Light | `Montserrat:Light` |
| Regular | `Montserrat:Regular` |
| Medium | `Montserrat:Medium` |
| SemiBold | `Montserrat:SemiBold` |
| Bold | `Montserrat:Bold` |
| Regular (script) | `GOOD_BRUSH:Regular` |

### Tamaños por uso — Mobile (único breakpoint disponible)

| Elemento | Tamaño | Peso | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Hero title | 25px | Regular / SemiBold / Brush | 35px | — | — |
| H2 sección (ej. "NOSOTROS", "SERVICIOS") | 20px | Bold | normal | 4.6px | uppercase |
| H2 alterno (ej. "CONTÁCTANOS") | 25px | Bold | normal | 4.75px | uppercase |
| H3 subtítulo sección | 16px | Medium | 22px | 3.68px | uppercase |
| H3 tarjeta contacto ("Dirección", "Horarios", "Canales") | 18px | SemiBold | normal | 4.14px | uppercase |
| Título servicio/producto | 17px | Bold | normal | 3.91px | uppercase |
| Nombre de barbero | 17px | SemiBold | normal | 3.91px | uppercase |
| Label pequeño ("Atención Personalizada", etc.) | 13px | SemiBold | normal | 2.99px | uppercase |
| Botón (AGENDAR, Reserva Online) | 10–11px | Bold | 21px | 2.3–2.53px | uppercase |
| Pregunta FAQ | 10px | SemiBold | normal | 2.3px | uppercase |
| Body / párrafo | 8–9px | Regular | 15–17px | 0–2.07px | — |
| Nav / footer texto pequeño | 8–10px | Regular | normal | — | — |

No hay frames desktop en el archivo para completar una columna equivalente.

## Escala de espaciados

El archivo usa posicionamiento absoluto (no auto-layout con tokens de
espaciado nombrados), por lo que no existe una escala de spacing
declarada como variable. Valores recurrentes observados en paddings,
gaps y radios:

| Valor | Uso |
|---|---|
| 4px | Border-radius de botón secundario pequeño (banner "SERVICIOS") |
| 8px | Padding superior de la barra de contacto/redes (nav superior) |
| 30px | Alto estándar de botón píldora (AGENDAR / Reserva Online) |
| 30.5px | Border-radius de botones píldora (equivale a `height/2`, full pill) |
| 48px | Alto de fila de acordeón FAQ |
| 61px | Gap vertical entre filas de acordeón FAQ (top a top) |
| 70px | Tamaño de ícono en "¿Por qué elegirnos?" |
| 146px | Ancho estándar de botón píldora |

No se pudo derivar una escala numérica limpia (ej. 4/8/16/24/32) porque
el diseño no usa auto-layout ni variables — los márgenes entre bloques
varían caso a caso según el contenido de cada sección.

## Desktop (1920px)

Fuente: frame **HOME** desktop, definitivo, en
[node-id=73-2508](https://www.figma.com/design/2hGSKOkDBzMeS6jY9AePni/CUT-FRIENDS?node-id=73-2508).
Igual que en mobile, no hay Variables de Figma ni Estilos nombrados: son
valores hardcodeados leídos directamente de las capas.

### Colores

| Nombre | Hex | Uso observado |
|---|---|---|
| Accent / Teal | `#3EA69B` | Botones "AGENDAR" / "RESERVA ONLINE", palabra "BARBERÍA" en brush font, indicador de progreso activo |
| Neutral Light | `#D9D9D9` | Labels de "¿Por qué elegirnos?", riel base del indicador de progreso |
| Nav Gray | `#8E918E` | Fondo de la barra superior (dirección/teléfono/redes), color nuevo respecto a mobile |
| Base White | `#FFFFFF` (`white`) | Texto principal sobre fondos oscuros/imagen |
| Base Black | `#000000` (`black`) | Fondo de tarjetas del acordeón FAQ, con `border border-white` |

No aparece `#060606` (fondo de tarjetas de CONTACTO en mobile) porque
este frame es HOME; falta revisar CONTACTO desktop para confirmar si se
mantiene.

### Tipografías

Misma familia que mobile: **Montserrat** (Light, Regular, Medium,
SemiBold, Bold) + **GOOD_BRUSH:Regular** para el acento decorativo.

| Elemento | Tamaño | Peso | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Brush accent ("BARBERÍA") | 128px | GOOD_BRUSH Regular | normal | — | — |
| Hero title ("Donde el estilo…") | 77px | Light / SemiBold (última línea) | normal | — | — |
| H1 sección (ej. "SERVICIOS", "Cortes y estilos", "PREGUNTAS FRECUENTES") | 45px | Bold | normal | 10.35px | uppercase |
| H1 alterno ("Nosotros") | 52px | Bold | normal | 11.96px | uppercase |
| H2 subtítulo (ej. "Inspírate con…", "La barbería donde…") | 34px | Medium | 30–51px | 7.82px | uppercase |
| FAQ pregunta (columna izq.) | 21px | SemiBold | normal | 4.83px | uppercase |
| FAQ pregunta (columna der.) | 23px | SemiBold | normal | 5.29px | uppercase |
| Nombre de barbero / label feature ("Atención Personalizada", etc.) | 23px | SemiBold | normal | 5.29px | uppercase |
| Botón (AGENDAR, RESERVA ONLINE) | 21px | Bold | 21px | 4.83px | uppercase (implícito, texto ya en mayúsculas) |
| Título de servicio (ej. "Corte de Cabello") | 20px | Bold | normal | 4.6px | uppercase |
| Body / párrafo general | 20px | Regular | 30px | — | — |
| Body FAQ (respuesta) | 20px | Regular | 32px | — | — |
| Descripción de servicio | 18px | Regular | 28px | — | — |
| Nav superior (dirección/teléfono) | 23px | Regular | normal | — | — |
| Footer — links y texto | 24–29px | Regular / Light | normal / 1.461 | — | — |
| Símbolo "+" del acordeón FAQ | 32px | SemiBold | normal | 7.36px | uppercase |

**Inconsistencias detectadas** (no normalizar sin confirmar con
diseño): las preguntas del FAQ alternan entre 21px/4.83px y
23px/5.29px sin un patrón claro de columna; el H1 "Nosotros" usa 52px
en vez de los 45px del resto de encabezados de sección.

### Espaciados

| Valor | Uso |
|---|---|
| 6px | Alto del riel de la barra de progreso |
| 12px | Alto del indicador activo de la barra de progreso |
| 32px | Tamaño de íconos de redes en footer/nav |
| 34px | Gap horizontal entre tarjetas de la galería de servicios (grid de 350px) |
| 38px | Tamaño de ícono Instagram bajo cada artista |
| 61px | Alto de botón píldora estándar (AGENDAR) |
| 30.5px | Border-radius de botón píldora estándar (61px / 2) |
| 71px | Alto de la barra superior de contacto/redes |
| 71.4px | Alto del botón píldora grande ("RESERVA ONLINE") |
| 35.7px | Border-radius del botón píldora grande (71.4px / 2) |
| 103–104px | Alto de fila de acordeón FAQ (filas 2–4) |
| 180px | Alto de la primera fila de acordeón FAQ |
| 134px | Tamaño de ícono en "¿Por qué elegirnos?" |
| 350px | Ancho de tarjeta en grid de galería de servicios |
| 735px | Ancho de tarjeta de acordeón FAQ (columna) |

Igual que en mobile, el archivo usa posicionamiento absoluto sin
auto-layout, así que estos valores son medidos capa por capa, no una
escala declarada. La proporción mobile→desktop **no es un factor fijo**:
varía entre ~1.2x y ~3x según el elemento (ej. título de servicio 17px→20px
= 1.18x, pero hero title 25px→77px = 3.08x), lo que sugiere que el
desktop no es un simple reescalado del mobile sino una composición
distinta — no usar una regla de conversión única entre breakpoints.

## Recomendación

Para que estos tokens sean utilizables como fuente de verdad en la
migración a WordPress/Elementor, conviene pedirle al diseñador que:
1. Confirme si CONTACTO, BLOG HOME y BLOG POST también tienen (o
   tendrán) versión desktop definitiva — hoy solo HOME la tiene.
2. Convierta los estilos locales en **Estilos de color** y **Estilos de
   texto** nombrados, y en Variables de espaciado — hoy no hay ninguno
   definido en el archivo.
3. Confirme las inconsistencias marcadas arriba (tamaños de FAQ y de
   "Nosotros") antes de fijarlas como estándar.
