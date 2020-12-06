import React, { useEffect } from "react";
import { useState } from "react";
import "./bio.css";

const Bio = (props) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    handleType();
  });

  const handleType = () => {
    const dataText = props.dataText;
    // const { isDeleting, loopNum, text, typingSpeed } = state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );
    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text) {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    setTimeout(handleType, typingSpeed);
  };

  return (
    <h1>
      {props.heading}&nbsp;
      <span>{text}</span>
      <span id="cursor" />
    </h1>
  );
};

Bio.defaultProps = {
  heading: "",
  dataText: [],
};

export default Bio;
