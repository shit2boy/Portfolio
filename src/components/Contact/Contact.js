import React, { useState } from "react";
import GlassmorphismContact from "../Glassmorphism/GlassmorphismContact";
import Button from "../customButton/customButton";
import FormInput from "../customButton/Form-Input";
import "./Contact.css";
import FormWithTransition from "../customButton/FormWithTransition";

const Contact = () => {
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const { fullname, email, message } = contact;
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    // e.peventDefault();
    event.preventDefault();
    setContact({
      fullname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center">
      {/* <GlassmorphismContact/> */}
      <div className="contactForm">
        <form className="contact-container " onSubmit={onSubmit}>
          <FormWithTransition
            type="text"
            onChange={handleChange}
            name="fullname"
            value={fullname}
            required
            label="Enter Fullname"
          />

          <FormWithTransition
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            label="Enter email"
            required
          />
          <textarea
            class="group"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder=" Messages"
            //   style={{ width: "100%" }}
            rows="5"
          ></textarea>
          <div>
            {" "}
            <Button type="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="contactTouch">
        <div className="contactCard text-center">
          <i className="fas fa-phone"></i>
          <p>Phone</p>
          <span>07037860938</span>
        </div>
        <div className=" contactCard text-center">
          <i className="fas fa-envelope"></i>
          <p>Email</p>
          <span>writeshittu@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
