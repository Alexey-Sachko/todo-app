import React, { useState } from "react";
import { AddTodoFormState } from "./index";

type Props = {
  onAdd: (data: AddTodoFormState) => void;
};

const AddTodo = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ title, text });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>
          Title{" "}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Text <input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default AddTodo;
