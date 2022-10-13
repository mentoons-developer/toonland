import React from "react";
import Styles from "./workshops.module.scss";
import workshop1 from "../../assets/workshop1.jpg";
import workshop2 from "../../assets/workshop2.jpg";
import workshop3 from "../../assets/workshop3.jpg";
import workshop4 from "../../assets/workshop4.jpg";
import workshops from "../../assets/explainer/workshops.png";
import { useNavigate } from "react-router-dom";

function Workshops() {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="wrapper">
        <div className="contain">
          <img src={workshops} alt="audio story" />
        </div>

        <div
          className="container"
          style={{ maxHeight: "80vh", overflow: "scroll" }}
        >
          <div className={Styles.workshop}>
            <p>Workshop on Youtube</p>
            <img alt="" src={workshop1} />
          </div>
          <div className={Styles.workshop}>
            <p>Workshop on Presentation</p>
            <img alt="" src={workshop2} />
          </div>
          <div className={Styles.workshop}>
            <p>Workshop on Writing</p>
            <img alt="" src={workshop3} />
          </div>
          <div className={Styles.workshop}>
            <p>Workshop on Finance Management</p>
            <img alt="" src={workshop4} />
          </div>
        </div>

        <div className="container">
          <p>Register to our workshops that improve productivity.</p>
          <button
            onClick={() => {
              Navigate("/workshop-form");
            }}
          >
            Register ★
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workshops;
