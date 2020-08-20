import { Todo } from "../types/todo.type";

export class TodosApi {
  public static createTodo(todo: Todo) {
    return new Promise<Todo>((resolve) => setTimeout(resolve, 700, todo));
  }
}
