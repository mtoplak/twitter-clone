import React from "react";
import Sidebar from "./Sidebar";
import Tweet from "./Tweet";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const host = require("../constants").host;

function Explore() {
  const [tweets, setTweets] = useState();
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
    async function fetchData() {
      let tweets = await fetch(`${host}/explore.php`, {
        method: "GET",
      });
      let data = await tweets.json();
      setTweets(data);
      console.log(data);
    }
    fetchData();
  }, []);

  document.title = "Explore";

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="posts">
        <div>
          <div className="widgets">
            <div className="widgets__input" style={{ width: "590px" }}>
              <span className="material-symbols-outlined widgets__searchIcon">
                search
              </span>
              <input type="text" placeholder="Search Twitter" />
            </div>
            <div
              style={{
                borderBottom: "1px solid #71767b",
                borderTop: "1px solid #71767b",
                marginTop: "10px",
              }}
            >
              <h2 className="feed__header">Trends for you</h2>
              <div className="trendsForYou" style={{ marginTop: "0" }}>
                <div className="tweet__trends">
                  <div className="trend__area">
                    <span>Trending Worldwide</span>
                    <span className="material-symbols-outlined">
                      {" "}
                      more_horiz{" "}
                    </span>
                  </div>
                  <div className="trend__accounts">
                    <span>#WEB3</span>
                  </div>
                  <div className="trend__amount">
                    <span>124k Tweets</span>
                  </div>
                </div>

                <div className="tweet__trends">
                  <div className="trend__area">
                    <span>Sports · Trending in Slovenia</span>
                    <span className="material-symbols-outlined">
                      {" "}
                      more_horiz{" "}
                    </span>
                  </div>
                  <div className="trend__accounts">
                    <span>Skiing</span>
                  </div>
                  <div className="trend__amount">
                    <span>844k Tweets</span>
                  </div>
                </div>

                <div className="tweet__trends">
                  <div className="trend__area">
                    <span>Business & finance · Trending</span>
                    <span className="material-symbols-outlined">
                      {" "}
                      more_horiz{" "}
                    </span>
                  </div>
                  <div className="trend__accounts">
                    <span>#Bitcoin</span>
                  </div>
                  <div className="trend__amount">
                    <span>358k Tweets</span>
                  </div>
                </div>

                <div className="tweet__trends">
                  <div className="trend__area">
                    <span>Politics · Trending</span>
                    <span className="material-symbols-outlined">
                      {" "}
                      more_horiz{" "}
                    </span>
                  </div>
                  <div className="trend__accounts">
                    <span>Ukraine</span>
                  </div>
                  <div className="trend__amount">
                    <span>1.4M Tweets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="feed__header"
          style={{ borderBottom: "1px solid #71767b" }}
        >
          <h2>Explore latest trending tweets</h2>
        </div>
        {tweets &&
          tweets.map((tweet) => {
            return (
              <div key={tweet.id_tweet}>
                <Tweet tweet={tweet} />
              </div>
            );
          })}
      </div>
      <div className="widgets__who_to_follow" style={{ height: "300px" }}>
        <h2>Who To follow</h2>
        <br />

        <div className="Suggested__accounts">
          <img
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
            alt="elonmusk"
          />
          <div className="box">
            <div className="account__headerText">
              <h3>
                Elon Musk
                <span className="material-symbols-outlined account_badge">
                  verified
                </span>
              </h3>
            </div>

            <div className="account__tag">
              <span className="account__headerSpecial"> @elonmusk </span>
            </div>
          </div>
        </div>

        <div className="Suggested__accounts">
          <img
            src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg"
            alt="nasalogo"
          />
          <div className="box">
            <div className="account__headerText">
              <h3>
                NASA
                <span className="material-symbols-outlined account_badge">
                  verified
                </span>
              </h3>
            </div>

            <div className="account__tag">
              <span className="account__headerSpecial"> @NASA </span>
            </div>
          </div>
        </div>
        <div className="widgets">
          <div className="Suggested__accounts">
            <img
              src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
              alt="billGates"
            />
            <div className="box">
              <div className="account__headerText">
                <h3>
                  Bill Gates
                  <span className="material-symbols-outlined account_badge">
                    verified
                  </span>
                </h3>
              </div>

              <div className="account__tag">
                <span className="account__headerSpecial">@BillGates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
