import React from "react";
import { TodosList } from "../../containers/TodosList";
import { Filters } from "../../containers/Filters";
import { AddTodo } from "../../containers/AddTodo";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Filters />
      <AddTodo />
      <TodosList />
    </div>
  );
}
