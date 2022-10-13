import React from "react";
import Styles from "./mall.module.scss";
import mall from "../../assets/malltop.png";

// import audioStories from "../../assets/audio-stories.png";
// import illustratedStories from "../../assets/illustrated-stories.png";
// import stellaBella from "../../assets/stella_bella.png";
// import worhshop from "../../assets/worhshop.png";

import audioStories from "../../assets/audio-stories.png";
import stellaBella from "../../assets/stella-bella.png";
import illustratedStories from "../../assets/toonland-movies.png";
import worhshop from "../../assets/workshops.png";
// import toonmusic from "../../assets/lulu.png";

import merch1 from "../../assets/merch1.png";
import merch2 from "../../assets/merch2.png";
import merch3 from "../../assets/merch3.png";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import toonmall from "../../assets/explainer/toon-mall.png";

function Mall() {
  return (
    <div>
      <div className="wrapper">
        <div className="contain">
          <img src={toonmall} alt="audio story" />
        </div>

        <div className="container">
          <div className={Styles.list}>
            <div>
              <Link to="/audiostory">
                <img src={audioStories} alt="" />
                <p className={Styles.title}>Buy Now</p>
              </Link>
            </div>
            <div>
              <Link to="/toonmovies">
                <img src={illustratedStories} alt="" />
                <p className={Styles.title}>Buy Now</p>
              </Link>
            </div>
            <div>
              <Link to="/workshops">
                <img src={worhshop} alt="" />
                <p className={Styles.title}>Buy Now</p>
              </Link>
            </div>
            <div>
              <Link to="/comics">
                <img src={stellaBella} alt="" />
                <p className={Styles.title}>Buy Now</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={Styles.list2}>
            <p>Announcing launch of T-shirts, Mugs & labels</p>
            <div className={Styles.imgs}>
              <img src={merch3} alt="" />
              <img src={merch1} alt="" />
              <img src={merch2} alt="" />
            </div>

            <p>
              We conduct weekly contests on quiz, characters of Toonland. Join
              our contests and win prizes.
            </p>

            <button
              onClick={() => {
                alert("We will anounce the Contest!");
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mall;
