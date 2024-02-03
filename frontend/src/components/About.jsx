import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";
import gimg from "../assets/gimg.jpg"
import "./about.css"


const About = ({ setScrollToSkills }) => {
  

  const handleScrollToSkills = () => {
    setScrollToSkills(true);
  };
  return (
    <div className="about">
      <div className="left">
        <img src={gimg} alt="me" style={{height: "400px",width:"400px",borderRadius: "50%"}}/>
        <a href="https://www.freepik.com/free-ai-image/3d-illustration-happy-businessman-with-mustache-his-head_88892507.htm#fromView=search&term=random+person+NORMAL+SMILE+FORMAL+TRAPARENT+Background&track=ais_ai_generated&regularType=ai&page=1&position=14&uuid=96736719-b9c6-4f1d-bb56-ba171120c2ed">Image By flatart</a>
      </div>
      <div className="right">
        <div className="data">
          <h3>Who am I?</h3>
          <br />
          <p>Hi! I am Sangmesh J and I am a Developer</p>
        </div>
        <br />
        <br />
        <div className="social">
          <AiFillLinkedin
            style={{ height: "40px", width: "40px", position: "relative" }}
          />
          <AiFillGithub
            style={{ height: "40px", width: "40px", position: "relative" }}
          />
          <AiFillInstagram
            style={{ height: "40px", width: "40px", position: "relative" }}
          />
        </div>
        <br />
        <br />
        <div className="sklbtn" onClick={handleScrollToSkills}>
          Explore Skills
        </div>

      </div>
    </div>
  );
};

export default About;
