import React, { useState } from "react";
import Button from "./UI/Button";
import { Container } from "@material-ui/core";

export default function AddTodoForm({
  addTodo,
  isEditing,
  todoTextToUpdate,
  getUpdatedTodo,
  updateTodo,
  cancelEdit,
  submitUpdatedTodo,
}) {
  const [enteredTodo, setEnteredTodo] = useState("");

  const submitTodo = (e) => {
    e.preventDefault();
    if (enteredTodo !== "") {
      addTodo(enteredTodo);
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
            <Button
              text="update"
              onClick={() => updateTodo(todoTextToUpdate.id)}
            />
            <Button text="Cancel" onClick={cancelEdit} />
          </form>
        </Container>
      ) : (
        <Container>
          <h1>A Simple Todos</h1>
          <form onSubmit={submitTodo}>
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
