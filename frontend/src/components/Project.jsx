import React from "react";
import { useParams } from "react-router-dom";
import projects from "../assets/projects";
import Header from "../components/Header";
import "./project.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <Header color="wheat" animation="0s" />
      <div className="mainbox">
        <div className="upper">
          <img src={project.img2} alt="img" />
          <div className="title">
            <h1>{project.title}</h1>{" "}
          </div>
          <div className="links">
            <div className="g">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <h2>Github</h2>
              </a>
            </div>
            {project.live ? (
              <div className="l">
                <a href={project.live} target="_blank">
                  <h2>Live</h2>
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="lower">
          <div className="details">
            <h2>Tech Stack : {project.detail1}</h2>
          </div>
          <br />
          <div className="detail2">
            <h2>{project.detail2}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
