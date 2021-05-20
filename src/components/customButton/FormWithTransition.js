import React from "react";
import "./FormWithTrans.css";

const FormWithTransition = ({ handleChange, label, ...otherProps }) => {
  return (
    <>
      <div className="input_Box">
        <input required onChange={handleChange} {...otherProps} />
        <span className="text">{label}</span>
        <span className="line"></span>
      </div>
    </>
  );
};

export default FormWithTransition;
