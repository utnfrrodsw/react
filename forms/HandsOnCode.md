## Forms en React

Ejercicio:
- Crear un formulario de registro de usuario que combine validación con react-hook-form y manejo de errores con zod.

Requerimientos:
- Usar `react-hook-form` con el resolver de `zod` (`@hookform/resolvers/zod`)
- Definir un schema de zod con los campos: nombre (string, mínimo 3 caracteres), email (string, formato email), contraseña (string, mínimo 8 caracteres, al menos una mayúscula y un número), confirmar contraseña (debe coincidir con contraseña)
- Mostrar errores de validación debajo de cada campo en tiempo real (al hacer blur) y al intentar enviar
- Agregar un campo "Términos y condiciones" checkbox que sea obligatorio para enviar
- Agregar un campo "Rol" con un `<select>` (admin, editor, viewer) cuyo valor por defecto sea "viewer"
- Extra Bonus 1: Mostrar la fortaleza de la contraseña en tiempo real (débil/media/fuerte) usando `watch` de react-hook-form
- Extra Bonus 2: Simular un submit asíncrono (setTimeout de 2 segundos) mostrando un spinner en el botón mientras se "envía", y al completar mostrar un mensaje de éxito y resetear el formulario con `reset()`
