import React from "react";
import Image from "../../images/akeem.jpg";
import Resume from "./Resume.pdf";
// import customButton from "../customButton/customButton";
import Button from "../customButton/customButton";
import "./About.css";

const About = () => {
  return (
    <div className="container aext">
      <div className="row" id="#about">
        <div className=" col-sm-3 col-lg-4">
          <div className="containerImage">
            <img className="SkewImage" width="100%" src={Image} alt="imwage" />
          </div>
        </div>
        <div className="col-sm-2 col-lg">
          <div className="p-2">
            <h4 className="title_border">About Me</h4>
            <p>
              Inventive Front-End Developer adept in web development.
              Effectively combines a logical and analytical approach to solving
              complex problems with the proven capacity to transition ideas from
              the creative concept to practical implementation. Able to
              effectively self- manage during independent projects, as well as
              collaborate in a team setting. keen to apply my skills as well as
              acquire more skills in challenging environment that gives room for
              self-development, recognizes and rewards hardworking.
            </p>
            <div className="contactTouch">
              <Button>
                <a href="mailto:writeshittu@gmail.com"> Hire Me</a>
              </Button>
              <Button>
                <span>
                  <a href={Resume} download>
                    <i className="fas fa-download">DOWNLOAD RESUME</i>
                  </a>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
