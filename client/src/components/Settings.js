import React from "react";
import Sidebar from "./Sidebar";
import { useState, useEffect, useContext, useCallback } from "react";
import Modal from "react-modal";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const host = require("../constants").host;

function Settings() {
  /*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");*/
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

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

  const logOutHandler = async (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      auth();
    }
  }, [auth, navigate, token]);

  const deleteAcc = async () => {/*
    const response = await fetch(`${host}/deleteAccount.php`, {
      method: "POST",
      body: JSON.stringify({
        token: token,
        //password: password,
      }),
    });*/
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginTop: "50px", marginLeft: "70px" }}>
          <h1>Account information</h1>
          <form method="POST">
            <input
              placeholder="Email or username"
              name="emailOrUsername"
              className="inputOnLog"
              //onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div>
              <input
                placeholder="Password"
                type="password"
                name="password"
                className="inputOnLog"
                //onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div></div>
            <span className="warning" style={{ margin: 0 }}></span>
            <div>
              <input type="submit" value="Save" className="save" />
            </div>
          </form>
          <div>
            <button className="delete" onClick={() => setIsOpen(true)}>
              Delete Account
            </button>
          </div>
        </div>
        <div style={{ marginTop: "50px", marginLeft: "80px" }}>
          <button
            className="delete"
            style={{ float: "right", width: "150px" }}
            onClick={() => logOutHandler()}
          >
            Log Out
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        ariaHideApp={false}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{ float: "right" }}
          className="modalBtn"
        >
          <i style={{ color: "black" }} className="fa-solid fa-xmark"></i>
        </button>

        <div style={{ marginTop: "40px", marginBottom: "30px" }}>
          Do you really want to delete your account?
        </div>
        <button className="currentTab save" onClick={() => setIsOpen(false)}>
          No
        </button>
        <button
          type="submit"
          className="modalSubmit delete"
          onClick={() => deleteAcc()}
        >
          Yes
        </button>
      </Modal>
    </>
  );
}

export default Settings;
