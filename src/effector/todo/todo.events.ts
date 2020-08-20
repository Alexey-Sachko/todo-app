import { TodoDomain } from "./todo.domain";
import { Todo } from "../../types/todo.type";

export const createTodo = TodoDomain.effect<Todo, Todo>();
