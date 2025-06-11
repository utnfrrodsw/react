// Header.jsx (Componente Intermedio 1)
// Este componente no necesita el nombreDeUsuario para sí mismo,
// pero lo recibe y lo pasa al UsuarioLogueado.
import User from './User';

function Header({ name }) {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
      <h2>Encabezado de la App</h2>
      <User name={name} /> {/* Pasa el dato al UsuarioLogueado */}
    </header>
  );
}

export default Header;