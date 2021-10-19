import { Container } from "@material-ui/core";
import React from "react";
import Button from "./UI/Button";

export default function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <>
      <Container>
        <h2>Your Todo's</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <Button text="Edit" onClick={() => editTodo(todo)} />
              {""}
              <Button text="Delete" onClick={() => deleteTodo(todo.id)} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
