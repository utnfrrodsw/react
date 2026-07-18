## React Testing

Ejercicio:
- Escribir tests para un componente de lista de tareas (To-Do List) cubriendo interacciones del usuario, estados asíncronos y edge cases.

Requerimientos:
- Crear un componente `TodoList` que permita: agregar tareas, marcar como completada, eliminar y filtrar (todas/pendientes/completadas)
- Escribir tests unitarios que verifiquen:
  - El renderizado inicial con un mensaje "No hay tareas" cuando la lista está vacía
  - El agregado de una tarea: escribir en el input, hacer submit, y verificar que aparezca en la lista
  - La eliminación de una tarea: hacer clic en "Eliminar" y verificar que desaparezca
  - El filtrado: crear 3 tareas, marcar 1 como completada, filtrar por "Pendientes" y verificar que solo se muestren 2
- Extra Bonus 1: Simular una operación asíncrona (como guardar en localStorage con setTimeout) y usar `waitFor` o `findBy*` para verificar el resultado
- Extra Bonus 2: Testear el caso edge de intentar agregar una tarea vacía y verificar que no se agregue, y testear que el contador de pendientes se actualice correctamente en cada operación
