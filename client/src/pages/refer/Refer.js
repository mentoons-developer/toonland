import React from "react";
import copy from "../../assets/icons/copy.png";
// import whatsapp from "../../assets/whatsapp.png";
// import instagram from "../../assets/instagram.png";
// import youtube from "../../assets/youtube.png";
// import facebook from "../../assets/facebook.png";
// import socialmedia from "../../assets/socialmedia.png";

import instagram from "../../assets/socialmedia/instagram.png";
import youtube from "../../assets/socialmedia/youtube.png";
import facebook from "../../assets/socialmedia/facebook.png";
import socialmedia from "../../assets/socialmedia.png";
import twitter from "../../assets/socialmedia/twitter.png";
import linkedin from "../../assets/socialmedia/linkedin.png";
import whatsapp from "../../assets/socialmedia/whatsapp.png";

import Styles from "./refer.module.scss";

function Refer() {
  const text = () => {
    navigator.clipboard.writeText("https://toonland.in/");
    alert("Link copied");
  };
  const text2 = () => {
    navigator.clipboard.writeText("https://whatsapp.com/");
    alert("Link copied");
  };
  const text3 = () => {
    navigator.clipboard.writeText("https://instagram.com/");
    alert("Link copied");
  };
  const text4 = () => {
    navigator.clipboard.writeText("https://youtube.com/");
    alert("Link copied");
  };
  const text5 = () => {
    navigator.clipboard.writeText("https://facebook.com/");
    alert("Link copied");
  };

  return (
    <div className={Styles.wrapper}>
      <h4 style={{ margin: "auto 2rem" }}>
        Share toonland website to your friends
      </h4>

      <div className={Styles.icons}>
        <img onClick={text2} src={whatsapp} alt="" />
        <img onClick={text3} src={instagram} alt="" />
        <img onClick={text4} src={youtube} alt="" />
        <img onClick={text5} src={facebook} alt="" />
        <img onClick={text5} src={linkedin} alt="" />
        <img onClick={text5} src={twitter} alt="" />
      </div>

      <div className={Styles.clip}>
        <p>toonland.in</p>
        <img onClick={text} src={copy} alt="" />
      </div>
    </div>
  );
}

export default Refer;
