import React, { useEffect } from "react";
import board from "../../assets/board.png";
import know1 from "../../assets/know1.png";
import know2 from "../../assets/know2.png";
import Styles from "./library.module.scss";
import library from "../../assets/explainer/library.png";

function Library() {
  return (
    <div>
      <div className="wrapper">
        <div className="contain">
          <img src={library} alt="audio story" />
        </div>

        <div className="container">
          <div className={Styles.free}>
            <p>
              What doesn't dent at 5, doesn't bent at 50, our Knowledge cards
              helps you develop your knowledge.
            </p>
            <img src={know2} alt="" />
            <p>Our free knowledge card. Click on image to download.</p>
            <div className={Styles.imgs}>
              <img src={know1} alt="" />
              <img src={know1} alt="" />
              <img src={know1} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <p>
              Inventions such as matchbox, knife, glass bottle, stapler, post
              stick notes and so on.
            </p>
            <p>
              We believe that this basic knowledge has to be imparted at a very
              young age.
            </p>
            <p>
              Buy all our 100 Knowledge Cards of Toonlibrary @ 99.( ₹1 per card)
            </p>
          </div>
          <button> ★ Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Library;
