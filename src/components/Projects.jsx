import React from 'react';
import { useEffect } from 'react';
import TimelineItem from './TimelineItem';
import BoatsContainer from './BoatsContainer';
import StarfishContainer from './StarfishContainer';
import './Home.css';

function Projects() {
  return (
    <div className="home">
      <div id="boats-container">
        <BoatsContainer />
      </div>

      <div className="landing-page">
        <div className="title">
          <h1 className="name">Coming Soon</h1>
        </div>
      </div>

      <div className="transition">
        <svg id="wave1" viewBox="0 0 100 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path id="curve1" d="M-5 12 C 20 5, 40 14, 55 14 S 70 7, 103 8.6" />
          <path id="curve2" d="M-5 22 C 20 21, 40 17, 60 18 S 70 17, 103 14" />
        </svg>
      </div>
    </div>
  );
}

export default Projects; 
