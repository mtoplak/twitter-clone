import React, { useCallback } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
//import useAuthToken from "./useAuthToken";

const host = require("../constants").host;

function HomePage() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  //const { isValidToken } = useAuthToken();

  const auth = useCallback(() => {
    // pošlji token na strežnik in preveri, ali je veljaven
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
  }, [token, navigate, auth]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default HomePage;
