import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("LOGIN DATA");
    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem("auth", true);
    navigate("/todo");
  };

  const goToTodo = () => {
    localStorage.setItem("auth", true);
    navigate("/todo");
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
         No Account  <Link to="/signup">Signup</Link>
      </p>

      
      <p
        style={{ color: "#38bdf8", cursor: "pointer" }}
        onClick={goToTodo}
      >
        Go to Todo
      </p>
    </div>
  );
}
