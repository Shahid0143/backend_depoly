import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    axios.post("http://localhost:2525/users/login", payload).then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("successfully signed in");
      navigate("/post");
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={email}
        placeholder="write your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="write your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login In</button>
    </div>
  );
}

export default Login;
