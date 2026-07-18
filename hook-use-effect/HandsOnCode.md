## React hook useEffect

Ejercicio:
- Crear un componente que busque y muestre personajes de una API pública, practicando useEffect, cleanup y estados de carga/error.

Requerimientos:
- Consumir la API `https://rickandmortyapi.com/api/character` para obtener personajes
- Implementar un campo de búsqueda que filtre personajes por nombre (con debounce de 500ms para no saturar la API)
- Manejar y mostrar estados de loading (spinner o texto), error (mensaje de error) y éxito
- Implementar cleanup con AbortController para cancelar requests anteriores al hacer una nueva búsqueda
- Extra Bonus 1: Crear un custom hook `useCharacterSearch` que encapsule toda la lógica de fetch, loading, error y cleanup, y reutilizarlo en el componente
- Extra Bonus 2: Usar TanStack React Query (`useQuery`) para manejar el cache de búsquedas anteriores, de modo que si el usuario busca algo, vuelve atrás y busca lo mismo, no haga un nuevo request
