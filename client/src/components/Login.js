import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [emailOr, setEmailOr] = useState("");
  const [password, setPassword] = useState("");

  const logInHandler = () => {
    //login
  };

  return (
    <div
      style={{ position: "absolute", left: "42%", right: "30%", top: "20%" }}
    >
      <i className="fab fa-twitter"></i>
      <h1>Sign in to Twitter</h1>
      <div></div>
      <form method="POST" onSubmit={logInHandler}>
        <input
          placeholder="Email or username"
          name="emailOrUsername"
          className="inputOnLog"
          onChange={(e) => setEmailOr(e.target.value)}
        ></input>
        <div>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="inputOnLog"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <Link>Forgot password?</Link>
        </div>
        <div>
          <input type="submit" value="Log in" className="sign" />
        </div>
      </form>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
