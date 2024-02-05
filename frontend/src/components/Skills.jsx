import React from 'react';
import './skills.css';

const Skills = () => {
  const skillsList = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'Redux',
    'Bootstrap',
    'RESTful API',
      'Responsive Design',
    'Firebase'
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
