import { useRef } from "react";
import styles from "./UncontrolledForm.module.css";

function UncontrolledForm() {
  // 1. Creamos referencias para cada input que queremos controlar
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // 2. Accedemos a los valores de los inputs a través de sus referencias
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    console.log("--- Datos Formulario NO Controlado ---");
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Contraseña:", password);

    // Opcional: Limpiar el formulario después del envío
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulario No Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="uncontrolled-name">Nombre:</label>
          {/* 3. Asignamos la referencia al input */}
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            id="uncontrolled-name"
            defaultValue="Juan"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="uncontrolled-email">Email:</label>
          <input
            ref={emailInputRef}
            type="email"
            name="email"
            id="uncontrolled-email"
            defaultValue="juan@example.com"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="uncontrolled-password">Contraseña:</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="uncontrolled-password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar (No Controlado)
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
