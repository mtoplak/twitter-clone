import React from "react";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import pfp from "../assets/pfp.png";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useCallback, useState } from "react";
import Tweet from "./Tweet";

const host = require("../constants").host;

function MyProfile() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const params = useParams();
  const username = params.profile;
  const [userData, setUserData] = useState();
  const [userF, setUserF] = useState({});
  const [userTweets, setUserTweets] = useState([]);
  console.log(userTweets);

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

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`${host}/profile.php`, {
        method: "POST",
        body: JSON.stringify({
          token: token,
          username: username,
        }),
      });
      const data = await response.json();
      console.log(data);
      setUserData(data.user);
      setUserF({ followers: data.followers, followings: data.followings });
      setUserTweets(data.tweets);
    };
    fetchProfile();
  }, [token, username]);

  document.title = username;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="posts">
        <div style={{ padding: "20px" }}>
          <img src={pfp} alt="pfp" className="pfp"></img> <div></div>
          <button id="setUpProfileBtn">Set up profile</button>
          <div style={{ fontWeight: "bold", marginTop: "30px" }}>
            {userData && userData.name + " " + userData.lastname}
          </div>
          <div style={{ color: "grey" }}>@{userData && userData.username}</div>
          <div style={{ color: "grey", marginTop: "10px" }}>
            Joined {userData && userData.date_joined}
          </div>
          <div style={{ color: "grey", marginTop: "10px" }}>
            <span style={{ color: "white" }}>{userF && userF.followers}</span>{" "}
            followers{" "}
            <span style={{ color: "white" }}>{userF && userF.followings}</span>{" "}
            following
          </div>
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                textDecoration: "underline 4px rgb(29, 155, 240)",
              }}
            >
              Tweets
            </span>{" "}
            <span>Tweets & replies</span> <span>Media</span> Likes
          </div>
          <br />
          <div className="post"></div>
          {userTweets &&
            userTweets.map((tweet) => {
              return (
                <div key={tweet.id_tweet}>
                  <Tweet tweet={tweet} user={userData} />{" "}
                  {/*rabimo še ime, priimek, username, time posted*/}
                </div>
              );
            })}
        </div>
      </div>
      <Widgets />
    </div>
  );
}

export default MyProfile;
