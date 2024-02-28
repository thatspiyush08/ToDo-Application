import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("TODO Added");
      })
      .catch((error) => {
        console.error("Error adding TODO:", error);
      });
  };

  return (
    <div className="card">
      <input
        id="title"
        type="text"
        style={{
          margin: 10,
          padding: '0.6em 1.2em', // adjusted padding
          borderRadius: 8, // adjusted border radius
          border: '1px solid transparent', // added border
          fontSize: '1em', // adjusted font size
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a', // adjusted background color
          color: '#fff', // adjusted text color
        }}
        placeholder="Title.."
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        id="desc"
        style={{
          margin: 10,
          padding: '0.6em 1.2em', // adjusted padding
          borderRadius: 8, // adjusted border radius
          border: '1px solid transparent', // added border
          fontSize: '1em', // adjusted font size
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a', // adjusted background color
          color: '#fff', // adjusted text color
        }}
        placeholder="Description.."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button
        className="add-button"
        style={{
          margin: 10,
          padding: '0.6em 1.2em', // adjusted padding
          borderRadius: 8, // adjusted border radius
          border: '1px solid transparent', // added border
          fontSize: '1em', // adjusted font size
          fontWeight: 500,
          fontFamily: 'inherit',
          backgroundColor: '#1a1a1a', // adjusted background color
          color: '#fff', // adjusted text color
          cursor: 'pointer', // added cursor
          transition: 'border-color 0.25s', // added transition
        }}
        onClick={handleAddTodo}
      >
        ADD TODO
      </button>
    </div>
  );
}
