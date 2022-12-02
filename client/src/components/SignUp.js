import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const host = require("../constants").host;

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    console.log(username, email, name, lastname, password, confirmPassword);
    let regexPattern = /[@!#$%]/;
    e.preventDefault();
    if (password !== confirmPassword) {
      setWarning("Passwords do not match!");
    } else if (regexPattern.test(username)) {
      //outputs true, v primeru, da vsebuje special character, drugače false
      setWarning("Username cannot contain special charaters!");
    } else if (password.length < 8) {
      setWarning("Password should be at least 8 characters long!");
    } else {
      const response = await fetch(`${host}/signUp.php`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: name,
          lastname: lastname,
          username: username,
          password: password,
        }),
      });

      if (response.status === 401) {
        setWarning("This email or username already exists!");
      } else if (response.status === 200) {
        navigate("/login");
      }
      //console.log(response.json());
      console.log(response);
      console.log(response.status);
    }
  };

  return (
    <div
      style={{ position: "absolute", left: "42%", right: "30%", top: "10%" }}
    >
      <i className="fab fa-twitter"></i>
      <h1>Join Twitter today</h1>
      <div></div>
      <form method="POST" onSubmit={signUpHandler}>
        {/*action="http://localhost/twitter-clone/server/signUp.php"*/}
        <div>
          <input
            placeholder="Name"
            name="name"
            className="inputOnLog"
            onChange={(e) => setName(e.target.value)}
          ></input>
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
        <span className="warning" style={{ margin: 0 }}>
          {warning}
        </span>
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
