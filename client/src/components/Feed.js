import React from "react";
import pfp from "../assets/pfp.png";
import { useState } from "react";

const host = require("../constants").host;

function Feed() {
  const [content, setContent] = useState("");

  const tweet = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/tweet.php`, {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        content: content,
      }),
    });
    console.log(response);
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div className="top__tweets">
          <span className="material-symbols-outlined"> auto_awesome </span>
        </div>
      </div>

      <div className="tweetBox">
        <form method="POST" onSubmit={tweet}>
          <div className="tweetbox__input">
            <img src={pfp} alt="" />
            <input
              type="text"
              placeholder="What's Happening?"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="tweetbox__upload">
            <div className="upload__icons">
              <span className="material-symbols-outlined"> imagesmode </span>
              <span className="material-symbols-outlined"> gif_box </span>
              <span className="material-symbols-outlined"> ballot </span>
              <span className="material-symbols-outlined"> mood </span>
              <span className="material-symbols-outlined">
                {" "}
                pending_actions{" "}
              </span>
              <span className="material-symbols-outlined"> location_on </span>
            </div>

            <div className="tweetButton">
              <button
                type="submit"
                className="tweetBox__tweetButton"
                value="Tweet"
              >
                {" "}
                Tweet{" "}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="Unseen__tweets">
        <h2>Show 118 Tweets</h2>
      </div>

      <div className="post">
        <div className="post__avatar">
          <img src={pfp} alt="" />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                ime priimek
                <span className="post__headerSpecial">
                  <span className="material-symbols-outlined post__badge">
                    verified{" "}
                  </span>
                  @username
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>posting some memes</p>
            </div>
          </div>
          <img
            src="https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?crop=16:9"
            alt=""
          />

          <div className="post__footer">
            <span className="material-symbols-outlined cm"> comment </span>
            <span className="material-symbols-outlined rt"> repeat </span>
            <span className="material-symbols-outlined fav">
              favorite_border
            </span>
            <span className="material-symbols-outlined cm"> publish </span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="post__avatar">
          <img src={pfp} alt="" />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                ime priimek
                <span className="post__headerSpecial">
                  <span className="material-symbols-outlined post__badge">
                    verified
                  </span>
                  @username
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>my first tweet. hi</p>
            </div>
          </div>

          <div className="post__footer">
            <span className="material-symbols-outlined cm"> comment </span>
            <span className="material-symbols-outlined rt"> repeat </span>
            <span className="material-symbols-outlined fav">
              {" "}
              favorite_border{" "}
            </span>
            <span className="material-symbols-outlined cm"> publish </span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="post__avatar">
          <img src={pfp} alt="" />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                ime priimek
                <span className="post__headerSpecial">
                  <span className="material-symbols-outlined post__badge">
                    verified{" "}
                  </span>
                  @username
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>elon musk fired twitter employees</p>
            </div>
          </div>
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/10/elon-musk-buys-twitter-GettyImages-1238367009.jpg"
            alt=""
          />

          <div className="post__footer">
            <span className="material-symbols-outlined cm"> comment </span>
            <span className="material-symbols-outlined rt"> repeat </span>
            <span className="material-symbols-outlined fav">
              {" "}
              favorite_border{" "}
            </span>
            <span className="material-symbols-outlined cm"> publish </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
