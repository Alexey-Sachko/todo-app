import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTodo } from "./effector/todo/todo.events";
import { TodosApi } from "./api/TodosApi";

createTodo.use(TodosApi.createTodo);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
