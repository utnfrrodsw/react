import { useState } from "react";
import "./App.css";
import MemeFetcher from "./MemeFetcher";
import MemeFetcherV2 from "./MemeFetcherV2";
import MemeFetcherV3 from "./MemeFetcherV3";
import Productos from "./Products";

const DEMOS = [
  { id: "meme-fetcher", label: "MemeFetcher", component: MemeFetcher },
  { id: "meme-fetcher-v2", label: "MemeFetcherV2", component: MemeFetcherV2 },
  { id: "meme-fetcher-v3", label: "MemeFetcherV3", component: MemeFetcherV3 },
  { id: "productos", label: "Productos", component: Productos },
];

function App() {
  const [selectedId, setSelectedId] = useState("meme-fetcher");
  const [showDemo, setShowDemo] = useState(true);

  const selectedDemo = DEMOS.find((demo) => demo.id === selectedId);
  const ActiveComponent = selectedDemo.component;

  return (
    <>
      <div>
        <h1>Ejemplo de useEffect con Fetch/Axios y Abort</h1>
        <nav className="demo-tabs">
          {DEMOS.map((demo) => (
            <button
              key={demo.id}
              className={`demo-tab ${demo.id === selectedId ? "demo-tab-active" : ""}`}
              onClick={() => setSelectedId(demo.id)}
            >
              {demo.label}
            </button>
          ))}
        </nav>
        <div className="demo-controls">
          <button className="demo-tab demo-toggle" onClick={() => setShowDemo((show) => !show)}>
            {showDemo ? "Ocultar demo (desmontar)" : "Mostrar demo (montar)"}
          </button>
        </div>
        {showDemo ? (
          <ActiveComponent />
        ) : (
          <p className="demo-unmounted">
            El componente está desmontado. Usá el botón para volver a montarlo.
          </p>
        )}
      </div>
    </>
  );
}

export default App;
