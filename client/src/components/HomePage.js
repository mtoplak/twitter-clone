import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function homePage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default homePage;
