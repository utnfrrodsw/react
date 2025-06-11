import Header from './Header';

function Application() {
  const name = "Juan Pérez"; // Dato importante que queremos pasar

  return (
    <div>
      <h1>Aplicación Principal</h1>
      <Header name={name} /> {/* Pasa el dato al Header */}
    </div>
  );
}

export default Application;