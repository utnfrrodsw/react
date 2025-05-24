import { useState } from "react";
import "./App.css";
import MemeFetcher from "./MemeFetcher";

function App() {
  const [showMemes, setShowMemes] = useState(true);

  return (
    <>
      <div>
        <h1>Ejemplo de useEffect con Fetch/Axios y Abort</h1>
        <button onClick={() => setShowMemes(!showMemes)}>Toggle Memes</button>
        { showMemes && <MemeFetcher /> }
      </div>
    </>
  );
}

export default App;
