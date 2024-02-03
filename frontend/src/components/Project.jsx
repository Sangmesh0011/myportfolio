import React from "react";
import "./project.css";

const Project = (project) => {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
