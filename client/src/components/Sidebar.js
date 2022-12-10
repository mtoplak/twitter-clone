import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import pfp from "../assets/pfp.png";


function Sidebar() {
  const { token, isLoggedIn } = useContext(UserContext);
  console.log(token);
  console.log(isLoggedIn);
  const navigate = useNavigate();

  const [name] = useState(JSON.parse(localStorage.getItem("user")).name || "");
  const [username] = useState(
    JSON.parse(localStorage.getItem("user")).username || ""
  );

  const navigateToSettings = () => {
    navigate("/settings");
  };

  return (
    <>
      <div className="sidebar">
        <Link to={"/"}>
          <i className="fab fa-twitter"></i>
        </Link>

        <div className="sidebarOption active">
          <span className="material-symbols-outlined">home</span>
          <Link to={"/"} className="styledLink">
            <h1>Home</h1>
          </Link>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">tag</span>
          <Link to={"/explore"} className="styledLink">
            <h2>Explore</h2>
          </Link>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">notifications</span>
          <h2>Notifications</h2>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">mail</span>
          <h2>Messages</h2>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">bookmark</span>
          <h2>Bookmarks</h2>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">article</span>
          <h2>Lists</h2>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">person</span>
          <Link to={"/:profile"} className="styledLink">
            <h2>Profile</h2>
          </Link>
        </div>

        <div className="sidebarOption">
          <span className="material-symbols-outlined">pending</span>
          <h2>More</h2>
        </div>

        <button className="sidebar__tweet">Tweet</button>
        <div>
          <div className="tweetbox__input">
            <Link to={`/${username}`}>
              <img src={pfp} alt="pfp" />
              <div
                style={{
                  marginLeft: "15px",
                  marginRight: "30px",
                  float: "right",
                }}
              >
                <div style={{ display: "block" }} className="name">
                  {name}
                </div>
                <div style={{ display: "block" }} className="username">
                  @{username}
                </div>
              </div>
            </Link>
            <div style={{ float: "right" }}>
              <span
                style={{
                  color: "white",
                  float: "right",
                  display: "inline",
                  cursor: "pointer",
                }}
                className="material-symbols-outlined fa-3x"
                onClick={() => navigateToSettings()}
              >
                more_horiz
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
