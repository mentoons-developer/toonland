import React from "react";
import Header from "../../components/header/Header";
import Styles from "./careers.module.scss";

function Careers() {
  return (
    <div style={{ margin: "1rem" }}>
      <form className={Styles.form}>
        <p>
          Welcome to Toonland careers. Kindly fill the below form, we will get
          back to your entered Emial ID.
        </p>
        <div className={Styles.inputGroup}>
          <label>FullName</label>
          <input type="text" placeholder="FullName" />
        </div>

        <div className={Styles.inputGroup}>
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className={Styles.inputGroup}>
          <label>Phone Number</label>
          <input type="number" placeholder="Phone Number" />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div className={Styles.inputGroup}>
            <label>Gender</label>
            <div>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <span htmlFor="html">Male</span>
              </div>
              <div>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <span htmlFor="css">Female</span>
              </div>
            </div>
          </div>
          <div className={Styles.inputGroup}>
            <label>Age</label>
            <input type="number" placeholder="Age" />
          </div>
        </div>

        <div className={Styles.inputGroup}>
          <label>City</label>
          <input type="text" placeholder="City" />
        </div>

        <div className={Styles.inputGroup}>
          <label>Total experience(in years)</label>
          <input type="text" placeholder="Total experience" />
        </div>

        <div className={Styles.inputGroup}>
          <label>Current Company</label>
          <input type="text" placeholder="Current Company" />
        </div>

        <div className={Styles.inputGroup}>
          <label for="role">Select your Role:</label>
          <select name="role" id="role">
            <option value="Illustrator">Illustrator</option>
            <option value="Web Developer">Web Developer</option>
            <option value="SEO/ Digital Marketer">SEO/ Digital Marketer</option>
            <option value="Video Editor/ Videographer">
              Video Editor/ Videographer
            </option>
            <option value="Content writer">Content writer</option>
            <option value="Music Composer">Music Composer</option>
          </select>
        </div>

        <div className={Styles.inputGroup}>
          <label>Attach Resume</label>
          <input type="file" placeholder="Attach Resume" />
        </div>

        <div className={Styles.inputGroup}>
          <label>Additional information</label>
          <textarea type="text" placeholder="Anything else you want to share" />
        </div>
        <button>Apply</button>
      </form>
    </div>
  );
}

export default Careers;
