import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [newColor, setNewColor] = useState('')
  const [colors, setColors] = useState(['red', 'green', 'blue'])
  const [user, setUser] = useState({
    name: 'Juan',
    age: 20,
    email: 'juan@gmail.com'
  })

  function increment() {
    // 1
    setCount(count +1)

    // 2
    // setCount((count) => count + 1)

    // 3
    // setCount(count +1)
    // setCount(count +1)
    // setCount(count +1)

    // 4
    // setCount((count) => count + 1)
    // setCount((count) => count + 1)
    // setCount((count) => count + 1)

    // 5
    // setCount(count +1)
    // setCount((count) => count + 1)

    // 6
    // setCount((count) => count + 1)
    // setCount(11)

    console.log('Count:', count)
  }

  function handleInputValue(event) {
    setName(event.target.value)
  }

  function handleInputColor(event) {
    setNewColor(event.target.value)
  }

  function addColor() {
    colors.push(newColor) // no dispara el re-render
    // setColors([...colors, newColor])
    console.log(colors)
  }

  function changeUserName() {
    user.name = 'Pepe'
    console.log(user)
    
    // setUser({
    //   ...user,
    //   name: 'Pepe'
    // })
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <br />
        <input type="text" value={name} onChange={handleInputValue} />
        <p>
          Nombre Ingresado: {name}
        </p>
        <hr />
        <input type="text" value={newColor} onChange={handleInputColor} />
        <button onClick={addColor}>Agregar Color</button>
        <ul>
          { colors.map((color) => <li key={color}>{color}</li>) }
        </ul>
        
        <hr />
        <legend>Usuario</legend>
        <p>Nombre: {user.name}</p>
        <p>Edad: {user.age}</p>
        <p>Email: {user.email}</p>
        <button onClick={changeUserName}>Cambiar Nombre</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
