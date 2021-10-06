import { Container } from "@material-ui/core";
import React from "react";
import Button from "./UI/Button";

export default function TodoList({ todos = [] }) {
  // const deleteTodo = (todos, index) => {};

  return (
    <>
      <Container>
        <h2>Your Todo's</h2>
        <ul>
          {todos.map((todo) => (
            <li key={Math.random()}>
              {todo}
              {/* {todo} <Button text={"Remove"} onClick={deleteTodo} /> */}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
