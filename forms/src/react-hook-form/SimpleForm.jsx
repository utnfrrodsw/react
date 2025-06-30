import { useForm } from 'react-hook-form';

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
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
      <h2>1. Formulario Básico</h2>
      {/* 3. 'handleSubmit' envuelve tu función onSubmit para manejar el envío. */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="simpleName">Nombre:</label>
          {/* 4. 'register' vincula el input con React Hook Form.
              El atributo 'name' del input es crucial y debe ser único. */}
          <input
            type="text"
            id="simpleName"
            {...register('name')}
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="simpleEmail">Email:</label>
          <input
            type="email"
            id="simpleEmail"
            {...register('email')}
            style={{ marginLeft: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Enviar Básico
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;