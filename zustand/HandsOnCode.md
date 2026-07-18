## Zustand — Carrito de Compras

Ejercicio:
- Migrar la lógica del carrito a una arquitectura con múltiples stores de Zustand (slicing).

Requerimientos:
- Separar el store actual en dos stores independientes: `cartStore` (items del carrito) y `productStore` (catálogo de productos disponibles)
- El `productStore` debe exponer `products` y una acción `fetchProducts` asíncrona que simule obtener productos desde una API (usar `setTimeout`)
- `Cart.jsx` debe consumir los productos desde `productStore` y las acciones del carrito desde `cartStore`
- Persistir solo los items del carrito en localStorage, no los productos
- Extra Bonus 1: Agregar un botón "Limpiar completadas" que vacíe el carrito
- Extra Bonus 2: Permitir editar la cantidad de cada item en el carrito desde un input numérico
