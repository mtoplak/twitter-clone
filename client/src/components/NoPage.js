import React from "react";
import Sidebar from "./Sidebar";

function NoPage() {
  return (
    <div>
      <Sidebar />
      <div
        style={{ position: "absolute", left: "42%", right: "25%", top: "20%" }}
      >
        <div className="widgets__input">
          <span className="material-symbols-outlined widgets__searchIcon">
            search
          </span>
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="widgets__input" style={{ backgroundColor: "black" }}>
          Hmm...this page doesn’t exist. Try searching for something else.
        </div>
      </div>
    </div>
  );
}

export default NoPage;
