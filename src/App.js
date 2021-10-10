import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = (enteredTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: enteredTodo,
        id: Math.random(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    const restTodos = todos.filter((todo) => todo.id !== id);
    setTodos(restTodos);
  };
  
  return (
    <div className="App">
      {/* Add todo */}
      <AddTodo getTodo={getTodo} />
      {/* Todo list*/}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
