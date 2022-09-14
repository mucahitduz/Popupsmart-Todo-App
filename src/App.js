import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import User from "./components/User";
import { useTodo } from "./Context/TodoContext";

import "./dist/css/main.css";

function App() {
  const { username, setUsername } = useTodo();
  return (
    <div className="section">
      {localStorage.getItem("Username") ? (
        <div>
          <h3>Welcome {localStorage.getItem("Username")}</h3>
          <Todo />
          <TodoList />
        </div>
      ) : (
        <User />
      )}
    </div>
  );
}

export default App;
