import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
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
    </div>
  );
}

export default Sidebar;
