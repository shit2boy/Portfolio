import React from "react";
// import Button from "../customButton/customButton";
import Intro from "../intro/intro";
import NavBar from "../NavBar/NavigationBar";
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="about">
      <NavBar />
      <div className="text-center">
        <Intro
          heading={"Things I want to type:"}
          dataText={["HELLO!,I'M SHITTU AKEEM", "I AM AT YOUR SERVICE"]}
        />
        <div className="bio">
          <p className="bio-content">
            Front End Developer (React. Js). Just another curious random guy who
            loves building random things
            {/* for more infromation go ... */}
          </p>
          {/* <div style={{ textAlign: "center" }}>
            <Button type="button">
              <a
                href="mailto:writeshittu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Let's Talk ...
              </a>
            </Button>
          </div> */}
          <div>
            <ul>
              <li className=" linkedIn">
                <a
                  href="https://www.linkedin.com/in/akeem-shittu-43a5999b/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className=" github">
                <a
                  href="https://github.com/shit2boy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li className=" twitter">
                <a
                  href="https://twitter.com/writeshittu"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              {/* <li className=" gmail">
                <a
                  href="mailto:writeshittu@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="fas fa-envelope"></i>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <span>
          <a href="#about">
            {" "}
            <i className="scrollIcon fas fa-arrow-down fa-2x "></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Hero;
