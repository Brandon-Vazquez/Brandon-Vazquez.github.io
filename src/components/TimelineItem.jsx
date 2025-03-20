import { useEffect, useRef } from 'react';
import profileImage from '../assets/images/profile.jpg';

function TimelineItem({ position, title, content, isSummary }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${position}`} 
      id={`experience${title.split(' ')[0]}`}
    >
      {isSummary ? (
        <div className="summary-header">
          <img src={profileImage} alt={title} className="profile-image" />
          <h2>{title}</h2>
        </div>
      ) : (
        <h2>{title}</h2>
      )}
      <p>{content.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}</p>
    </div>
  );
}

export default TimelineItem; 