# Aplicación para calcular y comprobar la calidad del aire en las provincias andaluzas

El cliente es una persona o un grupo de personas con el mismo problema: tienen alergia y
a la hora de salir a la calle necesitarían saber el nivel de la calidad del aire y CO2
ya que los potenciales clientes viven en ciudades grandes donde la calidad del aire suele
ser muy mala por la cantidad de vehículos circulando por ellas.

Se necesitaría algún tipo de aplicación que recopile datos de los sensores de las distintas
ciudades andaluzas que proporciona la Junta de Andalucía para poder procesar esos datos e
intentar dar una solución al problema.

### Runtime que se va a utilizar

[Bun](https://bun.sh/) es un runtime de JavaScript y TypeScript, es el más rápido y además es muy sencillo e intuitivo, lo cual facilitará el desarrollo, como comento [aquí](/docs/runtime.md). Además ya está disponible la versión 1 de Bun, por lo que se puede considerar estable.

### Clase CalidadDelAire

La clase CalidadDelAire es la clase principal de la aplicación que se encarga de gestionar y procesar los datos de contaminación que se obtienen de los sensores de las distintas ciudades andaluzas.

Para comprobar la sintaxis de la clase se debe ejecutar el siguiente comando para compilar el archivo principal sin generar el archivo JavaScript:

```bash
bun run check
```

#### Información adicional

A continuación de describen las historias de usuario y los diferentes milestones que se deberán llevar a cabo:

- [Historias de Usuario](/docs/historias_usuario.md)
- [Milestones](/docs/milestones.md)

[Configuración de Git](/docs/git_config.png)
