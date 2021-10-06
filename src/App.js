import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = (enteredTodo) => {
    setTodos((prevTodos) => [...prevTodos, enteredTodo]);
  };

  return (
    <div className="App">
      {/* Add todo */}
      <AddTodo getTodo={getTodo} />
      {/* Todo list*/}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
