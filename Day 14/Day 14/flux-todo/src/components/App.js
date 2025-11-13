// src/components/App.js
import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoStore from "../stores/TodoStore";

function App() {
  const [todos, setTodos] = useState(TodoStore.getAll());

  useEffect(() => {
    const onChange = () => setTodos([...TodoStore.getAll()]);
    TodoStore.addChangeListener(onChange);
    return () => TodoStore.removeChangeListener(onChange);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flux Todo List</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
