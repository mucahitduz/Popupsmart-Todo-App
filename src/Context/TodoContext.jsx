import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState("");
  const values = {
    todos,
    todoText,
    username,
    setTodos,
    setTodoText,
    setUsername,
  };
  useEffect(() => {
    axios
      .get("https://63207d54e3bdd81d8efb8db6.mockapi.io/todos")
      .then((res) => setTodos(res.data));
  }, [todos]);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("TodoContext must be used within a provider.");
  }
  return context;
};
