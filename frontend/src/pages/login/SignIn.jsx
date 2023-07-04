import { useState } from "react";
import Button from "../../components/Button/Button";
import "./signin.css";

const SignIn = () => {
  const handelLogIn = e => {
    e.preventDefault();
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="login-page-container">
      <h1 className="page-title">Login</h1>

      <form onSubmit={handelLogIn} className="signup-form-container">
        <input
          className="input-field signup-input"
          type="text"
          placeholder="Username"
          value={userName}
          required
          onChange={e => setUserName(e.target.value)}
        />
        <input
          className="input-field signup-input"
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
};

export default SignIn;
