import React from "react";

function Workshop() {
  return (
    <div className="form-bg">
      <form action="http://localhost:3001/contact" method="post">
        <p>Register to our workshops that improve productivity.</p>

        <label htmlFor="name"> Name : </label>
        <input type="text" placeholder="Your name" name="name" required />

        <label>Gender</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <span htmlFor="html">Male</span>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <span htmlFor="css">Female</span>
        </div>

        <label htmlFor="age"> Age : </label>
        <input type="number" placeholder="Age" name="age" required />

        <label htmlFor="city"> City : </label>
        <input type="text" placeholder="City" name="city" required />

        <label htmlFor="email"> Email : </label>
        <input type="email" placeholder="Your email" name="email" required />

        <label htmlFor="phone"> Phone : </label>
        <input
          type="number"
          placeholder="Mobile Number"
          name="phone"
          required
        />

        <label htmlFor="workshops">Choose the Workshop:</label>
        <select name="workshops" id="workshops">
          <option value="Music Workshop">Music Workshop</option>
          <option value="Comics Workshop">Comics Workshop</option>
          <option value="YouTube Workshop">YouTube Workshop</option>
          <option value="Presentation Workshop">Presentation Workshop</option>
          <option value="Writing Workshop">Writing Workshop</option>
          <option value="Finance Management Workshop">
            Finance Management Workshop
          </option>
        </select>

        <button type="submit" id="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Workshop;
