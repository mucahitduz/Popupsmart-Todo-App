import axios from "axios";
import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const Todo = () => {
  const { todoText, setTodoText } = useTodo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todoText.length > 2) {
      await axios.post("https://63207d54e3bdd81d8efb8db6.mockapi.io/todos", {
        content: `${todoText}`,
      });
      setTodoText("");
    } else {
      alert("A todo must contain at least 3 letters");
    }
  };
  return (
    <form>
      <input
        className="input"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn" type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default Todo;
