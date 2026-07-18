## React hook useOptimistic

Ejercicio:
- Crear un sistema de "Me gusta" (Likes) para una lista de publicaciones que demuestre el uso de useOptimistic para actualizaciones optimistas ante una llamada async al servidor.

Requerimientos:
- Crear un componente `PostList` que renderice una lista de publicaciones, cada una con un botón de "Me gusta" y un contador de likes
- El estado real de las publicaciones se maneja con `useState` (array de objetos con la forma: `{ id, title, likes, likedByMe }`)
- Usar `useOptimistic` para que al hacer clic en "Me gusta", el contador aumente inmediatamente en la UI (actualización optimista) sin esperar la respuesta del servidor
- Simular una llamada al servidor con `setTimeout` (1-2 segundos) que falle aleatoriamente (~30% de probabilidad)
- Si la llamada falla, el estado optimista debe revertirse automáticamente al estado real (el contador vuelve al valor anterior)
- Si la llamada es exitosa, actualizar el estado real con `setPosts`
- Usar `useTransition` para mostrar un estado de "cargando" mientras la operación está en curso
- Extra Bonus 1: Agregar un botón de "No me gusta" que remueva el like de forma optimista, invirtiendo la lógica del updateOptimistic
- Extra Bonus 2: Agregar un campo de texto para comentar en cada publicación, donde el comentario aparezca optimistamente en la lista antes de que el servidor confirme su guardado
