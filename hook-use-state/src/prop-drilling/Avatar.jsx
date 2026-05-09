// Avatar.jsx (Componente Objetivo - El más anidado)
// Finalmente, este componente es el que realmente usa el nombreDeUsuario.
import styles from "./Avatar.module.css";

function Avatar({ name }) {
  return (
    <div className={styles.avatar}>
      <span>{name}</span>
    </div>
  );
}

export default Avatar;
