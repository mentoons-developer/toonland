import React, { useEffect, useRef, useState } from "react";
import Styles from "./interaction.module.scss";
import board from "../../assets/board.png";
import prize from "../../assets/prize.png";
import fifi from "../../assets/fifi1.png";
import contests from "../../assets/contests.png";
import interact from "../../assets/interact.png";
import schools from "../../assets/schools.png";
import auditions from "../../assets/auditions.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import audiostory from "../../assets/explainer/fun-interaction.png";

function Interaction() {
  const Navigate = useNavigate();

  // useEffect(() => {
  //   if (window.scrollHeight > 1000) {
  //     headerRef.current.style.display = "grid";
  //   } else if (window.scrollHeight < 1000) {
  //     headerRef.current.style.display = "none";
  //   }
  // });

  useEffect(() => {
    const allShow = document.querySelectorAll("#show");
    [...allShow].map((item) => (item.style.display = "none"));
  }, []);

  const idshow = useRef(null);

  const [clas, setClas] = useState(null);
  console.log(idshow);

  const allShow = document.querySelectorAll("#show");

  useEffect(() => {
    if (!idshow) {
      console.log("oo");
      idshow.current.adddEventListener("focus", () => {
        console.log("ok");
      });
    }
  }, []);

  return (
    <div>
      <div className="wrapper diff">
        <div className="contain">
          <img src={audiostory} alt="audio story" />
        </div>

        <div className="container">
          <div className={Styles.list}>
            <a href="#sac">
              <img src={schools} alt="" />
              <p>Schools & Colleges</p>
            </a>
            <Link to="/interactWithUs">
              <img src={interact} alt="" />
              <p>Interact with us</p>
            </Link>
            <a href="#ans">
              <img src={auditions} alt="" />
              <p>Auditions & Selections</p>
            </a>
            <a href="#eoc">
              <img src={contests} alt="" />
              <p>Enter our Contests</p>
            </a>
          </div>
        </div>

        <div className="container">
          <div id="eoc" className={Styles.prize}>
            <h4 className={Styles.title}>Enter our contests</h4>
            <p>
              We conduct weekly contests on quiz, characters of Toonland. Join
              our contents and win prizes.
            </p>
            <img style={{ boxShadow: "none" }} src={prize} alt="" />
          </div>
        </div>

        <div className="container">
          <div id="ans">
            <h4 className={Styles.title}>Auditions & Selections</h4>
            <p>
              We will be conducting auditions for kids between 6-12 years on
              topics such as
            </p>
            <ul className={Styles.auditionslist}>
              <li>Storytelling / Talkshows. </li>
              <li>Singing.</li>
              <li>Guitar playing.</li>
              <li>Voice overs.</li>
              <li>Any instrument playing. </li>
              <li>Dancing.</li>
              <li>Drawing.</li>
              <li>Cooking.</li>
              <li>Acting / Drama.</li>
              <li>Story and poem writing. </li>
              <li>Mimicry.</li>
              <li>Sport, Yoga etc.</li>
              {/*<li> ● Any other special skills.</li>*/}
            </ul>

            <button
              onClick={() => {
                alert("We will Announce the contest soon");
              }}
              style={{ zIndex: 97 }}
            >
              Register for contest
            </button>
          </div>
        </div>

        <div className="container">
          <div className={Styles.submitForm}>
            <div>
              <h4 className={Styles.title}>Schools and colleges</h4>
              <p>
                We wish to bring our innovative and productive workshops as far
                and wide as possible.
              </p>
              <button
                onClick={() => {
                  Navigate("/reachtous");
                }}
              >
                Reach to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interaction;

// <div ref={headerRef} className={Styles.header}>
//   <img src={schools} alt="" />
//   <img src={interact} alt="" />
//   <img src={auditions} alt="" />
//   <img src={contests} alt="" />
// </div>;
