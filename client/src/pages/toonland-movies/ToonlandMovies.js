import React, { useEffect } from "react";
import board from "../../assets/board.png";
import Styles2 from "./toonlandmovies.module.scss";
import illustratedStories from "../../assets/illustrated-stories.png";
import toonmovies from "../../assets/explainer/toon-movies.png";

import { Link } from "react-router-dom";

function ToonlandMovies() {
  return (
    <div>
      <div className="wrapper">
        <div className="contain">
          <img src={toonmovies} alt="audio story" />
        </div>

        <div className="container">
          <h4>View our characters</h4>
          <div>
            <iframe
              src="https://www.youtube.com/embed/LG8brAlJXpk"
              title="YouTube video player"
            ></iframe>
          </div>
          <h4>Fifi breaks the guitar.</h4>
          <div>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fguitarbreaks.mp4?alt=media&token=57a70360-04ba-4844-896e-087d1e7e83c6"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        <div className="container">
          <div style={{ textAlign: "left" }} className={Styles2.desshow}>
            <p>
              Our illustrated stories are based on an imaginary place named
              Toonland.
            </p>
            <p>
              All our characters are based on the “Nine Human Intelligence
              theory”.
            </p>
          </div>
          <Link to="/plans">
            <button>₹199 (inaugural offer) </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ToonlandMovies;
