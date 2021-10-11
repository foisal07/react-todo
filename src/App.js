import TodoList from "./components/TodoList";
import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [todoTextToUpdate, setTodoTextToUpdate] = useState({});

  const getTodo = (enteredTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text: enteredTodo,
        id: new Date().valueOf(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    const restTodos = todos.filter((todo) => todo.id !== id);
    setTodos(restTodos);
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setTodoTextToUpdate({ ...todo });
  };

  const getUpdatedTodo = (e) => {
    setTodoTextToUpdate({ ...todoTextToUpdate, text: e.target.value });
  };

  const updateTodo = (id) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === id ? todoTextToUpdate : todo;
    });
    setTodos(updatedTodo);
    setIsEditing(false);
  };

  const submitUpdatedTodo = (e) => {
    e.preventDefault();
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="App">
      {/* Add todo */}
      <AddTodoForm
        getTodo={getTodo}
        isEditing={isEditing}
        todoTextToUpdate={todoTextToUpdate}
        getUpdatedTodo={getUpdatedTodo}
        updateTodo={updateTodo}
        submitUpdatedTodo={submitUpdatedTodo}
        cancelEdit={cancelEdit}
      />
      {/* Todo list*/}
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
