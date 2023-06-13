import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [is_married, setMarried] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      gender,
      password,
      age,
      city,
      is_married,
    };
    axios.post("http://localhost:2525/users/register", payload).then((res) => {
      alert("user registered");
      navigate("/login");
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="write your name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <input
        type="text"
        value={gender}
        placeholder="write your gender"
        onChange={(e) => setGender(e.target.value)}
      />
      <input
        type="number"
        value={age}
        placeholder="write your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={city}
        placeholder="write your city"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="boolean"
        value={is_married}
        placeholder="martial status"
        onChange={(e) => setMarried(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Signup;
