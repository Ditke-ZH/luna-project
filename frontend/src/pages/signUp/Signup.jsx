import { useState } from "react";
import Button from "../../components/Button/Button";
import "./signup.css";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("");
  const handelSubmit = e => {
    e.preventDefault();
    console.log(emailValue);
  };
  return (
    <main className="signUp-page-container">
      <h1 className="page-title">Registration</h1>
      <form onSubmit={handelSubmit} className="signup-form-container">
        <input
          className="input-field signup-input"
          type="email"
          placeholder="E-Mail address"
          value={emailValue}
          required
          onChange={e => setEmailValue(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
    </main>
  );
};

export default Signup;
