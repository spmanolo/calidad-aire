Para TypeScript existen varios frameworks para escribir tests bastante conocidos. Todos los que comento contienen bibliotecas de aserciones que siguen el estilo BDD y tienen su propio CLI para ejecutar los tests, sin embargo, la mayoría de runtime ya contienen su propio framework para hacer tests. Al haber elegido Bun como runtime, voy a usar su [framework de tests](https://bun.sh/docs/cli/test), que es bastante sencillo e intuitivo.

## Criterios de elección

- Como criterio principal voy a establecer la facilidad de uso y la velocidad de ejecución. Con facilidad de uso también me refiero a la integración con el runtime, así que si el framework ya viene integrado, mejor.

- Otro criterio a tener en cuenta es el mantenimiento del framework, ya que esto es siempre un factor importante en el desarrollo, que la herramienta esté ativa con constantes actualizaciones y que no esté obsoleta.

### Jest

Este framework es el más popular de todos. Tiene una gran comunidad detrás y es fácil de configurar. Sin embargo, no viene integrado con Bun, así que habría que instalarlo como dependencia de desarrollo.

### Mocha

Mocha es un framework para escribir tests unitarios en JavaScript y TypeScript, pero ya no es tan usado y no se actualiza de forma tan continua como el resto, además no viene integrado con Bun, así que habría que instalarlo como dependencia de desarrollo.

### Cypress

Cypress es un framework de tests que ofrece muchas facilidades de uso a la hora de escribir tests, como testear directamente desde el navegador o hacer debug de los tests. Además es un framework para tests end-to-end, esto nos permite testear la aplicación en todo su conjunto, desde el punto de vista del usuario, por lo que es una buena práctica si queremos probar que la aplicación satisface las necesidades del usuario. Sin embargo, aunque es un framework muy potente y rápido, no viene integrado con Bun, así que habría que instalarlo como dependencia de desarrollo.

### Bun test

Bun integra un framework de tests que es muy sencillo de usar, además de que no hay que instalar nada, por lo que es una buena opción para este proyecto. Además, al ser un framework de tests unitarios, nos permite testear cada parte de la aplicación por separado, lo que nos permite encontrar errores de forma más rápida y sencilla. Al estar integrado con Bun es compatible con TypeScript y está pensado para ello, lo cual también es un punto a favor. También se definen pruebas con una [API similar a la de Jest](https://bun.sh/docs/test/writing), lo que nos da la seguridad de saber que está 'inspirado' en uno de los mayores frameworks para JavaScript y TypeScript. Por último, es un framework que se actualiza de forma continua, por lo que no hay que preocuparse por su mantenimiento.