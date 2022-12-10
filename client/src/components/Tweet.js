import React from "react";
import pfp from "../assets/pfp.png";

function Tweet(props) {
  let tweet = props.tweet;
  return (
    <div className="post">
      <div className="post__avatar">
        <img
          src={pfp}
          alt=""
        />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {tweet.name + " " + tweet.lastname + " "}
              <span className="post__headerSpecial">
                <span className="material-symbols-outlined post__badge">
                  verified
                </span>
                @{tweet.username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{tweet.content}</p>
          </div>
        </div>

        <div className="post__footer">
          <span className="material-symbols-outlined cm"> comment </span>
          <span className="material-symbols-outlined rt"> repeat </span>
          <span className="material-symbols-outlined fav">favorite_border</span>
          <span className="material-symbols-outlined cm"> publish </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
