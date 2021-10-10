import React, { useState } from "react";
import Button from "./UI/Button";
import { Container } from "@material-ui/core";

export default function AddTodo({ getTodo }) {
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
      <Container>
        <h1>Start Adding Your Todos</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add your todos"
            onChange={getEnteredTodo}
            value={enteredTodo}
          />{" "}
          <Button type="submit" text="Add" />
        </form>
      </Container>
    </>
  );
}
