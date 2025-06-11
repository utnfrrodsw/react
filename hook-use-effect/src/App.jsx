import { useState } from "react";
import "./App.css";
import MemeFetcher from "./MemeFetcher";
// import MemeFetcherV2 from "./MemeFetcherV2";

function App() {
  const [showMemes, setShowMemes] = useState(true);

  return (
    <>
      <div>
        <h1>Ejemplo de useEffect con Fetch/Axios y Abort</h1>
        <button onClick={() => setShowMemes(!showMemes)}>Toggle Memes</button>
        { showMemes && <MemeFetcher /> }
        {/* { showMemes && <MemeFetcherV2 /> } */}
      </div>
    </>
  );
}

export default App;
