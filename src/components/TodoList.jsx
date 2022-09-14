import axios from "axios";
import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const TodoList = ({ todo }) => {
  const { todos } = useTodo();
  const [editTodo, setEditTodo] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const handleUpdate = async (id, isCompleted) => {
    await axios.put(`https://63207d54e3bdd81d8efb8db6.mockapi.io/todos/${id}`, {
      content: `${editTodoText}`,
      isCompleted,
      id,
    });
  };

  const updateTodo = (todo) => {
    handleUpdate(todo.id);
    setEditTodo(null);
    setEditTodoText("");
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `https://63207d54e3bdd81d8efb8db6.mockapi.io/todos/${id}`
    );
    return res.data;
  };

  const handleComplete = async (id, content, isCompleted) => {
    await axios.put(`https://63207d54e3bdd81d8efb8db6.mockapi.io/todos/${id}`, {
      content,
      isCompleted: !isCompleted,
      id,
    });
  };

  const completeTodo = (todo) => {
    handleComplete(todo.id);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editTodo === todo.id ? (
            <div>
              <input
                className="input"
                type="text"
                onChange={(e) => setEditTodoText(e.target.value)}
                value={editTodoText}
              />
              <button className="btn" onClick={() => updateTodo(todo)}>
                Update
              </button>
            </div>
          ) : (
            <div>
              <button className="btn" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
              <div
                className={`${todo.isCompleted ? "todo--completed" : "todo"}`}
                onClick={() => completeTodo(todo)}
              >
                {todo.content}
              </div>
              <button className="btn" onClick={() => setEditTodo(todo.id)}>
                Update
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
