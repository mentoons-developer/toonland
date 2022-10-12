import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./audioStories.module.scss";
import Header from "../../components/header/Header";
import audiostory from "../../assets/explainer/audio-stories.png";

function AudioStories() {
  return (
    <div>
      <div className="wrapper">
        <div className="contain">
          <img src={audiostory} alt="audio story" />
        </div>

        <div className="container">
          <h4>Listen to our free Audio Stoires</h4>
          <div>
            <span>Don’t share your OTP</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <span>Mobile deaddiction</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <span>Audio stories 3</span>
            <audio controls>
              <source src="horse.mp3" type="audio/mpeg" />
            </audio>
          </div>

          <p style={{ textAlign: "center" }}>Buy 5 Audio Stories @ ₹49</p>

          <Link to="/plans">
            <button>Buy Now</button>
          </Link>
        </div>

        <div className="container">
          <p style={{ textAlign: "center" }}>
            If you are a parent and if your kid has great voice and storytelling
            ability, Kindly submit the form below :
          </p>
          <button>Send Audiostory ➡</button>
        </div>
      </div>
    </div>
  );
}

export default AudioStories;
