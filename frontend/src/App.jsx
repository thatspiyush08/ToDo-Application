import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Todo from './assets/todo.png';
import './App.css';

function App() {
  const [todo, settodo] = useState([
    {
      title: 'Go to GYM',
      description: 'From 12am-1am',
    },
    {
      title: 'Do Front-End',
      description: 'From 1am-3am',
    },
    {
      title: 'Sleep',
      description: 'From 3am-11am',
    },
  ]);

  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  });

  function addTodo() {
    if (newTodo.title && newTodo.description) {
      settodo((prevTodo) => [...prevTodo, newTodo]);
      setNewTodo({
        title: '',
        description: '',
      });
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Todo} className="todo logo" alt="todo logo" />
        </a>
      </div>
      <h1>To Do Application</h1>
      <div className="card">
        <div>
          <input
            type="text"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
            placeholder="Enter Todo Name"
            className="input-box"
          />
          <input
            type="text"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
            placeholder="Enter Todo Description"
            className="input-box"
          />
          <button onClick={addTodo} className="add-button">Add Todo</button>
        </div>
        {todo.map(function (todos, index) {
          return (
            <TODOS
              key={index}
              title={todos.title}
              description={todos.description}
            ></TODOS>
          );
        })}
      </div>

      <p className="read-the-docs">
        Click on the button to Add Random TODO's.
      </p>
    </>
  );
}

function TODOS(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
