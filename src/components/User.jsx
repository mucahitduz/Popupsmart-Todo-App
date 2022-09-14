import React, { useState } from "react";
import { useTodo } from "../Context/TodoContext";

const User = () => {
  const { username, setUsername } = useTodo();
  const [usernameText, setUsernameText] = useState("");

  const handleUser = (e) => {
    e.preventDefault();
    setUsername(usernameText);
    setUsernameText("");
    localStorage.setItem("Username", usernameText);
  };

  return (
    <div>
      <h3>Please enter a username</h3>
      <input
        className="input"
        type="text"
        value={usernameText}
        onChange={(e) => setUsernameText(e.target.value)}
      />
      <button className="btn" onClick={handleUser}>
        Enter
      </button>
    </div>
  );
};

export default User;
