Markdown Links
# Markdown Links

Los archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Es por esto se creó esta herramienta, que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reporte algunas estadísticas.

## Instalación

`npm i @marianguevara/md-links`


## Uso 

`$ md-links <route> <options>`
----------------------
`<route>` es la ruta del archivo o carpeta .

`<options>` debe tener los valores de:

`--stats` muestra cantidad de links totales,que aun funcionan y los rotos.

`--validate` muestra ruta de archivo, texto de referencia, link, estado de link y un texto de estado.

`--stats --validate` muestra ruta de archivo, texto de referencia, link, estado de link, texto de estado,
 cantidad de links totales,funcionales y los rotos.

 ## Ejemplos de Uso 

Solo la ruta del archivo: Muestra ruta de archivo o carpeta, texto de referencia y links.

`$ md-links <route> `
----------------------

[![npm]](https://raw.githubusercontent.com/angelicanoriega/lim20181-Track-FE-markdown-list/master/imagenes/ruta.PNG)

