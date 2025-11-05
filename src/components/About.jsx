import React from 'react';
import Timeline from './Timeline';
import LandingDisplay from './landing-display';
import { Honeycomb, Hexagon } from 'react-honeycomb';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiTypescript,
  SiNextdotjs,
  SiJupyter,
  SiOcaml,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiBootstrap,
  SiSupabase,
  SiOpenai
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';
import { BiLineChart, BiBrain } from 'react-icons/bi';
import './About.css';

const About = () => {
  const skills = {
    frontend: [
      { icon: <SiReact />, name: 'React' },
      { icon: <SiJavascript />, name: 'JavaScript' },
      { icon: <SiTypescript />, name: 'TypeScript' },
      { icon: <SiHtml5 />, name: 'HTML' },
      { icon: <SiCss3 />, name: 'CSS' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiBootstrap />, name: 'Bootstrap' }
    ],
    backend: [
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <FaJava />, name: 'Java' },
      { icon: <SiOcaml />, name: 'OCaml' },
      { icon: <FaCode />, name: 'C' },
      { icon: <SiFlask />, name: 'Flask' }
    ],
    tools: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiDocker />, name: 'Docker' },
      { icon: <SiJupyter />, name: 'Jupyter' },
      { icon: <SiSupabase />, name: 'Supabase' },
      { icon: <SiOpenai />, name: 'Whisper' },
      { icon: <SiPytorch />, name: 'PyTorch' },
      { icon: <SiOpencv />, name: 'OpenCV' },
      { icon: <SiScikitlearn />, name: 'Scikit-learn' },
      { icon: <SiNumpy />, name: 'NumPy' },
      { icon: <SiPandas />, name: 'Pandas' },
      { icon: <BiLineChart />, name: 'Matplotlib' },
      { icon: <BiBrain />, name: 'Stable Baselines' }
    ]
  };

  // Combine all skills into a single array with category information
  const allSkills = [
    ...skills.frontend.map(skill => ({ ...skill, category: 'frontend' })),
    ...skills.backend.map(skill => ({ ...skill, category: 'backend' })),
    ...skills.tools.map(skill => ({ ...skill, category: 'tools' }))
  ];

  const renderSkill = (skill, index) => (
    <Hexagon key={index}>
      <div className={`hexagon-content hexagon-${skill.category}`}>
        <div className="hexagon-icon">{skill.icon}</div>
        <div className="hexagon-name">{skill.name}</div>
      </div>
    </Hexagon>
  );

  return (
    <div className="about">
      <LandingDisplay />
      <div className="about-content">
        {/* History Section */}
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="history-content">
            <p>
              My name is Brandon Vazquez Munoz, and I am a first-generation 
              American and college student studying Computer Science at 
              Cornell University. My family is from Jalisco, Mexico, and that 
              heritage has shaped both my values and my perspective. I grew 
              up working construction, primarily flooring, which taught me 
              the value of patience, hard work, and learning by doing. These 
              are lessons I carry into every environment, whether I am writing 
              code or collaborating with a team.
            </p>
            <p>
              Outside of academics and engineering, I try to stay active, whether 
              that's playing basketball, going to the gym, or just making time to 
              move during a busy week. I have always enjoyed trying new things 
              and being part of a team, even in a recreational setting. In my 
              downtime, I am an avid consumer of movies and television.
            </p>
            <p>
              I also enjoy working with my hands, especially when it comes to building
               computers. Through the Cornell Computer Reuse Association, I have been 
               able to combine that interest with service, helping refurbish and 
               distribute technology to organizations in need.
            </p>
            <p>
              At the core of everything I do is a genuine interest in building, not 
              just systems, but habits, connections, and experiences that carry 
              meaning beyond a screen.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="about-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-legend">
            <div className="legend-item">
              <div className="legend-color frontend-color"></div>
              <span>Frontend</span>
            </div>
            <div className="legend-item">
              <div className="legend-color backend-color"></div>
              <span>Backend</span>
            </div>
            <div className="legend-item">
              <div className="legend-color tools-color"></div>
              <span>Tools & Others</span>
            </div>
          </div>
          <div className="skills-container">
            <Honeycomb
              columns={6}
              size={80}
              items={allSkills}
              renderItem={renderSkill}
            />
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