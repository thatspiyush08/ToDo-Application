import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todo")
  .then(async (res)=>{
    const json=await res.json();
    setTodos(json.todos);
  })

  return (
    <>
      <p className="read-the-docs">
        Click on the Button to add TODO.
      </p>
      <h1>TODO-APPLICATION</h1>


      <CreateTodo></CreateTodo>   
      <Todos todos={todos}></Todos>  
    </>
  )
}

export default App
