import React, { useRef, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { IoInformationCircle } from 'react-icons/io5';
import Popup from './Popup';
import Checklist from './Checklist';
import ZoomableImage from './ZoomableImage';
import './Projects.css';

const Projects = () => {
  const splineRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [checkedItems, setCheckedItems] = useState(() => {
    // Clear any existing localStorage data
    localStorage.removeItem('checkedProjects');
    return {
      plane: false,
      echoAce: false,
      arcade: false,
      stockMarket: false,
      camera: false,
      laptop: false
    };
  });
  const [activeProjectId, setActiveProjectId] = useState(null);

  useEffect(() => {
    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('checkedProjects', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const projectGithubUrls = {
    plane: null,
    echoAce: "https://github.com/Brandon-Vazquez/echo-ace",
    arcade: "https://github.com/Brandon-Vazquez/arcade-project",
    stockMarket: "https://github.com/rafaelolal/citadel_final",
    camera: "https://github.com/Brandon-Vazquez/computer-vision",
    laptop: null 
  };

  const projectDemoUrls = {
    echoAce: "https://youtu.be/lbWHWkpnq7I",
    arcade: "https://youtu.be/tpq2xFyyLkY?si=GsHi5uw44_BS4JYK",
    plane: null,
    stockMarket: null,
    camera: null,
    laptop: null
  };

  const projectPopups = {
    plane: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Fixed Wing Obstacle Avoidance</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '42%' }}>
            <ZoomableImage src="assets/lidar.png" alt="Fixed Wing 1" />
          </div>
          <div style={{ width: '28%' }}>
            <ZoomableImage src="assets/RL_model.png" alt="Fixed Wing 2" />
          </div>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          <strong>Tools Used:</strong> Python, Rust, LiDAR, DBSCAN, Gymnasium, Stable Baselines
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          This ongoing project through Cornell Unmanned Air Systems (CUAIR) focuses 
          on real-time obstacle avoidance for a fixed-wing aircraft. I use Rust to 
          interface with a LiDAR sensor, generating 3D spatial maps of the environment, 
          and apply the DBSCAN clustering algorithm to identify and group nearby obstacles. 
          I'm also developing a reinforcement learning model in Python using Gymnasium and 
          Stable Baselines to reroute the plane dynamically based on its surroundings.
        </p>
      </div>
    ),
    echoAce: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>EchoAce</h2>
        <div style={{ marginBottom: '1.5rem', width: '60%', margin: '0 auto 1.5rem auto' }}>
          <ZoomableImage src="assets/echoace.png" alt="EchoAce" />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          EchoAce is our acoustic sensing robot designed for deep exploration missions. Using advanced sonar technology, it can navigate and map environments where traditional sensors might fail.
        </p>
      </div>
    ),
    arcade: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Scrabble Game</h2>
        <div style={{ marginBottom: '1.5rem', width: '60%', margin: '0 auto 1.5rem auto' }}>
          <ZoomableImage src="assets/arcade.png" alt="scrabble" />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          Arcade is a retro-style interactive project developed for human-robot entertainment. Experience classic gaming with a modern twist, featuring custom-built hardware and innovative gameplay mechanics.
        </p>
      </div>
    ),
    laptop: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Personal Website</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          A modern, interactive portfolio website showcasing my projects and skills. Built with React and featuring 3D elements for an engaging user experience.
        </p>
      </div>
    ),
    camera: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Object Detection and Classification</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '48%' }}>
            <ZoomableImage src="assets/detection.png" alt="Object Detection" />
          </div>
          <div style={{ width: '48%' }}>
            <ZoomableImage src="assets/classification.png" alt="Object Classification" />
          </div>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          A computer vision system capable of detecting and classifying objects in real-time. Built using deep learning models and optimized for performance on edge devices.
        </p>
      </div>
    ),
    stockMarket: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Metric Comparator</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          <strong>Tools Used:</strong> Django, JavaScript, Yahoo Finance API, Bootstrap, Matplotlib
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
        Metric Comparator is a financial analysis web application I developed in collaboration with one other engineer, where we practiced pair programming to design and implement each feature. Built with Django and JavaScript, the tool analyzes real-time stock data from the Yahoo Finance API using a suite of technical indicators including SMA, EMA, WMA, RSI, Bollinger Bands, and the Stochastic Oscillator.
        <br/>
        <br/> 
        The platform provides comparative performance analysis, maximum profit calculations, and AI-powered insights generated using Google's Gemini model. The result is a responsive, insight-rich interface that delivers actionable trading signals and helps users make informed investment decisions.
        </p>
      </div>
    ),
    // ...other projects
  };

  const infoContent = (
    <div style={{ textAlign: 'left' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Welcome to My Projects!</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        There are two ways to explore my projects:
      </p>
      <ol style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Find and click on any highlighted object in the 3D scene</li>
        <li style={{ marginBottom: '0.5rem' }}>Click on a project name in the checklist on the right</li>
      </ol>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
        Each project popup will show you a detailed explanation of the project. Some projects also include a video demo and/or a link to their GitHub repository.
      </p>
    </div>
  );

  const handleLoad = (splineApp) => {
    console.log('Spline scene loaded');
    splineRef.current = splineApp;
    
    if (splineApp.scene) {
      console.log('Traversing scene objects...');
      splineApp.scene.traverse((object) => {
        if (object.name) {
          console.log('Scene object:', {
            name: object.name,
            type: object.type,
            id: object.id
          });
        }
      });
    }
  };

  const handleMouseDown = (e) => {
    console.log('=== Mouse Down Event ===');
    console.log('Event target:', e.target);
    console.log('Target name:', e.target.name);
    console.log('Target ID:', e.target.id);
    console.log('Target type:', e.target.type);
    
    const objectByName = splineRef.current?.findObjectByName(e.target.name);
    const objectById = splineRef.current?.findObjectById(e.target.id);
    const clickedObject = objectByName || objectById;
    
    if (clickedObject) {
      console.log('Clicked object details:', {
        name: clickedObject.name,
        type: clickedObject.type,
        id: clickedObject.id
      });

      const objectName = clickedObject.name?.toLowerCase();
      let projectId = null;
      
      if (objectName?.includes('plane')) {
        setPopupContent(projectPopups.plane);
        projectId = 'plane';
      } else if (objectName?.includes('echoace')) {
        setPopupContent(projectPopups.echoAce);
        projectId = 'echoAce';
      } else if (objectName?.includes('arcade_machine')) {
        setPopupContent(projectPopups.arcade);
        projectId = 'arcade';
      } else if (objectName?.includes('stock_chart')) {
        setPopupContent(projectPopups.stockMarket);
        projectId = 'stockMarket';
      } else if (objectName?.includes('object_camera')) {
        setPopupContent(projectPopups.camera);
        projectId = 'camera';
      } else if (objectName?.includes('object_laptop')) {
        setPopupContent(projectPopups.laptop);
        projectId = 'laptop';
      }

      if (projectId) {
        setActiveProjectId(projectId);
        setCheckedItems(prev => ({ ...prev, [projectId]: true }));
        setIsPopupOpen(true);
      }
    }
  };

  const handleChecklistItemClick = (projectId) => {
    setPopupContent(projectPopups[projectId]);
    setActiveProjectId(projectId);
    setIsPopupOpen(true);
    setCheckedItems(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <div className="projects-container">
      {showWelcomeMessage && (
        <div className="welcome-message">
          Click on the objects with a white highlight to learn about the project it represents
        </div>
      )}
      <div className="projects-content">
        <h1>My Projects</h1>
        <div className="spline-container" style={{ width: '100%', height: '100vh' }}>
          <Spline
            scene="https://prod.spline.design/p8R2kplS4JOufuSq/scene.splinecode"
            onLoad={handleLoad}
            onSplineMouseDown={handleMouseDown}
          />
        </div>
      </div>

      <button 
        className="info-button"
        onClick={() => setIsInfoPopupOpen(true)}
        aria-label="Information"
      >
        <IoInformationCircle />
      </button>

      <Checklist 
        checkedItems={checkedItems}
        onToggle={(id) => setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))}
        onItemClick={handleChecklistItemClick}
      />

      <Popup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        githubUrl={projectGithubUrls[activeProjectId]}
        demoUrl={projectDemoUrls[activeProjectId]}
      >
        {popupContent}
      </Popup>

      <Popup 
        isOpen={isInfoPopupOpen}
        onClose={() => setIsInfoPopupOpen(false)}
      >
        {infoContent}
      </Popup>
    </div>
  );
};

export default Projects;
