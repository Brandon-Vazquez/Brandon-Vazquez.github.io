import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SiTmobile, SiLinkedin } from 'react-icons/si';
import './Timeline.css';

const LOGO_SIZE = 26;

/**
 * Your logo files live in `public/assets/` (same folder as resume, photos, etc.).
 * They are copied to `dist/assets/` when you run `yarn build`.
 * PNG or SVG both work — if you use different names or extensions, edit the paths below only.
 */
const TIMELINE_LOGO_PATHS = {
  cornell: 'assets/cornell_logo.png',
  cuair: 'assets/cuair_logo.png',
  citadel: 'assets/citadel.png',
  media434: 'assets/434Media_logo.png'
};

const CompanyLogo = ({ type }) => {
  switch (type) {
    case 'tmobile':
      return <SiTmobile size={LOGO_SIZE} color="#E20074" aria-hidden />;
    case 'cornell':
      return (
        <img
          src={TIMELINE_LOGO_PATHS.cornell}
          alt=""
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="timeline-company-logo-img"
        />
      );
    case 'cuair':
      return (
        <img
          src={TIMELINE_LOGO_PATHS.cuair}
          alt=""
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="timeline-company-logo-img"
        />
      );
    case '434media':
      return (
        <img
          src={TIMELINE_LOGO_PATHS.media434}
          alt=""
          width={56}
          height={26}
          className="timeline-company-logo-img timeline-company-logo-img--wide-brand"
        />
      );
    case 'linkedin':
      return <SiLinkedin size={LOGO_SIZE} color="#0A66C2" aria-hidden />;
    case 'citadel':
      return (
        <img
          src={TIMELINE_LOGO_PATHS.citadel}
          alt=""
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          className="timeline-company-logo-img"
        />
      );
    default:
      return null;
  }
};

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const experiences = [
    {
      date: 'Summer 2026',
      location: 'New York, NY',
      title: 'Software Engineering Intern',
      company: 'T-Mobile',
      companyLogo: 'tmobile',
      companyUrl: 'https://www.t-mobile.com',
      tools: 'Incoming — Vistar Media, T-Mobile Advertising Solutions',
      description: [
        'Selected for a software engineering internship on the Vistar Media team within T-Mobile Advertising Solutions.'
      ]
    },
    {
      date: 'January 2026 - Present',
      location: 'Ithaca, NY',
      title: 'Teaching Assistant',
      company: 'Cornell Ann S. Bowers College of Computing and Information Science',
      companyLogo: 'cornell',
      companyUrl: 'https://cis.cornell.edu/',
      tools: 'Git, Docker, Course infrastructure, Autograding',
      description: [
        'Supporting CS 3410 (Computer System Organization) by maintaining course infrastructure and the course website via Git-based workflows.',
        'Developed and deployed Docker-based autograders that automate grading for a 300+ student course.'
      ]
    },
    {
      date: 'October 2023 - Present',
      location: 'Ithaca, NY',
      title: 'Machine Learning Engineer',
      company: 'Cornell University Unmanned Air Systems',
      companyLogo: 'cuair',
      companyUrl: 'https://cuair.org',
      tools: 'Python, PyTorch, LiDAR, Reinforcement Learning, YOLO, SAHI, Computer Vision',
      description: [
        'Led design and implementation of a real-time LiDAR-based obstacle avoidance pipeline: clustering noisy sensor data and estimating relative motion for autonomous navigation during live flight testing.',
        'Designed and trained a reinforcement learning navigation agent using obstacle location and velocity estimates, iterating on state representation and reward structure for high-speed, unpredictable flight.',
        'Implemented and deployed computer vision models for object detection and classification; trained YOLO with SAHI-based slicing, achieving 98% accuracy on a test set of 200+ aerial images.'
      ]
    },
    {
      date: 'May 2025 - September 2025',
      location: 'San Antonio, TX',
      title: 'Software Engineering Intern',
      company: '434 Media Group',
      companyLogo: '434media',
      companyUrl: 'https://434media.com',
      tools: 'React, JavaScript, Python, Client collaboration, Automation',
      description: [
        'Rebuilt and iterated on a React-based web platform for the Digital Canvas brand, delivering three successive redesigns from internal feedback while improving maintainability and code structure.',
        'Scoped and implemented custom websites with clients and internal teams—contributing in client meetings and translating design goals into deployable solutions.',
        'Built internal automation to streamline sales research, reducing manual effort by up to 70%.'
      ]
    },
    {
      date: 'September 2024 - May 2025',
      location: 'New York, NY',
      title: 'Full Stack ASCEND Intern',
      company: 'LinkedIn',
      companyLogo: 'linkedin',
      companyUrl: 'https://linkedin.com',
      tools: 'React, Node.js, Python, OpenAI Whisper, Supabase, LLMs',
      description: [
        'Built an end-to-end, LLM-driven interview platform (ASCEND Best Project Award) supporting 100+ languages, used by 20+ users for real-time behavioral practice with automated feedback.',
        'Architected an audio-to-transcription-to-feedback pipeline (OpenAI Whisper, Python, Supabase), cutting response latency by 58% (60s → 25s) through profiling and system redesign.',
        'Developed a responsive full-stack system (React, Node.js) and improved scalability and reliability via weekly design reviews with senior LinkedIn engineers.'
      ]
    },
    {
      date: 'May 2024 - August 2024',
      location: 'New York, NY',
      title: 'Software Engineer Extern',
      company: 'Citadel Securities',
      companyLogo: 'citadel',
      companyUrl: 'https://www.citadelsecurities.com/',
      tools: 'Django, JavaScript, Python, Market data, Technical indicators',
      description: [
        'Spearheaded a full-stack stock analysis and comparison platform using Django and JavaScript, integrating market data and technical indicators (e.g., SMA, EMA, RSI) for comparative investment analysis.',
        'Participated in structured data structures and algorithms workshops and finance seminars covering market structure, asset classes, and quantitative trading concepts.'
      ]
    },
  ];

  const toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.index, 10);
          setVisibleItems((prev) => new Set([...prev, idx]));
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="timeline">
      {experiences.map((experience, index) => {
        const isExpanded = expandedIndex === index;

        const isVisible = visibleItems.has(index);

        return (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            data-index={index}
            className={`timeline-item ${isExpanded ? 'timeline-item-expanded' : ''} ${
              isVisible ? 'timeline-item-visible' : 'timeline-item-entering'
            }`}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-summary">
                <div className="timeline-summary-main">
                  <div className="timeline-header">
                    <div className="timeline-header-line">
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-company"
                      >
                        <span
                          className={`timeline-company-logo ${
                            experience.companyLogo === '434media' ? 'timeline-company-logo--wide' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <CompanyLogo type={experience.companyLogo} />
                        </span>
                        <span className="timeline-company-name">{experience.company}</span>
                      </a>
                      <span className="timeline-title-sep">,</span>
                      <h3 className="timeline-title">{experience.title}</h3>
                    </div>
                  </div>
                  <div className="timeline-meta-row">
                    <span className="timeline-meta">
                      {experience.date} | {experience.location}
                    </span>
                    <span className="timeline-meta-tools">
                      <span className="timeline-meta-sep" aria-hidden="true">
                        ·
                      </span>
                      <span className="timeline-tools">{experience.tools}</span>
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="timeline-expand-btn"
                  aria-expanded={isExpanded}
                  aria-controls={`timeline-panel-${index}`}
                  id={`timeline-trigger-${index}`}
                  onClick={() => toggle(index)}
                  aria-label={
                    isExpanded
                      ? `Hide role description for ${experience.title} at ${experience.company}`
                      : `Show role description for ${experience.title} at ${experience.company}`
                  }
                >
                  <ChevronDown
                    className={`timeline-chevron ${isExpanded ? 'timeline-chevron-open' : ''}`}
                    size={22}
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </button>
              </div>

              <div
                id={`timeline-panel-${index}`}
                role="region"
                aria-labelledby={`timeline-trigger-${index}`}
                className={`timeline-panel ${isExpanded ? 'timeline-panel-open' : ''}`}
                aria-hidden={!isExpanded}
              >
                <div className="timeline-panel-inner">
                  <div className="timeline-description">
                    {experience.description.map((bullet, i) => (
                      <p key={i}>{bullet}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
