import React from "react";
import Image from "../../images/akeem.jpg";
// import customButton from "../customButton/customButton";
import Button from "../customButton/customButton";
import "./About.css";

const About = () => {
  return (
    <div className="container aext">
      <div className="row p-5" id="#about">
        <div className="col col-sm-4">
          <div className="">
            <img
              className="rounded-circle"
              width="250px"
              src={Image}
              alt="imwage"
            />
          </div>
        </div>
        <div className="col col-sm-8">
          <div>
            <h4 className="title_border">About Me</h4>
            <p>
              Just another curious random guy who loves building random things
              for more infromation go ...
            </p>
            <div className="contactTouch">
              <Button> Hire Me</Button>
              <Button>
                <span>
                  <i className="fas fa-download"></i> DOWNLOAD RESUME
                </span>
              </Button>
            </div>
          </div>
          <div className="contactTouch">
            <div className="contactCard text-center">
              <i className="fas fa-phone"></i>
              <p>Phone</p>
              <small>07037860938</small>
            </div>
            <div className=" contactCard text-center">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
              <small>writeshittu@gmail.com</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
