Debido a que he escogido Bun como runtime y ya que mi criterio de elección principal ha sido tener un `all-in-one`, siguiendo el mismo criterio me decanto por usar el task runner interno de Bun, aunque usar **make** podría ser una buena opción por su madurez y efectividad. También existe un [**task runner de VSCode**](https://medium.com/@alfmohenu/task-runner-for-your-typescript-code-in-vs-code-12655290c8bf), pero al ser una funcionalidad única para ese editor de texto, la descarto.

#### MAKE

Es un gestor de tareas muy conocido y maduro pero al fin y al cabo es un gestor genérico, por lo que al no estar integrado con el runtime, no será tan rápido, aunque para un proyecto pequeño como es nuestro caso podría ser una buena opción.

#### BUN

Bun contiene un task-runner propio y bien integrado. En _*package.json*_ se define una llave _*scripts*_ que contiene un objeto con las tareas a ejecutar. Para ejecutar una tarea basta con ejecutar `bun run <task>`, por lo que se convierte en la opción mejor integrada con el runtime y por lo tanto también en la más rápida.
