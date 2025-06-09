import React from 'react';
import Timeline from './Timeline';
import LandingDisplay from './landing-display';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiWebpack,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiRedux
} from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = {
    frontend: [
      { icon: <SiReact />, name: 'React' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiTypescript />, name: 'TypeScript' },
      { icon: <SiHtml5 />, name: 'HTML5' },
      { icon: <SiCss3 />, name: 'CSS3' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiRedux />, name: 'Redux' }
    ],
    backend: [
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiPostgresql />, name: 'PostgreSQL' }
    ],
    tools: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiWebpack />, name: 'Webpack' },
      { icon: <SiDocker />, name: 'Docker' }
    ]
  };

  return (
    <div className="about">
      <LandingDisplay />
      <div className="about-content">
        {/* History Section */}
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="history-content">
            <p>
              I'm a passionate software developer with a strong foundation in web development
              and a keen eye for creating elegant solutions to complex problems. My journey
              in technology began with a curiosity about how things work, which evolved into
              a deep love for building and creating digital experiences.
            </p>
            <p>
              With a background in both front-end and back-end development, I strive to create
              applications that are not only functional but also intuitive and user-friendly.
              I believe in writing clean, maintainable code and staying up-to-date with the
              latest technologies and best practices in the industry.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-icons">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-icons">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-icons">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="about-section">
          <h2 className="section-title">Experience</h2>
          <div className="timeline-container">
            <Timeline />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 