import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpHandler = () =>{
    //signup
  }

  return (
    <div
      style={{ position: "absolute", left: "42%", right: "30%", top: "10%" }}
    >
      <i className="fab fa-twitter"></i>
      <h1>Join Twitter today</h1>
      <div></div>
      <form method="POST" onSubmit={signUpHandler}>
        <div>
          <input placeholder="Name" name="name" className="inputOnLog"></input>
        </div>
        <div>
          <input
            placeholder="Last name"
            name="lastname"
            className="inputOnLog"
            onChange={(e) => setLastname(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Email"
            name="email"
            className="inputOnLog"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Username"
            name="username"
            className="inputOnLog"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="inputOnLog"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>{" "}
        <div>
          <input
            placeholder="Confirm password"
            type="password"
            name="password2"
            className="inputOnLog"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="Sign up" className="sign" />
        </div>
      </form>
      <div>
        Have an account already? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
