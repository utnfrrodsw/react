## React Router

Ejercicio:
- Extender la aplicación DSWApp con una sección de blog que utilice rutas anidadas, parámetros dinámicos, rutas protegidas y lazy loading.

Requerimientos:
- Crear una ruta `/blog` accesible para todos los usuarios que muestre una lista de posts
- Crear rutas anidadas `/blog/:id` que muestren el detalle de cada post (usar un parámetro dinámico con `useParams`)
- Crear una ruta protegida `/blog/new` accesible solo para usuarios con rol "admin" que muestre un formulario para crear posts
- Usar `React.lazy()` y `Suspense` para aplicar lazy loading a las páginas del blog, mostrando un fallback mientras se cargan
- Crear un breadcrumb dinámico que muestre la navegación actual (Home > Blog > Post Title) usando `useLocation`
- Extra Bonus 1: Agregar una ruta `/blog/tags/:tag` que filtre posts por tag, y usar `useSearchParams` para permitir combinar el filtro por tag con un ordenamiento (?sort=asc o ?sort=desc)
- Extra Bonus 2: Implementar una "404" específica para posts que no existan, diferenciándola de la 404 general de la app
