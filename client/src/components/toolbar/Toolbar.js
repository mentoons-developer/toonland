import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "./toolbar.module.scss";
import faq from "../../assets/icons/information.png";
import whatsapp from "../../assets/whatsapp.png";
import members from "../../assets/members.png";
import membership from "../../assets/membership.png";

function Toolbar() {
  const location = useLocation();
  const [style, setStyle] = useState(null);

  const headerRef = useRef();

  useEffect(() => {
    if (location.pathname === "/") headerRef.current.style.display = "none";

    const scrollListen = () => {
      if (location.pathname === "/" && window.scrollY > 500) {
        headerRef.current.style.display = "flex";
        setStyle(true);
      } else if (location.pathname === "/" && window.scrollY < 500) {
        setStyle(false);
        headerRef.current.style.display = "none";
      } else {
        setStyle(true);
      }
    };

    window.addEventListener("scroll", scrollListen);

    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  }, [location.pathname]);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: 0,
        transform: "translateY(-50%",
        zIndex: "99",
      }}
    >
      <div
        ref={headerRef}
        className={`${Styles.toolbar} ${style ? Styles.ok : Styles.notok}`}
      >
        <div className={Styles.tooltip}>
          <Link to="/plans">
            <img src={membership} alt="" />
          </Link>
          <span>Membership</span>
        </div>
        <div className={Styles.tooltip}>
          <a
            href="https://chat.whatsapp.com/BDizk4Ll2fw83pE7aLOvzY"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="" />
            <span>Join Group</span>
          </a>
        </div>
        <div className={Styles.tooltip}>
          <Link to="/faq">
            <img src={faq} alt="" />
          </Link>
          <span>FAQ</span>
        </div>
        <div className={Styles.tooltip}>
          <Link to="/refer">
            <img src={members} alt="" />
          </Link>
          <span>Add friends</span>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
