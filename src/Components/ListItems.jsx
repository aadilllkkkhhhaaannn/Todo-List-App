import { useContext } from "react";
import TodoContext from "../provider/TodoContext";
import { MdDelete, MdModeEdit } from "react-icons/md";

const ListItems = ({ todo }) => {
  const { deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <>
      <li class="list-group-item d-flex justify-content-between rounded-0 align-items-center">
        {todo.text}
        <span>
          <button class="btn m-1 btn-sm" onClick={() => editTodo(todo)}>
            <i class="shadow fa-regular fa-pen-to-square"></i>{" "}
          </button>
          <button class="btn btn-sm" onClick={() => deleteTodo(todo.id)}>
            <i class="fa-solid fa-trash"></i>{" "}
          </button>
        </span>
      </li>
    </>
  );
};

export default ListItems;
