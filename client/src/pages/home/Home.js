import React, { useEffect, useRef, useState } from "react";
import Styles from "./home.module.scss";
import logo from "../../assets/logo.png";
import greenleft from "../../assets/green-left.png";
import greenright from "../../assets/green-right.png";
import char from "../../assets/characters_walking.png";
import ngina from "../../assets/ngina.png";
import topbranch from "../../assets/top_branch.png";
import what1 from "../../assets/what1.png";
import what2 from "../../assets/what2.png";
import audiostories from "../../assets/audio-stories.png";
import comics from "../../assets/stella-bella.png";
import toonlandmovies from "../../assets/toonland-movies.png";
import workshops from "../../assets/workshops.png";
import toonmusic from "../../assets/lulu.png";
import theatre from "../../assets/hometheatre.png";
import theatrebg from "../../assets/theatre-new.png";
import librarybg from "../../assets/library-new.png";
import library from "../../assets/explainer/library.png";
import mall from "../../assets/explainer/toon-mall.png";
import mallbg from "../../assets/mall-bg.png";
import thankyou from "../../assets/thankyou.png";
import comingsoon from "../../assets/comingsoon.png";
import memeday from "../../assets/memeday.png";

import pauseBtn from "../../assets/pause.png";
import playBtn from "../../assets/play.png";

import bgMusic from "../../assets/toonlandmusic.mpeg";

import { Link, useNavigate } from "react-router-dom";

