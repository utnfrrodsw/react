import { useShallow } from "zustand/react/shallow";
import { useCounterStore } from "./counterStore";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore(
    useShallow((s) => ({
      count: s.count,
      increment: s.increment,
      decrement: s.decrement,
      reset: s.reset,
    }))
  );

  return (
    <div>
      <h2>Counter con Zustand</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
