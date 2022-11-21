import React from "react";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function MyProfile() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="posts">
        <div style={{padding: "20px"}}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt="pfp"
          className="pfp"
        ></img>{" "}
        <div></div><button id="setUpProfileBtn">Set up profile</button>
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
