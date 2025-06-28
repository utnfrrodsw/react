import { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {
  // 1. Definimos el estado para cada campo del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const handleChangeName = (event) => {
    const { value } = event.target;
    const { nameError } = validateName(value);
    setFormData((prevData) => ({
      ...prevData,
      name: value,
      nameError,
    }));
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    const { emailError } = validateEmail(value);
    setFormData((prevData) => ({
      ...prevData,
      email: value,
      emailError,
    }));
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    const { passwordError } = validatePassword(value);
    setFormData((prevData) => ({
      ...prevData,
      password: value,
      passwordError,
    }));
  };

  const validateName = (value) => {
    let isValid = true;
    let nameError = "";
    if (!value.trim()) {
      nameError = "El nombre es obligatorio.";
      isValid = false;
    } else if (value.length < 3) {
      nameError = "El nombre debe tener al menos 3 caracteres.";
      isValid = false;
    }

    return {
      isValid,
      nameError,
    };
  };

  const validateEmail = (value) => {
    let isValid = true;
    let emailError = "";
    if (!value.trim()) {
      emailError = "El email es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      // Regex simple para email
      emailError = "Formato de email inválido.";
      isValid = false;
    }

    return {
      isValid,
      emailError,
    };
  };

  const validatePassword = (value) => {
    let isValid = true;
    let passwordError = "";
    if (!value.trim()) {
      passwordError = "La contraseña es obligatoria.";
      isValid = false;
    } else if (value.length < 6) {
      passwordError = "La contraseña debe tener al menos 6 caracteres.";
      isValid = false;
    }

    return {
      isValid,
      passwordError,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isValid: validName } = validateName(formData.name);
    const { isValid: validEmail } = validateEmail(formData.email);
    const { isValid: validPassword } = validatePassword(formData.password);

    if (validName && validEmail && validPassword) {
      // 4. Validar antes de enviar
      console.log("--- Datos Formulario Controlado ---");
      console.log("Nombre:", formData.name);
      console.log("Email:", formData.email);
      console.log("Contraseña:", formData.password);

      alert(
        `Formulario Controlado Enviado:\nNombre: ${formData.name}\nEmail: ${formData.email}`
      );

      // Opcional: Limpiar el formulario después del envío
      setFormData({
        name: "",
        email: "",
        password: "",
        nameError: "",
        emailError: "",
        passwordError: "",
      });
    } else {
      console.log("Formulario Controlado: Errores de validación.");
    }
  };

  return (
    <div className="controlled-form-container">
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="controlled-name">Nombre:</label>
          {/* 5. El valor del input está vinculado al estado y se actualiza con onChange */}
          <input
            type="text"
            id="controlled-name"
            name="name" // Importante: el 'name' debe coincidir con la clave en el estado
            value={formData.name}
            onChange={handleChangeName}
            style={{
              marginLeft: "10px",
              padding: "8px",
              borderRadius: "4px",
              border: formData.nameError ? "1px solid red" : "1px solid #ddd",
            }}
          />
          {formData.nameError && (
            <p className="error-message">{formData.nameError}</p>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="controlled-email">Email:</label>
          <input
            type="email"
            id="controlled-email"
            name="email"
            value={formData.email}
            onChange={handleChangeEmail}
            style={{
              marginLeft: "10px",
              padding: "8px",
              borderRadius: "4px",
              border: formData.emailError ? "1px solid red" : "1px solid #ddd",
            }}
          />
          {formData.emailError && (
            <p className="error-message">{formData.emailError}</p>
          )}
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="controlled-password">Contraseña:</label>
          <input
            type="password"
            id="controlled-password"
            name="password"
            value={formData.password}
            onChange={handleChangePassword}
            style={{
              marginLeft: "10px",
              padding: "8px",
              borderRadius: "4px",
              border: formData.passwordError
                ? "1px solid red"
                : "1px solid #ddd",
            }}
          />
          {formData.passwordError && (
            <p className="error-message">{formData.passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={
            (formData.nameError || !formData.name) ||
            (formData.emailError || !formData.email) ||
            (formData.passwordError || !formData.password)
          }
        >
          Enviar (Controlado)
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
