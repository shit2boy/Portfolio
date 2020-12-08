import React, { useState } from "react";
import Button from "../customButton/customButton";
import FormInput from "../customButton/Form-Input";
import "./Contact.css";

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
      <form className="contactForm" onSubmit={onSubmit}>
        <FormInput
          type="text"
          onChange={handleChange}
          name="fullname"
          value={fullname}
          required
          placeholder="Enter Fullname"
        />
        <FormInput
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Enter email"
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
        <Button type="submit">Submit</Button>
      </form>
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
