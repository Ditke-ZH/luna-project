import { useState } from "react";
import Button from "../../components/Button/Button";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const [emailValue, setEmailValue] = useState("");
  const [signUpSteps, setSignUpSteps] = useState(1);
  const [emaiVerification, setEmailverification] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [errorMessage, setErroMessage] = useState("");

  const handelSubmitEmail = e => {
    e.preventDefault();
    axios.post(
      `${import.meta.env.VITE_API_BASEURL}/backend/api/registration/`,
      {
        email: emailValue,
      }
    );
    console.log(emailValue);
    setSignUpSteps(signUpSteps + 1);
  };

  const handelVerificationFrom = e => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setErroMessage("Password doesn't match");
      return;
    }

    const userData = {
      userEmail: emaiVerification,
      username: userName,
      userlocation: location,
      password: password,
    };
    axios.post("http://localhost:5173/backend/api/registration/validate/", {
      userData,
    });

    console.log(emailValue);
    setSignUpSteps(3);
  };

  return (
    <main className="signUp-page-container">
      <h1 className="page-title">
        {signUpSteps == 1 || signUpSteps == 2 ? "Registration" : "Verification"}
      </h1>
      {signUpSteps == 1 && (
        <form onSubmit={handelSubmitEmail} className="signup-form-container">
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
      )}
      {signUpSteps == 2 && (
        <>
          <p className="signUp-message ">
            Thanks for your registration. Our hard working monkeys are preparing
            a digital message called E-Mail that will be sent to you soon. Since
            monkeys arent good in writing the message could end up in you junk
            folder. Our apologies for any inconvienience.thank for{" "}
          </p>
          <Button
            type="submit"
            onClickFunction={() => setSignUpSteps(signUpSteps + 1)}
          >
            Verify
          </Button>
        </>
      )}
      {signUpSteps == 3 && (
        <form
          onSubmit={handelVerificationFrom}
          className="signup-verification-form-container"
        >
          <div className="signup-verification-row">
            <input
              className="input-field signup-input"
              type="email"
              placeholder="E-Mail address"
              value={emaiVerification}
              required
              onChange={e => setEmailverification(e.target.value)}
            />
            <input
              className="input-field signup-input"
              type="text"
              placeholder="Validation code"
              value={validationCode}
              required
              onChange={e => setValidationCode(e.target.value)}
            />
          </div>
          <div className="signup-verification-row">
            <input
              className="input-field signup-input"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              className="input-field signup-input"
              type="text"
              placeholder="Location"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div className="signup-verification-row">
            <input
              className="input-field signup-input"
              type="password"
              placeholder="password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
            <input
              className="input-field signup-input"
              type="password"
              placeholder="Password repeat"
              value={passwordRepeat}
              required
              onChange={e => setPasswordRepeat(e.target.value)}
            />
          </div>
          <p className="signup-erro-message">{errorMessage}</p>
          <Button type="submit">Finish registration</Button>
        </form>
      )}
    </main>
  );
};

export default Signup;
