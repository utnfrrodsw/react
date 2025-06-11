// Avatar.jsx (Componente Objetivo - El más anidado)
// Finalmente, este componente es el que realmente usa el nombreDeUsuario.
function Avatar({ name }) {
  return (
    <div style={{ border: '1px solid blue', padding: '5px', display: 'inline-block', marginLeft: '5px' }}>
      <span>{name}</span>
    </div>
  );
}

export default Avatar;
