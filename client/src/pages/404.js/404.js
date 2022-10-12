import React from "react";
import "./404.scss";

const PageNotFound = () => {
  // alert("Page not Found");
  return (
    <div className="notfound">
      <img src={require("../../assets/notfound.png")} alt="" />
      <p>404 PAGE NOT FOUND</p>
    </div>
  );
};

export default PageNotFound;

// <h3
//   style={{
//     position: "absolute",
//     bottom: "0",
//     left: "50%",
//     transform: "translateX(-50%)",
//     color: "white",
//     fontFamily: "Arial",
//     backgroundColor: "black",
//     padding: "0.8rem 0.8rem 0 0.8rem",
//     borderRadius: "1rem 1rem 0 0",
//   }}
// >
//   404 PAGE NOT FOUND
// </h3>;
