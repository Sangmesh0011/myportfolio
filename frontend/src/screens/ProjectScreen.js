import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projects";
import Header from "../components/Header";
import "./projectScreen.css";

const ProjectScreen = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(projects);
  }, []);


  return (
    <div className="project-screen">
      <Header color="white" animation="0s"/>
      <div className="container">
        {projectsData.map((project) => (
          <div className="card">
            <div className="primg"><img src={project.img} alt="logo" /></div>
            <h2>{project.title}</h2>
            <span>{project.description}</span>
            <Link className="linker" to={`/project/${project.id}`}><button>View</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen;
