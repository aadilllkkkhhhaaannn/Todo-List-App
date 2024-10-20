import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // delete Todo

  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  //   add Todo

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    setTodos([newTodo, ...todos]);
  };

  //   edit Todo

  const [edit, setEdit] = useState([
    {
      todo: {},
      isEdit: false,
    },
  ]);

  const editTodo = (oldTodo) => {
    setEdit({
      todo: oldTodo,
      isEdit: true,
    });
  };

  //   deleteAllTodos

  const deleteAllTodos = () => {
    setTodos([]);
  };

  // update Todo

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        deleteTodo,
        todos,
        addTodo,
        edit,
        editTodo,
        deleteAllTodos,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
