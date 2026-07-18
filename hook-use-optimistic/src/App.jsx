import { useOptimistic, useState, useTransition } from "react";
import "./App.css";

// Simula una llamada al servidor que tarda 1.5s
// Tiene un 30% de probabilidad de fallar
async function addTodoToServer(todo) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Error del servidor: no se pudo guardar el todo"));
      } else {
        resolve(todo);
      }
    }, 1500);
  });
}

function updateOptimistic(state, newTodo) {
  if (state.some((t) => t.id === newTodo.id)) return state;
  return [...state, { ...newTodo, sending: true }];
}

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí un nuevo todo..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function TodoList({ items, onRemove }) {
  if (items.length === 0) {
    return <p className="empty">No hay todos todavía</p>;
  }

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <li key={todo.id} className={todo.sending ? "sending" : "confirmed"}>
          <span>{todo.text}</span>
          {todo.sending ? (
            <span className="badge">Guardando...</span>
          ) : (
            <span className="badge ok">Confirmado</span>
          )}
          <button onClick={() => onRemove(todo.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos, updateOptimistic);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  function addTodo(text) {
    setError(null);
    const id = crypto.randomUUID();
    const newTodo = { id, text };

    startTransition(async () => {
      addOptimisticTodo(newTodo);

      try {
        await addTodoToServer(newTodo);
        setTodos((prev) => [...prev, newTodo]);
      } catch (err) {
        setError(err.message);
      }
    });
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="app">
      <h1>useOptimistic</h1>
      <p className="description">
        Agregá un todo y aparece al instante. Si el servidor falla (~30%), se
        revierte automáticamente.
      </p>

      <TodoForm onAdd={addTodo} />

      {isPending && <p className="pending">Procesando...</p>}
      {error && <p className="error">{error}</p>}

      <TodoList items={optimisticTodos} onRemove={removeTodo} />
    </div>
  );
}

export default App;
