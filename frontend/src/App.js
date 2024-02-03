import Header from "./components/Header.jsx";
import "./App.css";
import About from "./components/About.jsx";
import React, { useRef,useState,useEffect } from 'react';
import Skills from "./components/Skills.jsx";


function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const [scrollToSkills, setScrollToSkills] = useState(false);

  useEffect(() => {
   if (scrollToSkills) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToSkills(false);
    }
  }, [scrollToSkills]);
  return (
    <div className="outermost">
      <div className="app">
        <Header />
        <div className="boxes">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
        </div>
      </div>
      <div className="hero">
        <div className="leftdet">
          <h4>Sangmesh J</h4>
          <p>Welcome to my porftolio...</p>
        </div>
        <div className="expbtn" onClick={scrollToAbout}>
          Explore
        </div>
      </div>
      <section ref={aboutRef}>
        <About setScrollToSkills={setScrollToSkills}/>
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      
    </div>
  );
}

export default App;