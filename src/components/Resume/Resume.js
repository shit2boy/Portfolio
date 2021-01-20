import React from "react";
import "./Resume.css";
import { projects } from "../../data";

const Resume = () => {
  return (
    <div style={{ backgroundColor: "#ebeeee" }}>
      <div className="container">
        <h4 className="prev_project">
          <span> Previous Projects</span>
        </h4>
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-sm-1 col-md-3 mb-3">
              <div class="projectItem">
                <img
                  src={project.image}
                  alt="Avatar"
                  className="showcase_image"
                />
                <div class="middle">
                  <div class="textPortfolio">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
