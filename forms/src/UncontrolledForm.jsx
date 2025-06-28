import { useRef } from 'react';

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

    console.log('--- Datos Formulario NO Controlado ---');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Opcional: Limpiar el formulario después del envío
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <div style={{ border: '1px solid #ff9800', padding: '20px', borderRadius: '8px', marginBottom: '30px', backgroundColor: '#fff3e0' }}>
      <h2>Formulario No Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="uncontrolled-name">Nombre:</label>
          {/* 3. Asignamos la referencia al input */}
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            id="uncontrolled-name"
            defaultValue="Juan"
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="uncontrolled-email">Email:</label>
          <input
            ref={emailInputRef}
            type="email"
            name="email"
            id="uncontrolled-email"
            defaultValue="juan@example.com"
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="uncontrolled-password">Contraseña:</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="uncontrolled-password"
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 15px', backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Enviar (No Controlado)
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;