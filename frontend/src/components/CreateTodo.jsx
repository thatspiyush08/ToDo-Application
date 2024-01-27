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
    <div className="newTodo">
      <input
        id="title"
        type="text"
        style={{
          margin: 10,
          padding: 10,
          borderRadius: 5,
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
          padding: 10,
          paddingRight: 90,
          borderRadius: 5,
        }}
        placeholder="Description.."
        value={description}
        onChange={handleDescriptionChange}
      />
      <button
        className="card"
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={handleAddTodo}
      >
        ADD TODO
      </button>
    </div>
  );
}
