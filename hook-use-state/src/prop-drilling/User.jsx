// UsuarioLogueado.jsx (Componente Intermedio 2)
// Este componente no necesita el nombreDeUsuario para sí mismo,
// pero lo recibe y lo pasa al Avatar.

import Avatar from './Avatar';

function User({ name }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <p>Bienvenido, </p>
      <Avatar name={name} /> {/* Pasa el dato al Avatar */}
    </div>
  );
}

export default User;