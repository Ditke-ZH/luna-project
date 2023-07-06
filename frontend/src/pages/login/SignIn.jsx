import { useState } from "react";
import Button from "../../components/Button/Button";
import { axiosLuna } from "../../axios/axiosInstance";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/user";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogIn = e => {
    e.preventDefault();
    const localToken = localStorage.getItem("token");
    if (localToken === null || localToken === undefined) {
      axiosLuna
        .post("/auth/token/", {
          email: email,
          password: password,
        })
        .then(res => {
          if (res.status === 200) {
            const accessToken = res.data.access;
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            setErrorMessage(null);
            dispatch(login(accessToken));
            navigate("/", { replace: true });
          }
        })
        .catch(err => {
          if (err.message == "Request failed with status code 401") {
            setErrorMessage("Your email or password is not correct!");
          }

          console.log(err);
        });
    }
  };

  return (
    <main className="login-page-container">
      <h1 className="page-title">Login</h1>

      <form onSubmit={handelLogIn} className="signup-form-container">
        <input
          className="input-field signup-input"
          type="text"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input-field signup-input"
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
        {errorMessage && <p className="signup-erro-message">{errorMessage}</p>}
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
};

export default SignIn;
