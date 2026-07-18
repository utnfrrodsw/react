## React hook useState

Ejercicio:
- Crear una lista de tareas (To-Do List) que practique los diferentes usos de useState: primitivos, arrays y objetos.

Requerimientos:
- El componente principal debe manejar un estado `tasks` como array de objetos con la forma: `{ id, text, completed }`
- Agregar tareas nuevas mediante un input controlado (useState para el valor del input)
- Cada tarea debe tener un checkbox para marcarla como completada (actualizar el estado del objeto `completed` de forma inmutable usando `map`)
- Agregar un botón "Eliminar" por tarea que la remueva del array usando `filter`
- Mostrar un contador de tareas pendientes usando una variable derivada del estado (no un segundo useState)
- Extra Bonus 1: Agregar un botón "Limpiar completadas" que solo elimine las tareas marcadas como `completed: true`
- Extra Bonus 2: Agregar un botón "Editar" que permita modificar el texto de una tarea existente inline
