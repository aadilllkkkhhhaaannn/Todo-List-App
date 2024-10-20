import { useContext, useEffect, useState } from "react";
import TodoContext from "../provider/TodoContext";

const Form = () => {
  // add Todo
  const { addTodo, edit, deleteAllTodos, todos, updateTodo } =
    useContext(TodoContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(), 
    addTodo(text);
    setText("");
    updateTodo({
      id: edit.todo.id,
      text: text,
    });
  };

  // edit Todo

  useEffect(() => {
    if (edit && edit.todo) {
      setText(edit.todo.text);
    }
  }, [edit]);

  return (
    <>
      <div className="card my-2 p-3 rounded-0">
        <form onSubmit={handleSubmit}>
          <div className=" input-group mb-3">
            <input
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
              required
              className="rounded-0 form-control"
              placeholder="Enter Here..."
            />
          </div>
          <button className="btn w-100 btn-sm bg-dark text-light">
            Save Todo
          </button>
        </form>
        <button
          className="btn btn-danger mt-2"
          disabled={todos.length <= 1}
          onClick={deleteAllTodos}
        >
          Delete All Todos
        </button>
      </div>
    </>
  );
};

export default Form;
