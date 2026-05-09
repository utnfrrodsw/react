import { useForm } from "react-hook-form";
import styles from "./ComplexForm.module.css";

function ComplexForm() {
  // 1. Inicializamos useForm con opciones adicionales.
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid }, // Accedemos a estados importantes del formulario
    watch, // Permite "observar" el valor de un campo específico (útil para validaciones condicionales)
    reset, // Función para resetear el formulario
    getValues, // Función para obtener los valores actuales del formulario
  } = useForm({
    // Opciones de configuración (opcionales):
    mode: "onTouched", // Modo de validación: 'onChange', 'onBlur', 'onSubmit', 'onTouched', 'all'.
    // 'onTouched' valida cuando un campo es tocado y luego pierde el foco.
    defaultValues: {
      // Valores iniciales para los campos del formulario
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAndConditions: false,
      rol: "usuario",
    },
  });

  // 'watch' nos permite obtener el valor de 'password' en tiempo real
  // para usarlo en la validación de 'confirmPassword'.
  const password = watch("password");

  // Función que se ejecuta si el formulario es válido y se envía.
  const onSubmit = async (data) => {
    console.log("Enviando datos complejos:", data);
    try {
      // 3. Simulación de una llamada a una API asíncrona.
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un retardo de 2 segundos
      alert(`¡Registro exitoso para ${data.fullName}!`);
      reset(); // Resetea el formulario a sus valores por defecto después del éxito.
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un error en el registro. Por favor, inténtalo de nuevo.");
    }
  };

  // Función que se ejecuta si handleSubmit detecta errores de validación.
  const onError = (errors) => {
    console.error("Errores de validación:", errors);
    // Podrías, por ejemplo, hacer scroll a la primera sección con errores.
  };

  const handleReset = () => {
    reset(); // Resetea el formulario a los 'defaultValues' o a un objeto vacío.
  };

  const checkValues = () => {
    const allValues = getValues(); // Obtiene los valores actuales de todos los campos.
    console.log("Valores actuales del formulario:", allValues);
  };

  return (
    <div className={styles.formContainer}>
      <h2>2. Formulario Complejo (con Validación)</h2>
      {/* handleSubmit puede tomar una segunda función para manejar errores de validación */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            // Reglas de validación en el segundo argumento de 'register'
            {...register("fullName", {
              required: "El nombre completo es requerido", // Campo obligatorio
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 50,
                message: "El nombre no debe exceder 50 caracteres",
              },
            })}
            className={errors.fullName ? styles.inputError : styles.input}
          />
          {/* Mostramos el mensaje de error si existe para este campo */}
          {errors.fullName && (
            <p className={styles.error}>{errors.fullName.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="emailComplex">Email:</label>
          <input
            type="email"
            id="emailComplex"
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Expresión regular para validar formato de email
                message: "Formato de email inválido",
              },
            })}
            className={errors.email ? styles.inputError : styles.input}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            className={errors.password ? styles.inputError : styles.input}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Por favor, confirma tu contraseña",
              // Validación personalizada usando la función 'validate'
              validate: (value) =>
                value === password || "Las contraseñas no coinciden", // Compara con el valor de 'password'
            })}
            className={
              errors.confirmPassword ? styles.inputError : styles.input
            }
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="rol">Rol:</label>
          <select id="rol" {...register("rol")} className={styles.select}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>
        </div>

        <div className={styles.inputGroupLarge}>
          <input
            type="checkbox"
            id="termsAndConditions"
            {...register("termsAndConditions", {
              required: "Debes aceptar los términos y condiciones", // Checkbox obligatorio
            })}
            className={styles.checkbox}
          />
          <label htmlFor="termsAndConditions">
            Acepto los términos y condiciones
          </label>
          {errors.termsAndConditions && (
            <p className={styles.error}>{errors.termsAndConditions.message}</p>
          )}
        </div>

        <button
          type="submit"
          // Deshabilitamos el botón si el formulario está enviando, no ha sido modificado, o no es válido.
          disabled={isSubmitting || !isDirty || !isValid}
          className={
            isSubmitting || !isDirty || !isValid
              ? styles.submitButtonDisabled
              : styles.submitButton
          }
        >
          {isSubmitting ? "Enviando..." : "Registrar"}
        </button>
        <button
          type="button" // Importante: para que no actúe como submit
          onClick={handleReset}
          className={styles.resetButton}
        >
          Resetear
        </button>
        <button
          type="button"
          onClick={checkValues}
          className={styles.checkButton}
        >
          Ver Valores
        </button>
        <p className={styles.status}>
          Formulario {isDirty ? "Modificado" : "No Modificado"} | Estado de
          Validez:{" "}
          <strong className={isValid ? styles.valid : styles.invalid}>
            {isValid ? "Válido" : "Inválido"}
          </strong>
        </p>
      </form>
    </div>
  );
}

export default ComplexForm;
