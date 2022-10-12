import React, { useEffect } from "react";
import ticket from "../../assets/ticket.png";
import Styles from "./theatre.module.scss";
import theatre from "../../assets/explainer/theatre.png";
import { Link } from "react-router-dom";

function Theatre() {
  return (
    <div>
      <div className="wrapper">
        <div className={Styles.contain}>
          <img src={theatre} alt="audio story" />
        </div>

        <div className="container">
          <div>
            <h4>Upcoming releases and videos.</h4>
            <iframe
              src="https://www.youtube.com/embed/_9ibEA3AqDo"
              title="YouTube video player"
            ></iframe>
          </div>

          <div>
            <h4>Making of Toonland video.</h4>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fmaking%20of%20toonland.mp4?alt=media&token=3ac5dcee-e9f4-41e6-847c-caf4e151cf0e"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        <div className="container">
          <p>
            Subscribe to our premium or pro packages to watch our exclusive
            Theatre Videos below.
          </p>

          <ul>
            <li>
              Watch trailers, short <br /> films & music videos
            </li>
            <li>Bloopers</li>
            <li>Behind the scenes</li>
            <li>Our Team videos.</li>
            <li>Team birthday celebrations </li>
            <li>Mall visits of Team</li>
            <li>Employee farewells</li>
            <li>40 seconds product ads.</li>
          </ul>
          <Link to="/plans">
            <button>★ Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Theatre;
