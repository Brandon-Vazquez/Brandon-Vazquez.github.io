"use client";

import React, { useState, useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const experiences = [
    {
      date: 'August 2025 - Present',
      location: 'Ithaca, NY',
      title: 'Teaching Assistant',
      company: 'Cornell Ann S. Bowers College of Computing and Information Science',
      companyUrl: 'https://www.cis.cornell.edu/',
      tools: 'Teaching, Mentoring, Debugging, Recitations, Office Hours',
      description: [
        'Supporting 150+ students in CS 1112 (Introduction to Computing) by leading recitations, holding office hours, and collaborating with staff to enhance course materials'
      ]
    },
    {
      date: 'October 2023 - Present',
      location: 'Ithaca, NY',
      title: 'Machine Learning Engineer',
      company: 'Cornell University Unmanned Air Systems',
      companyUrl: 'https://cuair.org',
      tools: 'Python, PyTorch, YOLO, SAHI, Gymnasium',
      description: [
        'Devised a 360 degree LiDAR-based obstacle detection system using DBSCAN clustering to enhance UAV flight safety',
        'Developed a path-planning reinforcement learning agent in Gymnasium using Stable Baselines, achieving 99% task success',
        'Trained YOLO + SAHI models with transfer learning to detect alphanumeric targets (98% accuracy)'
      ]
    },
    {
      date: 'May 2025 - September 2025',
      location: 'San Antonio, TX',
      title: 'Software Engineer Intern',
      company: '434 Media Group',
      companyUrl: 'https://434media.com',
      tools: 'React.js, JavaScript, Python, Meta Graph API, Airtable API',
      description: [
        'Led the redesign of Digital Canvas using React.js and JavaScript, delivering 3 production-ready UI prototypes to leadership',
        'Restructured legacy architecture while enhancing analytics with Meta Graph API + Google Analytics, modernizing CMS workflows and centralizing insights across 7+ managed sites',
        'Automated sales lead generation with web scraping, ChatGPT API, and Airtable API, reducing research/data entry time by up to 70% through prospecting, email generation, and lead storage'
      ]
    },
    {
      date: 'May 2024 - May 2025',
      location: 'New York, NY',
      title: 'Full Stack Engineer Consultant',
      company: 'LinkedIn',
      companyUrl: 'https://linkedin.com',
      tools: 'React.js, Node.js, Python, Supabase, Whisper',
      description: [
        'Optimized an audio-to-transcription-to-feedback pipeline using OpenAI Whisper, Python backend, and Supabase, cutting average response latency by 58% (60s → 25s) and improving real-time usability for interview simulations',
        'Designed an interactive interview interface in React.js and Node.js, simulating interviews and providing real-time LLM-driven feedback; tested with 20+ MVP users',
        'Collaborated in 10 months of weekly code reviews and progress updates with senior LinkedIn engineers, receiving feedback on design decisions, debugging strategies, and scalable system practices'
      ]
    },
    {
      date: 'August 2024 - May 2025',
      location: 'Ithaca, NY',
      title: 'Campus Director',
      company: 'Thrive Scholars',
      companyUrl: 'https://www.thrivescholars.org/',
      tools: 'Communication, Organizational Leadership, Event Planning, Project Management, Budget Management',
      description: [
        'Managed a cohort of 15+ scholars, spearheading events and programming while handling logistics and outreach using Google Sheets and Notion',
        'Coordinated event budgets, proposals, and post-event reporting, achieving 100% compliance with operational guidelines',
      ]
    },
    {
      date: 'May 2024 - August 2024',
      location: 'New York, NY',
      title: 'Software Engineer Extern',
      company: 'Citadel Securities',
      companyUrl: 'https://www.citadelsecurities.com/',
      tools: 'Python, Django, JavaScript, Yahoo Finance API, Gemini API',
      description: [
        'Spearheaded a full-stack stock comparison platform using Django, JavaScript, and Python, integrating Yahoo Finance and Gemini AI APIs to analyze 6 key indicators (SMA, EMA, RSI, etc.) and deliver maximum profit scenarios',
        'Completed 25+ hours/week of instructor-led data structures and algorithms workshops, alongside 10+ finance courses covering market structure, asset classes, hedge fund strategies, and quantitative modeling',
        'Engaged with Citadel engineers and senior leadership through mentorship, project reviews, and talks focused on fintech'
      ]
    },
  ];

  // Intersection Observer for entry animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setVisibleItems(prev => new Set([...prev, index]));
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
        const isVisible = visibleItems.has(index);

        return (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            className={`timeline-item ${isVisible ? 'timeline-item-visible' : 'timeline-item-entering'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="timeline-company"
                >
                  {experience.company}
                </a>
                <span>, </span>
                <h3 className="timeline-title">{experience.title}</h3>
              </div>
              <div className="timeline-meta">
                {experience.date} | {experience.location}
              </div>
              <div className="timeline-tools">
                {experience.tools}
              </div>
              <div className="timeline-description">
                {experience.description.map((bullet, i) => (
                  <p key={i}>{bullet}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
