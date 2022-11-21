import React from "react";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <span className="material-symbols-outlined widgets__searchIcon">
          search
        </span>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Trends for you</h2>

        <div className="tweet__trends">
          <div className="trend__area">
            <span>Trending Worldwide</span>
            <span className="material-symbols-outlined"> more_horiz </span>
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
            <span className="material-symbols-outlined"> more_horiz </span>
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
            <span className="material-symbols-outlined"> more_horiz </span>
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
            <span className="material-symbols-outlined"> more_horiz </span>
          </div>
          <div className="trend__accounts">
            <span>Ukraine</span>
          </div>
          <div className="trend__amount">
            <span>1.4M Tweets</span>
          </div>
        </div>
      </div>

      <div className="widgets__who_to_follow">
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
  );
}

export default Widgets;
