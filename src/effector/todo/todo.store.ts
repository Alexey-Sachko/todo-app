import { Todo } from "../../types/todo.type";
import { TodoDomain } from "./todo.domain";
import { createTodo } from "./todo.events";

const id = (() => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
})();

const initialState: Todo[] = [
  {
    id: id(),
    title: "test",
    text: "test-text",
    complete: false,
  },
];

export const $todos = TodoDomain.store<Todo[]>(
  initialState
).on(createTodo.doneData, (state, todo) => [...state, todo]);
