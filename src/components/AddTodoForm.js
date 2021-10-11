import React, { useState } from "react";
import Button from "./UI/Button";
import { Container } from "@material-ui/core";

export default function AddTodoForm({
  getTodo,
  isEditing,
  todoTextToUpdate,
  getUpdatedTodo,
  updateTodo,
  cancelEdit,
  submitUpdatedTodo,
}) {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (enteredTodo !== "") {
      getTodo(enteredTodo);
      setEnteredTodo("");
    }
  };

  const getEnteredTodo = (e) => {
    setEnteredTodo(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <Container>
          <h1>A Simple Todo's</h1>
          <form onSubmit={submitUpdatedTodo}>
            <label htmlFor="editTodo">Edit todo: </label>
            <input
              type="text"
              placeholder="Update your todo"
              onChange={getUpdatedTodo}
              value={todoTextToUpdate.text}
            />{" "}
            <button onClick={() => updateTodo(todoTextToUpdate.id)}>
              Update
            </button>{" "}
            <button onClick={cancelEdit}> Cancel </button>
          </form>
        </Container>
      ) : (
        <Container>
          <h1>A Simple Todos</h1>
          <form onSubmit={addTodo}>
            <label htmlFor="editTodo">Add todo: </label>
            <input
              type="text"
              placeholder="Add your todos"
              onChange={getEnteredTodo}
              value={enteredTodo}
            />{" "}
            <Button type="submit" text="Add" />
          </form>
        </Container>
      )}
    </>
  );
}
