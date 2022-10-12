import React from "react";
// import Styles from "../home/home.module.scss";
import Styles2 from "./comics.module.scss";
import stellaBella from "../../assets/stella_bella.png";
import board from "../../assets/board.png";
import narrateButton from "../../assets/play.png";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import comics from "../../assets/explainer/comics.png";

function Comics() {
  return (
    <div>
      <div className="wrapper diff2">
        <div className="contain">
          <img src={comics} alt="audio story" />
        </div>

        <div className="container">
          <h4>Toonland Comics-workshops</h4>
          <p>
            Workshops on “How to make comic books” - 2 days workshop @ ₹699.
            Attempt our two days workshop and learn how to make your own comic.
          </p>
          <h4>make your own comic book</h4>
          <p>
            If you are unable to attend our workshops, here is our comic book
            with a step-to-step guide on how to create your own comics. Just
            download, print and learn.
          </p>
          <button>Buy ₹49</button>
        </div>

        <div style={{ alignSelf: "center" }} className="container">
          <h4>make your own comics</h4>
          <p>
            By downloading this, you will be able to create any comic of your
            own choice.
          </p>
          <button>Free Download</button>
          <p>
            If you are a comic maker or an Illustrator and if you wish to
            illustrate comics with us.
            <a href="/careers">Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comics;

// <div className={Styles2.comicsWork}>
//   <p>Workshops on “How to make comic books” - 2 days workshop @ 699 Rupees.</p>
//   <p>
//     If you are unable to attend our workshops, download the Comic above at ₹49
//   </p>
//   <HashLink to="/workshops">
//     <button>Register</button>
//   </HashLink>
// </div>;
