import React, { useEffect, useRef, useState } from "react";
import Styles from "./header.module.scss";
import info from "../../assets/icons/information.png";
import logo from "../../assets/icons/logoheader.png";
import audio from "../../assets/icons/audio.png";
import library from "../../assets/icons/library.png";
import music from "../../assets/icons/music.png";
import theatre from "../../assets/icons/theatre.png";
import movie from "../../assets/icons/movies.png";
import workshops from "../../assets/icons/workshops.png";
import mall from "../../assets/icons/mall.png";
import back from "../../assets/icons/back.png";
import comics from "../../assets/icons/comics.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const [style, setStyle] = useState(null);
  const location = useLocation();

  const headerRef = useRef();

  useEffect(() => {
    if (location.pathname === "/") headerRef.current.style.display = "none";

    const scrollListen = () => {
      if (location.pathname === "/" && window.scrollY > 500) {
        headerRef.current.style.display = "flex";
        setStyle(true);
      } else if (window.scrollY > headerRef.current.offsetHeight) {
        setStyle(true);
      } else if (location.pathname === "/" && window.scrollY < 500) {
        setStyle(false);
        headerRef.current.style.display = "none";
      } else {
        setStyle(false);
      }
    };

    window.addEventListener("scroll", scrollListen);

    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div
      ref={headerRef}
      className={`${Styles.header} ${style ? Styles.ok : Styles.notok}`}
    >
      <div style={{ display: "flex", gap: "0.7rem" }}>
        <div className={Styles.back}>
          <img onClick={() => navigate(-1)} src={back} alt="" />
        </div>
      </div>

      <div className={Styles.icons}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/library">
          <img src={library} alt="" />
        </Link>
        <Link to="/toonmusic">
          <img src={music} alt="" />
        </Link>
        <Link to="/theatre">
          <img src={theatre} alt="" />
        </Link>
        <Link to="/audiostory">
          <img src={audio} alt="" />
        </Link>
        <Link to="/comics">
          <img src={comics} alt="" />
        </Link>
        <Link to="/toonmovies">
          <img src={movie} alt="" />
        </Link>
        {/*<Link to="/workshops">
          <img src={workshops} alt="" />
        </Link>
        <Link to="/toonmall">
          <img src={mall} alt="" />
        </Link>*/}
      </div>

      <div>
        <Link to="/faq">
          <img src={info} className={Styles.info} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
// <img src={logo} alt="" className={Styles.logo} />;
