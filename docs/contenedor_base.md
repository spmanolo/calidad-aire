# Criterios de elección del contenedor base

- Que sea compatible con el entorno de Bun, ya que todas las elecciones las estoy tomando en base a este criterio.
- Debe tener buen soporte de actualizaciones.
- Que tenga un tamaño reducido, lo que disminuirá los tiempos de ejecución.

## Elección del contenedor base

A la hora de elegir el contenedor base, me encontré con dos opciones que cumplían con los criterios de elección, estas son:

### Imagen oficial de [Bun](https://hub.docker.com/r/oven/bun)

Diseñada por los creadores de Bun, con todo el software necesario para ejecutar una aplicación con Bun, sin embargo, hay mucha cosas que no se necesitan para nuestro proyecto y que vienen instaladas por defecto, lo que aumenta el tamaño de la imagen.

### Imagen de una distribución de Linux

Se trata de una imagen en la que unicamente tenemos el sistema operativo de base y nada más, por lo que nos da la libertad de instalar unicamente lo que necesitemos, lo que nos permite reducir el tamaño de la imagen.

En este caso tenemos varias opciones de distribuciones:

- [Alpine](https://hub.docker.com/_/alpine): Es la distribución más pequeña y muy usada por la comunidad, sin embargo no es compatible con Bun, por lo que hay que descartarla.
- [Debian](https://hub.docker.com/_/debian): Es la distribución más usada por la comunidad, por lo que el soporte está asegurado, en su versión slim tiene un tamaño reducido y es compatible con Bun, por lo que es una buena opción.
- [Ubuntu](https://hub.docker.com/_/ubuntu): Es otra distribución muy usada por la comunidad, también con versión slim, sin embargo no es tan ligera como Debian debido a sus requisitos de hardware.

## Elección

Finalmente, me he decantado por usar una distribución de Linux, ya que me permite tener un mayor control sobre el contenido del contenedor, lo que me permite reducir el tamaño de la imagen. Usaré la imagen de Debian slim, ya que es la que mejor se adapta a mis necesidades, es compatible con Bun, tiene un tamaño reducido y tiene un buen soporte de actualizaciones.
