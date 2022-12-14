import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const host = require("../constants").host;

function Login() {
  const [emailOr, setEmailOr] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const { token, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const logInHandler = async (e) => {
    e.preventDefault();
    console.log(emailOr, password);
    const response = await fetch(`${host}/login.php`, {
      method: "POST",
      body: JSON.stringify({
        emailOrPassword: emailOr,
        password: password,
      }),
    });
    if (response.status === 401) {
      console.log("wrong password or email");
      setWarning("Wrong credentials!");
    } else if (response.status === 200) {
      const token = await response.json();
      console.log(response);
      console.log(token);
      console.log(token.token);
      setToken(token.token);
      localStorage.setItem("token", token.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: token.name, username: token.username })
      );
      navigate("/");
    }
  };

  const auth = useCallback(() => {
    setTimeout(async () => {
      if (!token) {
        console.log("ni ga");
        navigate("/login");
      } else {
        console.log("preverjam");
        const response = await fetch(`${host}/authToken.php`, {
          method: "POST",
          body: JSON.stringify({
            token: token,
          }),
        });
        console.log(response.status);
        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    }, 1000);
  }, [token, navigate]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      auth();
    }
  }, [auth, navigate, token]);

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
        <span className="warning" style={{ margin: 0 }}>
          {warning}
        </span>
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
