import React from "react";
import logo from "../../assets/logo.png";
import instagram from "../../assets/socialmedia/instagram.png";
import youtube from "../../assets/socialmedia/youtube.png";
import facebook from "../../assets/socialmedia/facebook.png";
import socialmedia from "../../assets/socialmedia.png";
import twitter from "../../assets/socialmedia/twitter.png";
import linkedin from "../../assets/socialmedia/linkedin.png";
import whatsapp from "../../assets/socialmedia/whatsapp.png";

import Styles from "./footer.module.scss";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <div>
      <div className={Styles.container}>
        <div>
          <ul className={Styles.asd1}>
            <li>
              <img src={logo} alt="" className={Styles.logo} />
            </li>

            <li>
              <Link to="/interaction"> Fun & Interaction</Link>
            </li>
            <li>
              <span> Our Team</span>
            </li>
            <li>
              <Link to="/careers"> Careers</Link>
            </li>
            <li>
              <Link to="/faq"> FAQ</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className={Styles.asd1}>
            <li>
              <p>Subscribe to Toon News</p>
              <div className={Styles.toonnews}>
                <input placeholder="Enter your Email ID" />
                <span>Enter</span>
              </div>
            </li>
            <li>
              <p>Write your Feedback</p>
              <div className={Styles.textare}>
                <textarea placeholder="Write your feedback.." />
                <button>Submit</button>
              </div>
            </li>
          </ul>
        </div>

        <div className={Styles.socialmedia}>
          <div className={Styles.wrapper}>
            <img className={Styles.smboard} src={socialmedia} alt="" />

            <div className={Styles.list}>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
              <img src={whatsapp} alt="" />
              <img src={linkedin} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
