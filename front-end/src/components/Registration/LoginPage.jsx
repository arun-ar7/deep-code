import React, { useRef, useState } from "react";
import axios from "axios";
import "../styles/loginStyles.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isNewRegistration, setIsNewRegistration] = useState(false);

  //navigate
  const navigate = useNavigate();

  //refs
  const loginEmail = useRef("");
  const loginPassword = useRef("");
  const registerEmail = useRef("");
  const registerPassword = useRef("");
  const registerConfirmPassword = useRef("");

  //functions
  function toggleDisplay() {
    setIsNewRegistration((prev) => !prev);
  }

  //loginFunction
  function makeLogin() {
    const config = {
      method: "post",
      url: "http://localhost:8080/login",
      data: {
        email: loginEmail.current.value,
        password: loginPassword.current.value,
      },
    };
    axios(config)
      .then((data) => {
        console.log("Success : ", data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Failed : ", err.response.data.message);
        alert("login failed : " + err.response.data.message);
      });
  }
  function makeRegistration() {
    const config = {
      method: "post",
      url: "http://localhost:8080/register",
      data: {
        email: registerEmail.current.value,
        password: registerPassword.current.value,
        confirmPassword: registerConfirmPassword.current.value,
      },
    };
    axios(config)
      .then((data) => {
        console.log("Success : ", data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Failed : ", err);
        alert("Registration Failed : " + err.response.data.message);
      });
  }

  return (
    <div className="authContainer">
      <div
        className={`loginContainer ${isNewRegistration ? "" : "displayNone"}`}
      >
        <h3>Login Now</h3>
        <div>
          <input
            className="authInput"
            placeholder="Email Id"
            type="email"
            ref={loginEmail}
            name="email"
            id="email"
          />
        </div>
        <div>
          <input
            className="authInput"
            placeholder="Password"
            type="password"
            ref={loginPassword}
            name="password"
            id=""
          />
        </div>
        <div>
          <input
            className="authInput authInputButton"
            type="button"
            onClick={makeLogin}
            value="Login"
          />
        </div>
        <div>
          <input
            className="authInput authInputButton"
            type="button"
            value="Create New Account"
            onClick={toggleDisplay}
          />
        </div>
      </div>
      <div
        className={`loginContainer ${isNewRegistration ? "displayNone" : ""}`}
      >
        <h3>Register</h3>
        <input
          className="authInput"
          placeholder="Name"
          type="text"
          ref={registerConfirmPassword}
          id=""
        />
        <input
          className="authInput"
          placeholder="Email Id"
          type="text"
          ref={registerEmail}
          name="email"
          id="email"
        />
        <input
          className="authInput"
          placeholder="Phone Number"
          type="password"
          ref={registerConfirmPassword}
          id=""
        />
        <input
          className="authInput"
          placeholder="Password"
          type="password"
          ref={registerPassword}
          name="password"
          id=""
        />
        <input
          className="authInput"
          placeholder="Confirm Password"
          type="password"
          ref={registerConfirmPassword}
          id=""
        />
        <input
          className="authInput authInputButton"
          type="button"
          onClick={makeRegistration}
          value="Register"
        />

        <input
          className="authInput authInputButton"
          type="button"
          value="Already hava account?"
          onClick={toggleDisplay}
        />
      </div>
    </div>
  );
};

export default LoginPage;
