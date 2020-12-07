import React from "react";
import "./customButton.css";

const customButton = ({ children, ...otherProps }) => {
  return <button className="custom-button">{children}</button>;
};

export default customButton;
