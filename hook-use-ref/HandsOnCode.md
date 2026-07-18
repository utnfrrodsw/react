## React hook useRef

Ejercicio:
- Crear un componente de chat con un campo de texto que demuestre el uso de useRef para acceder al DOM sin provocar re-renders.

Requerimientos:
- Crear un componente `ChatInput` con un campo de texto (`<textarea>`) y un botón "Enviar"
- Usar `useRef` para obtener una referencia directa al `<textarea>` del DOM
- Al hacer clic en "Enviar", leer el valor del textarea usando `ref.current.value`, agregarlo a la lista de mensajes y limpiar el campo con `ref.current.value = ""`
- El textarea debe tener auto-focus al montarse el componente usando `ref.current.focus()` dentro de un useEffect con dependencia vacía
- Extra Bonus 1: Agregar un botón "Insertar plantilla" que usando `ref.current.focus()` posicione el cursor en el textarea y con `ref.current.setRangeText()` inserte un texto predefinido en la posición del cursor sin borrar lo que ya se escribió
- Extra Bonus 2: Agregar un segundo `useRef` para hacer scroll automático al último mensaje de la lista cuando se envíe uno nuevo, usando `ref.current.scrollIntoView({ behavior: "smooth" })`
