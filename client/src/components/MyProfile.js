import React from "react";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import pfp from "../assets/pfp.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useCallback } from "react";

const host = require("../constants").host;

function MyProfile() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  const auth = useCallback(() => {
    //na backend pošlji žeton in preveri če je veljaven
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
  }, [token, navigate, auth]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="posts">
        <div style={{ padding: "20px" }}>
          <img src={pfp} alt="pfp" className="pfp"></img> <div></div>
          <button id="setUpProfileBtn">Set up profile</button>
          <div>Ime, priimek</div>
          <div>@username</div>
          <div>joined (datum)</div>
          <div>5 followers 5 following</div>
          <div>Tweets Tweets & replies Media Likes</div>
        </div>
      </div>
      <Widgets />
    </div>
  );
}

export default MyProfile;
