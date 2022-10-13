import React from "react";

function ReachToUs() {
  return (
    <div className="form-bg">
      <form action="http://localhost:3001/contact" method="post">
        <p>If you represent any school, you can just submit the form below.</p>

        <label htmlFor="school name"> School / College Name : </label>
        <input
          type="text"
          placeholder="School / College Name"
          name="school name"
          required
        />

        <label htmlFor="Designation"> Designation : </label>
        <input
          type="text"
          placeholder="Designation"
          name="Designation"
          required
        />

        <label htmlFor="Full Name">Full Name : </label>
        <input type="text" placeholder="Full Name" name="Full Name" required />

        <label htmlFor="city"> City : </label>
        <input type="text" placeholder="City" name="city" required />

        <label htmlFor="Email"> Email : </label>
        <input type="email" placeholder="Email" name="email" required />

        <label htmlFor="Phone Number"> Phone Number : </label>
        <input type="number" placeholder="Email" name="Phone Number" required />

        <label htmlFor="workshop"> Add a note : </label>
        <textarea></textarea>

        <button type="submit" id="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReachToUs;
