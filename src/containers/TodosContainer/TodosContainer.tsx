import React from "react";
import { useStore } from "effector-react";
import { forward } from "effector";

import { $todos } from "../../effector/todo/todo.store";
import AddTodo, { AddTodoFormState } from "./components/AddTodo";
import { TodoDomain } from "../../effector/todo/todo.domain";
import { createTodo } from "../../effector/todo/todo.events";

const onAdd = TodoDomain.event<AddTodoFormState>();

forward({
  from: onAdd.map((formData) => {
    console.log(formData);
    return {
      ...formData,
      id: Math.round(Math.random() * 10000),
      complete: false,
    };
  }),
  to: createTodo,
});

const TodosContainer = () => {
  const todos = useStore($todos);

  return (
    <div>
      <AddTodo onAdd={onAdd} />
      <ul>
        {todos.map(({ id, title, text, complete }) => (
          <li
            key={id}
            style={{ textDecoration: complete ? "line-through" : undefined }}
          >
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosContainer;
