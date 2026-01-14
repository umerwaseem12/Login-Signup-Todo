import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const addTodo = () => {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="todo-box">
      <h2>Todo List</h2>

      <div className="todo-input">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={addTodo}>Add</button>

        
        
      </div>

      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
