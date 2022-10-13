import React from "react";
import Header from "../../components/header/Header";

function Careers() {
  return (
    <div className="form-bg">
      <form>
        <p>
          Welcome to Toonland careers. Kindly fill the below form, we will get
          back to your entered Emial ID.
        </p>

        <label>FullName</label>
        <input type="text" placeholder="FullName" />

        <label>Email</label>
        <input type="text" placeholder="Email" />

        <label>Phone Number</label>
        <input type="number" placeholder="Phone Number" />

        <label>Gender</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p htmlFor="html">Male</p>
          <input type="radio" id="html" name="fav_language" value="HTML" />

          <p htmlFor="css">Female</p>
          <input type="radio" id="css" name="fav_language" value="CSS" />
        </div>

        <label>Age</label>
        <input type="number" placeholder="Age" />

        <label>City</label>
        <input type="text" placeholder="City" />

        <label>Total experience(in years)</label>
        <input type="text" placeholder="Total experience" />

        <label>Current Company</label>
        <input type="text" placeholder="Current Company" />

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

        <label>Attach Resume</label>
        <input type="file" placeholder="Attach Resume" />

        <label>Additional information</label>
        <textarea type="text" placeholder="Anything else you want to share" />

        <button>Apply</button>
      </form>
    </div>
  );
}

export default Careers;
