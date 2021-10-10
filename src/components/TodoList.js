import { Container } from "@material-ui/core";
import React from "react";
import Button from "./UI/Button";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <>
      <Container>
        <h2>The Todo's</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              {<button onClick={() => deleteTodo(todo.id)}> X </button>}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
