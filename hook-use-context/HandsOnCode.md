## React hook useContext

Ejercicio:
- Crear un contexto llamada LanguageContext. Utilizarlo para que se pueda cambiar el lenguaje de la aplicación.

Requerimientos:
- Manejar 3 idiomas diferentes. El lenguaje por default tiene que ser inglés (en)
- Permitir al usuario cambiar el idioma de la aplicación
- Mostrar en diferentes componentes, textos traducidos segpun el idioma actual configurado en la aplicación.
- Usar un custom hook para leer el contexto 
- Extra Bonus: al cambiar el lenguaje de la aplicación, si el usuario apreta f5 y recarga la página, verán que se vuelve a iniciar con el lenguaje por default (en). Implementar una manera de evitar esta situación, de modo tal que al refrescar la página, el idioma en el cual se muestre la aplicación sea el último que el usuario seleccionó.