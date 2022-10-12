import React from "react";
import Styles from "../home/home.module.scss";
import lulu from "../../assets/lulu.png";
import board from "../../assets/board.png";
import illuButton from "../../assets/illu-button.png";
import narrateButton from "../../assets/play.png";
import Styles2 from "./music.module.scss";
import Header from "../../components/header/Header";
// import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import toonmusic from "../../assets/explainer/toon-music.png";

function Music() {
  return (
    <div>
      <div className="wrapper">
        <div>
          <img src={toonmusic} alt="audio story" />
        </div>

        <div className="container">
          <h4>Listen to Toonland sample music</h4>
          <div>
            <span>Music for concentration</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <span>Study music</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <span>Study music 3</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <p style={{ textAlign: "center" }}>
            Exclusive music of Toonland @ ₹99
          </p>

          <Link to="/plans">
            <button>Subscribe ★</button>
          </Link>
        </div>
        <div className="container">
          <p style={{ textAlign: "center" }}>
            <br />
            Interested in our Music workshops?
            <br />
            <br />
            Introducing music workshops. Children can attend our workshop on
            “How to make their own Music” and release their album/single.
          </p>
          <Link to="/workshops">
            <button>Find out more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Music;
