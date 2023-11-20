Como se ha escogido Bun como runtime, voy a elegir el gestor de dependencias propio de [**bun**](https://bun.sh/docs/cli/install), siguiendo mi criterio principal de tener todos los gestores unificados, aunque habiendo elegido bun como runtime, también se pueden instalar dependencias con npm de la misma forma que si usaramos NodeJS, no es necesario usar bun también como gestor de dependencias.

#### NPM

NPM es el gestor de paquetes por defecto de NodeJS, por lo que es el más utilizado y el que más soporte tiene. Sin embargo no es el más rápido ni el más ligero, por lo que no es la mejor opción.

#### YARN

YARN también es un gestor de paquetes para NodeJS, pero no es tan utilizado como npm y puede no ser compatible con algunos paquetes de npm, por lo que tampoco es la mejor opción.

#### PNPM

PNPM es una mejora de NPM que lo hace más rápido y ligero, por lo que es una buena opción, pero puede no ser compatible con algunos paquetes, al igual que YARN. Entre NPM, YARN y PNPM, ésta última sería la mejor opción por rapidez, sin embargo no cumple con el criterio de tener todos los gestores unificados, por lo que no la voy a elegir.

#### BUN

Bun tiene un gestor de dependencias interno, para instalar dependencias basta con ejecutar `bun install`, es compatible con los paquetes de NodeJS y lo hace más rápido, por lo que lo convierte en la mejor opción además de que cumple con el criterio de tener todos los gestores unificados.
