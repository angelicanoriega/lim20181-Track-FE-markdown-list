Markdown Links
# Markdown Links

Los archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Instalación

`npm i @marianguevara/md-links`


## Uso 

`$ md-links <route> <options>`
----------------------
`<route>` es la ruta del archivo o carpeta .

`<options>` debe tener los valores de:

`--stats` muestra cantidad de links totales y unicos.

`--validate` muestra ruta de archivo, link, texto de referencia, estado de link y un texto de estado.

`--stats --validate` muestra cantidad de links totales, unicos y rotos.
 ## Ejemplos de Uso 

`$ md-links <route> `
----------------------

Solo la ruta del archivo: Muestra ruta de archivo links y texto de referencia .

[![npm](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/ruta.PNG)](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/ruta.PNG)

`$ md-links <route> --validate`
----------------------

Status 400 indica link no funcional, status 200 indica link funcional.

[![npm](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/validate.PNG)](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/validate.PNG)

`$ md-links <route> --stats`
----------------------


[![npm](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/stats.PNG)](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/stats.PNG)

`$ md-links <route> --validate --stats`
----------------------

[![npm](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/ambos.PNG)](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/ambos.PNG)
