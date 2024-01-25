import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">
        Click on the Button to add TODO.
      </p>
      <h1>TODO-APPLICATION</h1>


      <CreateTodo></CreateTodo>   
      <Todos></Todos>  
    </>
  )
}

export default App
