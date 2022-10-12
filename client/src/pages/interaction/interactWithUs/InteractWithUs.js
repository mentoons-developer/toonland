import React from "react";
import Styles from "./interactWithUs.module.scss";
import pro1 from "../../../assets/pro1.jpeg";
import pro2 from "../../../assets/pro2.jpeg";
import pro3 from "../../../assets/pro3.jpeg";

function InteractWithUs() {
  return (
    <div className={Styles.wrapper}>
      <div>
        <p style={{ textAlign: "left", margin: "1.5rem" }}>
          Welcome to our fun and interaction page. Here, parents can interact
          and become friends with other parents. Even kids can connect and make
          friends.
        </p>

        <form>
          <div className={Styles.inputGroup}>
            <label for="interact">What you want to do ?:</label>
            <select name="interact" id="interact">
              <option value="Share my opinions.">Share my opinions.</option>
              <option value="Leave my Ideas.">Leave my Ideas.</option>
              <option value="Interact with other parents and kids.">
                Interact with other parents and kids.
              </option>
              <option value="Open Opinion sharing.">
                Open Opinion sharing.
              </option>
              <option value="Tell us how we can improve.">
                Tell us how we can improve.
              </option>
            </select>
          </div>
          <div className={Styles.inputGroup}>
            <label>Comments</label>
            <textarea type="text" placeholder="Type here..." />
          </div>

          <div className={Styles.inputGroup}>
            <button>Submit</button>
          </div>
        </form>
      </div>

      <div>
        <div className={Styles.commentWrapper}>
          <div className={Styles.commentHeader}>
            <img src={pro1} alt="" />
            <div>
              <p>Cedric</p>
              <span>Has shared their opinion</span>
            </div>
          </div>
          <div className={Styles.comment}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>

        <div className={Styles.commentWrapper}>
          <div className={Styles.commentHeader}>
            <img src={pro2} alt="" />
            <div>
              <p>Akash</p>
              <span>Has shared their ideas</span>
            </div>
          </div>
          <div className={Styles.comment}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>

        <div className={Styles.commentWrapper}>
          <div className={Styles.commentHeader}>
            <img src={pro3} alt="" />
            <div>
              <p>Melvin</p>
              <span>Has suggested to improve</span>
            </div>
          </div>
          <div className={Styles.comment}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractWithUs;
