import { useState } from 'react';
import reactLogo from '../../assets/react.svg'

export default function State() {
  const [count, setCount] = useState(0);
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}