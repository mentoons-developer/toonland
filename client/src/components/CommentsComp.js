import React from "react";
import Styles from "../pages/footer/comments/comments.module.scss";

function CommentsComp({ name, img, content, shared }) {
  return (
    <div>
      <div key={name} className={Styles.container}>
        <div className={Styles.heading}>
          <img src={img} alt="" />
          <div>
            <p>{name}</p>
            <p style={{ color: "red", fontSize: "0.8rem" }}>{shared}</p>
          </div>
        </div>
        <p style={{ fontSize: "0.9rem" }}>{content}</p>
      </div>
    </div>
  );
}

export default CommentsComp;
