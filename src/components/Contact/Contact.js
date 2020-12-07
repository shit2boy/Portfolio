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

  return (
    <div className="contactForm">
      <form>
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
          //   style={{ width: "100%" }}
          rows="5"
        ></textarea>
        <Button style={{ width: "100%" }} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
