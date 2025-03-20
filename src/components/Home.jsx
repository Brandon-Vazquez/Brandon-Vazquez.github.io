import { useEffect, useRef } from 'react';
import TimelineItem from './TimelineItem';
import BoatsContainer from './BoatsContainer';
import StarfishContainer from './StarfishContainer';
import './Home.css';

function Home() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const animatePath = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight - windowHeight;
      const scrollPercentage = scrollY / totalHeight;
      
      // Calculate a dynamic offset that scales with scroll position
      const minOffset = 100; // Minimum offset from bottom
      const maxOffset = 300; // Maximum offset from bottom
      const dynamicOffset = minOffset + (maxOffset - minOffset) * (1 - scrollPercentage);
      
      // Convert pixel offset to path length units
      const offsetInPathLength = (dynamicOffset / path.getBoundingClientRect().height) * pathLength;
      
      // Calculate draw length based on scroll position
      const drawLength = pathLength * (1 - scrollPercentage);
      
      // Ensure curve stays visible by maintaining minimum distance from bottom
      const minDistance = pathLength * 0.2;
      const adjustedDashOffset = Math.max(drawLength - offsetInPathLength, minDistance);
      
      path.style.strokeDashoffset = adjustedDashOffset;
    };

    window.addEventListener("scroll", animatePath);
    return () => window.removeEventListener("scroll", animatePath);
  }, []);

  const experiences = [
    {
      id: 1,
      position: "left",
      title: "Brandon Vazquez Munoz",
      isSummary: true,
      content: "I am a passionate Computer Science student at Cornell University's Class of 2027, pursuing a Bachelor of Science in Computer Science with a minor in Physics. My journey in technology combines technical expertise with leadership and community impact. I specialize in developing autonomous systems, computer vision applications, and full-stack web development. Beyond coding, I'm committed to making technology accessible to underserved communities and fostering diversity in tech through various leadership roles. When not coding, I enjoy carpentry, PC building, robotics, and solving daily Wordle puzzles to stay sharp and creative."
    },
    {
      id: 2,
      position: "right",
      title: "Software Developer at CUAir",
      content: "Leading development of advanced autonomous systems at Cornell University Unmanned Air Systems. Key achievements include:\n• Developed LiDAR-based obstacle avoidance system using DBSCAN algorithm\n• Built computer vision models achieving 98% accuracy in alphanumeric target detection\n• Implementing reinforcement learning system for real-time obstacle avoidance"
    },
    {
      id: 3,
      position: "left",
      title: "Technical Lead at LinkedIn ASCEND",
      content: "Spearheading development of an LLM-powered interview preparation tool:\n• Built using React.js, Node.js, Supabase, and Python\n• Enables users to practice behavioral interviews with AI feedback\n• Collaborating with ASCEND peers and LinkedIn employees"
    },
    {
      id: 4,
      position: "right",
      title: "Software Engineering Extern at Citadel",
      content: "Enhanced software engineering skills through collaborative projects:\n• Led development of Stock Market Metrics comparison platform\n• Utilized HTML, CSS, JavaScript, Python, and Django\n• Focused on financial modeling and analytical technologies"
    },
    {
      id: 5,
      position: "left",
      title: "Leadership & Community Impact",
      content: "Active in multiple leadership roles:\n• Campus Director at Thrive Scholars, organizing events for 15+ students\n• Member of Cornell Computer Reuse Association, refurbishing technology for underserved communities\n• Selected for Cornell Bowers CIS ASCEND program among 200+ applicants"
    },
    {
      id: 6,
      position: "right",
      title: "Education & Skills",
      content: "Pursuing BS in Computer Science at Cornell University:\n• Relevant Courses: Algorithms, OOP & Data Structures, Functional Programming\n• Technical Skills: Python, Java, HTML, CSS, JavaScript, React.js, Node.js\n• Areas of Interest: Computer Vision, Machine Learning, Full-Stack Development"
    }
  ];

  return (
    <div className="home">
      <div id="boats-container">
        <BoatsContainer />
      </div>

      <div className="landing-page">
        <div className="title">
          <h1 className="name">Hello, I am Brandon Vazquez Munoz</h1>
          <p className="basic-info">Computer Science Student at Cornell University</p>
        </div>
      </div>

      <div className="transition">
        <svg id="wave1" viewBox="0 0 100 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path id="curve1" d="M-5 12 C 20 5, 40 14, 55 14 S 70 7, 103 8.6" />
          <path id="curve2" d="M-5 22 C 20 21, 40 17, 60 18 S 70 17, 103 14" />
        </svg>
      </div>

      <div className="timeline-container">
        {experiences.map(exp => (
          <TimelineItem key={exp.id} {...exp} />
        ))}
        <svg id="timeline-path" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef} id="curve" d="M40 -40 C 60 25, 40 50, 50 75 C 50 75, 55 85, 50 120" />

        </svg>
      </div>

      <div className="transition2">
        <svg id="wave2" viewBox="0 0 100 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path id="curve4" d="M-5 6.6 C 20 5, 40 12, 55 12 S 70 3, 103 10" />
          <path id="curve5" d="M-5 10.6 C 28 7, 40 20, 55 20 S 70 10, 103 15" />
          <path id="curve6" d="M-5 20.6 C 38 7, 40 30, 55 24 S 70 20, 103 17" />
        </svg>
        <div id="starfish-container">
          <StarfishContainer />
        </div>
      </div>

      <footer className="mt-auto">
        <div>
          <div className="wow fadeInUp col-md-12 col-sm-12 animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
            <p>Copyright © 2025 Brandon Vazquez Munoz</p>
            <div className="wow fadeInUp animated" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
              <ul className="social-icon" style={{ textAlign: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
                <li className="icon-wrapper">
                  <a href="https://www.linkedin.com/in/brandon-vazquez-munoz/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                  </a>
                </li>
                <li className="icon-wrapper">
                  <a href="https://github.com/Brandon-Vazquez" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
                </li>
                <li className="icon-wrapper">
                  <a href="mailto:brandonvazquez850@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512">
                      <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home; 