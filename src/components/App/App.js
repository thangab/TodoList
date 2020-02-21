import React from "react";
import { TodoList } from "../../containers/TodoList";
import { AddTodo } from "../../containers/AddTodo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      App
      <AddTodo />
      <TodoList />
    </div>
  );
}
