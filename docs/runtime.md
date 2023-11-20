Para TypeScript existen tres _runtime_ conocidos: estos son NodeJS, Deno y Bun. Me he decidido por usar **Bun**, que además es el más rápido ya que está basado en JavaScriptCore, el motor creado por Safari y orientado al rendimiento. Además es muy sencillo e intuitivo, lo cual facilitará el desarrollo.

### Criterios de elección

- Como criterio principal para mi decisión he priorizado la comodidad de tener todas las funcionalidades en un solo runtime (gestor de dependencias, task runner, test runner...)

- Otro criterio a tener en cuenta es la velocidad de ejecución y de instalación de dependencias, ya que esto es siempre un factor importante en el desarrollo.

#### Node.JS:

Este runtime de JavaScript lleva muchos años de bagaje y aparentemente parece la opción más fiable debido a esto, pero el hecho de que requiere de un gestor de dependencias a parte, ya sea npm, yarn o pnpm, me resulta más engorroso. Además de que este runtime utiliza un solo hilo de ejecución (se puede ejecutar código paralelo pero no se crean nuevos hilos ni se podrán sincronizar), por lo que se hará un uso intensivo de la CPU y la velocidad no será su punto fuerte.

#### Deno:

Sería un candidato mejor que NodeJS debido a su velocidad y seguridad. También trae un task runner interno, sin embargo el manejo de dependencias en Deno se hace mediante URL externas, lo cual se me hace un poco complejo y engorroso.

#### Bun:

La principal ventaja de Bun es su rapidez frente a los anteriores. Además es compatible con NodeJS en cuanto a la resolución de dependencias, aunque es una funcionalidad que [aún no está completa](https://bun.sh/docs/runtime/nodejs-apis). Otra ventaja es que un mismo [runtime](https://bun.sh/docs#design-goals) hace de package manager, test runner, task runner, etc. Una de las desventajas de este runtime es que está en su primera versión (1.0.12).
