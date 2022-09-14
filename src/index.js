import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoContextProvider } from "./Context/TodoContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);

reportWebVitals();
