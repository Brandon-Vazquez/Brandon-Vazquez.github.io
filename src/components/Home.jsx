import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail } from 'react-icons/hi';
import LandingDisplay from './landing-display';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <LandingDisplay />
      <div className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image">
                <img src="assets/profile.jpg" alt="Brandon Vazquez" />
              </div>
              <div className="image-backdrop"></div>
            </div>
          </div>
          <div className="hero-text">
            <div className="greeting">
              <span className="greeting-highlight">Hello World!</span>
              <span className="greeting-text"> My name is</span>
            </div>
            <h2 className="name">Brandon Vazquez Munoz</h2>
            <p className="description">
              I'm a Computer Science student at Cornell University with experience in full-stack 
              development, machine learning, and more. I'm passionate about building user-focused 
              applications and exploring careers in Tech.
            </p>
            <div className="cta-buttons">
              <a 
                href="assets/Brandon_Vazquez-Munoz_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary"
              >
                View Resume
              </a>
              <Link to="/projects" className="cta-button secondary">
                See Projects
              </Link>
              <a href="https://www.linkedin.com/in/brandon-vazquez-munoz/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" className="linkedin-icon">
                  <g fill="none">
                    <rect width="256" height="256" fill="currentColor" rx="60"></rect>
                    <path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"></path>
                  </g>
                </svg>
              </a>
              <a href="https://github.com/Brandon-Vazquez" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="github-icon">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a href="mailto:brandonvazquez850@gmail.com" className="social-link">
                <HiMail className="email-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 