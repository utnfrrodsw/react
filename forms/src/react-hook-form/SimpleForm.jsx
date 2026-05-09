import { useForm } from "react-hook-form";
import styles from "./SimpleForm.module.css";

function SimpleForm() {
  // 1. Inicializamos useForm. Nos da métodos como 'register' y 'handleSubmit'.
  const { register, handleSubmit } = useForm();

  // 2. Esta función se ejecuta cuando el formulario es enviado.
  // 'data' contendrá los valores de los inputs por su 'name'.
  const onSubmit = (data) => {
    console.log("Datos del formulario simple:", data);
    alert(`Datos enviados:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className={styles.formContainer}>
      <h2>1. Formulario Básico</h2>
      {/* 3. 'handleSubmit' envuelve tu función onSubmit para manejar el envío. */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label htmlFor="simpleName">Nombre:</label>
          {/* 4. 'register' vincula el input con React Hook Form.
              El atributo 'name' del input es crucial y debe ser único. */}
          <input
            type="text"
            id="simpleName"
            {...register("name")}
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="simpleEmail">Email:</label>
          <input
            type="email"
            id="simpleEmail"
            {...register("email")}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Enviar Básico
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;
