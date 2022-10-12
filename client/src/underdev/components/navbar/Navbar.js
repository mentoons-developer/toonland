import React from "react";
import Styles from "./navbar.module.scss";
import logo from "../../../assets/under-dev/logo.png";
import comic from "../../../assets/under-dev/comic.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { username } = useSelector((state) => state.user.currentUser) || "";
  return (
    <>
      <nav>
        <Link to="/" className={Styles.logo}>
          <img src={logo} alt={logo} />
        </Link>
        <ul>
          <li>
            <Link to="/explore/mall">
              <p> Comics</p>
              <img src={comic} alt="comics" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


// <li>
// <Link to="/">
//   <p> contest</p>
//   <img src={contest} alt="contest" />
// </Link>
// </li>
// <li>
// <Link to="/explore/videos">
//   <p> Videos</p>
//   <img src={food} alt="cafeteria" />
// </Link>
// </li>
// <li>
// <Link to="/explore/library">
//   <p> library</p>
//   <img src={park} alt="park" />
// </Link>
// </li>
// <li>
// <Link to="/explore/workshop">
//   <p> workshop</p>
//   <img src={workshop} alt="workshop" />
// </Link>
// </li>
// <li>
// <Link to={`/explore/profile/${username}`}>
//   <p> Profile</p>
//   <img src={profile} alt="profile" />
// </Link>
// </li>
