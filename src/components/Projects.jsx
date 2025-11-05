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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark') || 
           localStorage.theme === 'dark' ||
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

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

  useEffect(() => {
    // Listen for theme changes
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check initial state
    checkDarkMode();

    // Listen for class changes on document element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Also listen for storage changes (in case theme is changed in another tab)
    const handleStorageChange = () => {
      checkDarkMode();
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const projectGithubUrls = {
    plane: null,
    echoAce: "https://github.com/ASCEND-EchoAce/echoace-fullstack",
    arcade: null,
    stockMarket: "https://github.com/rafaelolal/citadel_final",
    camera: null,
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

  const getProjectPopups = () => ({
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
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '20%' }}>
            <ZoomableImage src={isDarkMode ? "assets/invert_echoace.png" : "assets/echoace.png"} alt="EchoAce" />
          </div>
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          <strong>Tools Used:</strong> React.js, Node.js, Supabase, Python, OpenAI Whisper, LLMs
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
        EchoAce is an AI-powered interview preparation platform I co-developed as 
        part of the LinkedIn ASCEND program. The tool simulates realistic behavioral 
        interviews using a Large Language Model (LLM) and provides personalized, 
        data-informed feedback to help users improve over time. My primary contributions 
        focused on backend and system integration — I implemented audio recording and 
        transcription using OpenAI Whisper, helped configure Supabase for user data management, 
        and built the backend pipeline that evaluates transcriptions using LLMs.
        I also developed key dashboard components, including a timeline that visualizes user 
        progress and conversation history, and added functionality for users to revisit past 
        interviews, ask follow-up questions, and receive context-aware insights.
        </p>
      </div>
    ),
    arcade: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Scrabble Game</h2>
        <div style={{ marginBottom: '1.5rem', width: '50%', margin: '0 auto 1.5rem auto' }}>
          <ZoomableImage src="assets/arcade.png" alt="scrabble" />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          <strong>Tools Used:</strong> Rust
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
        I developed a Scrabble game focusing on performance and clean system design. 
        The project includes core game mechanics such as 
        tile management, word validation, scoring logic, and turn-based play. I also 
        introduced features not found in traditional Scrabble, such as a real-time 
        word lookup tool that lets players verify word validity before making a move. 
        Rust's strong type system and concurrency support allowed me to build a fast, 
        reliable system that could handle complex game state transitions with ease. 
        This project deepened my understanding of systems programming and reinforced 
        best practices in modular design and error handling.
        </p>
      </div>
    ),
    laptop: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Personal Website</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          <strong>Tools Used:</strong> Node.js, React, CSS, HTML, Spline, GitHub Pages, Git
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          A modern, interactive portfolio website built with React. The site features a dynamic 3D scene created with Spline, 
          showcasing my projects in an immersive environment. I implemented a responsive design with smooth animations and transitions, 
          along with a theme switcher for light/dark mode. The project demonstrates my ability to create engaging user experiences 
          while maintaining clean, maintainable code architecture.
        </p>
      </div>
    ),
    camera: (
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'left' }}>Object Detection and Classification</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* <div style={{ width: '48%' }}>
            <ZoomableImage src="assets/detection.png" alt="Object Detection" />
          </div>
          <div style={{ width: '48%' }}>
            <ZoomableImage src="assets/classification.png" alt="Object Classification" />
          </div> */}
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
        As part of Cornell Unmanned Air Systems (CUAIR), I developed an object 
        detection and classification system using Python, the YOLO (You Only Look Once) 
        model, and the SAHI (Slicing Aided Hyper Inference) framework. This tool is 
        designed to automatically identify and classify alphanumeric targets during 
        autonomous flight missions, a critical capability for aerial target recognition.
        To improve performance on small or distant targets, I used SAHI to slice 
        high-resolution images into overlapping patches, enhancing YOLO's accuracy 
        without compromising inference speed. I also leveraged transfer learning and 
        synthetic data generation to train the model for high precision in varied environments, 
        achieving over 98% classification accuracy. This project contributed significantly to 
        CUAIR's autonomous mission objectives and advanced our team's use of deep learning in 
        real-time aerial systems.
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
  });

  const projectPopups = getProjectPopups();

  // Update popup content when dark mode changes if echoace is open
  useEffect(() => {
    if (isPopupOpen && activeProjectId === 'echoAce') {
      setPopupContent(getProjectPopups().echoAce);
    }
  }, [isDarkMode, isPopupOpen, activeProjectId]);

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
        setPopupContent(getProjectPopups().plane);
        projectId = 'plane';
      } else if (objectName?.includes('echoace')) {
        setPopupContent(getProjectPopups().echoAce);
        projectId = 'echoAce';
      } else if (objectName?.includes('arcade_machine')) {
        setPopupContent(getProjectPopups().arcade);
        projectId = 'arcade';
      } else if (objectName?.includes('stock_chart')) {
        setPopupContent(getProjectPopups().stockMarket);
        projectId = 'stockMarket';
      } else if (objectName?.includes('object_camera')) {
        setPopupContent(getProjectPopups().camera);
        projectId = 'camera';
      } else if (objectName?.includes('object_laptop')) {
        setPopupContent(getProjectPopups().laptop);
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
    setPopupContent(getProjectPopups()[projectId]);
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