function Home() {
  const dateRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();
      dateRef.current.innerHTML = date;
      timeRef.current.innerHTML = time;
    }, 1000);
  });

  const [hide, setHide] = useState(null);
  const [hide1, setHide1] = useState(null);

  const navigate = useNavigate();

  const handleShow = () => {
    setHide((prev) => !prev);
  };
  const handleShow2 = () => {
    setHide1((prev) => !prev);
  };

  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const homeVideoRef = useRef(null);
  useEffect(() => {
    homeVideoRef.current.addEventListener("playing", () => {
      setPlaying(false);
    });
  }, [playing]);

  const bgMusicImgRef = useRef(null);

  const bgMusicRef = useRef(null);

  const [playBgMusic, setPlayBgMusic] = useState(false);

  const videohandleClick = () => {
    setPlayBgMusic(false);
  };

  useEffect(() => {
    homeVideoRef.current.addEventListener("playing", () => {
      setPlayBgMusic(false);
    });
  }, []);

  const handleClickBgMusic = () => {
    setPlayBgMusic((prev) => !prev);

    homeVideoRef.current.pause();
  };

  useEffect(() => {
    if (playBgMusic) {
      bgMusicRef.current.play();
      bgMusicImgRef.current.src = pauseBtn;
    } else {
      bgMusicRef.current.pause();
      bgMusicImgRef.current.src = playBtn;
    }
  }, [playBgMusic]);

  return (
    <div>
      <div>
        <img
          style={{
            position: "fixed",
            cursor: "pointer",
            zIndex: "99",
            maxWidth: "3rem",
            borderRadius: "50%",
            background: "white",
            padding: "0.4rem",
            bottom: 10,
            right: 10,
          }}
          onClick={handleClickBgMusic}
          ref={bgMusicImgRef}
          alt=""
        />
      </div>

      <div className={Styles.curtain}>
        <div className={Styles.left}></div>
        <div className={Styles.right}></div>
      </div>

      <div className={Styles.pg1}>
        <img className={Styles.logo} src={logo} alt="home bg" />
        <img
          onClick={handleShow}
          className={Styles.greenleft}
          src={greenleft}
          alt="green leaf"
        />
        <img
          onClick={handleShow2}
          className={Styles.greenright}
          src={greenright}
          alt="green leaf"
        />
        <img className={Styles.char} src={char} alt="illustrated characters" />
        <img className={Styles.ngina} src={ngina} alt="nagina snake" />
        <img className={Styles.topbranch} src={topbranch} alt="green branch" />
        <img
          onClick={handleShow}
          className={Styles.what1}
          src={what1}
          alt="what"
        />
        <img
          onClick={handleShow2}
          className={Styles.what2}
          src={what2}
          alt="what"
        />
        <video onClick={videohandleClick} ref={homeVideoRef} controls>
          <source
            type="video/mp4"
            src="https://firebasestorage.googleapis.com/v0/b/toonland-1007a.appspot.com/o/videos%2Fhome_video.MP4?alt=media&token=4fec2b07-3a02-4e9c-bce4-6185a8689d49"
          />
        </video>
        <div className={Styles.date}>
          <div ref={timeRef}></div>
        </div>
      </div>

      <div className={Styles.pg2}>
        <div className={Styles.card}>
          <h4 ref={dateRef}> </h4>
          <Link to="/toonmall">
            <img src={memeday} alt="Audio stories" />
          </Link>
          <p>The grass is always greener on the other side of the fence.</p>
        </div>
        <div className={Styles.card}>
          <h4>Audio stories</h4>
          <Link to="/audiostory">
            <img src={audiostories} alt="Audio stories" />
          </Link>
          <p>To keep kids safe from social media, internet and gadgets</p>
        </div>
        <div className={Styles.card}>
          <h4>Comics</h4>
          <Link to="/comics">
            <img src={comics} alt="Audio stories" />
          </Link>
          <p>Stories about bonding, friendship and high moral values</p>
        </div>
        <div className={Styles.card}>
          <h4>Toon Movies</h4>
          <Link to="/toonmovies">
            <img src={toonlandmovies} alt="Audio stories" />
          </Link>
          <p>Comes with beautifully composed music & illustrations</p>
        </div>
        <div className={Styles.card}>
          <h4>Workshops</h4>
          <Link to="/workshops">
            <img src={workshops} alt="Audio stories" />
          </Link>
          <p>Toonland workshops that improve productivity</p>
        </div>
        <div className={Styles.card}>
          <h4>Toon Music</h4>
          <Link to="/toonmusic">
            <img src={toonmusic} alt="Audio stories" />
          </Link>
          <p>Toonland music will be a journey for young kids.</p>
        </div>
      </div>

      <div className={Styles.pg3}>
        <div className={Styles.theatre}>
          <Link to="/theatre">
            <img src={theatre} alt="theatre" />
          </Link>
        </div>
        <div className={Styles.library}>
          <Link to="/library">
            <img src={library} alt="theatre" />
          </Link>
        </div>
        <img className={Styles.theatrebg} src={theatrebg} alt="theatre" />
        <img className={Styles.librarybg} src={librarybg} alt="theatre" />
      </div>

      <div className={Styles.pg4}>
        <img
          onClick={() => navigate("/buycomics")}
          className={Styles.mall}
          src={mall}
          alt="mall"
        />
        <img className={Styles.mallbg} src={mallbg} alt="mall" />
      </div>

      <div className={Styles.thankyou}>
        <img src={thankyou} alt="thank you" />
      </div>

      <div className={`${Styles.dialog1} ${hide ? Styles.show : Styles.hide}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h3>What is Toonland ? </h3>
          <button onClick={() => setHide(false)}>Close</button>
        </div>
        Toonland is an imaginary place where we have characters based on the 9
        intelligencestheory. Our stories are about friendship, love, bonding,
        sharing, caring, gratitude, and learning. <br />
        <br />
      </div>

      <div className={`${Styles.dialog1} ${hide1 ? Styles.show : Styles.hide}`}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "blue" }}>Why we started Toonland?</p>
          <button onClick={() => setHide1(false)}>Close</button>
        </div>
        Excessive usage of cell phones among children has led to a time where
        pen, pencil, paper and eraser have little value. In a few years, gadgets
        will take over writing habits and autocorrect will ensure that kids
        don’t remember spellings.
        <br /> <br />
        Our efforts are to revive old school methodology of learning like
        comics, knowledge based cards, beautiful music, a platform to interact
        with other kids.
        <br /> <br /> Our vision is to keep the kids occupied with great stories
        with morals. Since modern days stories are filled with violence and
        unacceptable language.
        <br /> <br /> As a parent, if you also feel the same, come and join us
        to create a less cell phone and gadget dependability. Let's bring more
        knowledge than fashionability. Write to us at{" "}
        <a href="/"> mahesh@mentoons.com</a>
        <button>Come & Join Us</button>
      </div>

      <audio loop ref={bgMusicRef}>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default Home;
