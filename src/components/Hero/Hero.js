import React from "react";
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
          dataText={[
            "WELCOME  !, I'M SHITTU AKEEM ",
            "Front End Developer",
            "I AM AT YOUR SERVICE",
          ]}
        />
        <div className="bio">
          <p className="bio-content">
            Inventive Front-End Developer adept in web development. Effectively
            combines a logical and analytical approach to solving complex
            problems with the proven capacity to transition ideas from the
            creative concept to practical implementation. Able to effectively
            self- manage during independent projects, as well as collaborate in
            a team setting. keen to apply my skills as well as acquire more
            skills in challenging environment that gives room for
            self-development, recognizes and rewards hardworking.
          </p>
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
              <li className=" gmail">
                <a
                  href="https://writeshittu@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i class="fab fa-gmail"></i>
                </a>
              </li>
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
