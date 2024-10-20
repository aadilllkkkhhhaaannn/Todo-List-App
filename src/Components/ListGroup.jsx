import { useContext } from "react";
import ListItems from "./ListItems";
import TodoContext from "../provider/TodoContext";
const ListGroup = () => {
  const { todos } = useContext(TodoContext);
   if (todos.length === 0) {
     return (
       <h1 className="display-1 text-center text-dark">
         <svg viewBox="25 25 50 50">
           <circle r="20" cy="50" cx="50"></circle>
         </svg>
       </h1>
     );
   }

  return (
    <div className="card my-2 p-3 rounded-0">
      <ul className="my-3 list-group">
        {todos.map((todo) => (
          <ListItems key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
