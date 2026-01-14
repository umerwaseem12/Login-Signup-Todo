import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // 👇 console mein show hoga
    console.log("SIGNUP DATA");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/login");
  };

  return (
    <div className="auth-box">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already account? <Link to="/login">Login</Link>
      </p>

      {/* 👇 Todo link */}
      <p>
        Direct Todo? <Link to="/todo">Go to Todo</Link>
      </p>
    </div>
  );
}
