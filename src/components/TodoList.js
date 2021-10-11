import { Container } from "@material-ui/core";
import React from "react";

export default function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <>
      <Container>
        <h2>Your Todo's</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              {<button onClick={() => editTodo(todo)}> Edit </button>}{" "}
              {<button onClick={() => deleteTodo(todo.id)}> Delete </button>}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
