"use client";

import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const experiences = [
    {
      date: 'May 2025 - Present',
      location: 'San Antonio, TX',
      title: 'Backend Development Intern',
      company: '434 Media Group',
      companyUrl: 'https://434media.com',
      description: [
        'Maintaining and optimizing legacy backend systems written in python, ensuring system reliability and uptime across multiple client-facing products',
        'Collaborating with frontend and design teams to implement new REST API endpoints, enhancing platform feature coverage'
      ]
    },
    {
      date: 'October 2023 - Present',
      location: 'Ithaca, NY',
      title: 'Software Developer',
      company: 'Cornell University Unmanned Air Systems',
      companyUrl: 'https://cuair.org',
      description: [
        'Developed a reinforcement learning agent in Gymnasium with Stable Baselines, achieving 99% target-hit accuracy in simulation; currently enhancing environmental physics to better reflect real-world UAV dynamics',
        'Engineered an obstacle detection system for fixed-wing UAVs using LiDAR and DBSCAN clustering, improving real-time object detection and autonomous flight safety in constrained environments',
        'Trained deep learning models (YOLO + SAHI) with transfer learning and synthetic data to detect and classify alphanumeric ground targets with 98% accuracy, enabling reliable autonomous mission scoring'
      ]
    },
    {
      date: 'May 2024 - May 2025',
      location: 'New York, NY',
      title: 'Software Engineering Intern',
      company: 'LinkedIn (Via Cornell ASCEND)',
      companyUrl: 'https://linkedin.com',
      description: [
        'Built EchoAce, an on-demand behavioral interview simulator powered by LLMs, enabling users to practice spoken interview questions and receive personalized AI feedback across 99+ languages',
        'Developed and optimized the transcription-to-feedback pipeline using OpenAI Whisper, a Python backend, and Supabase, reducing total response time by ~58% (60s → ~25s) to improve real-time usability',
        'Engineered the interactive interview interface in React.js and Node.js, integrating dynamic question prompts and user data with backend APIs to generate LLM-driven evaluations, tested by 20+ users in MVP stage'
      ]
    },
    {
      date: 'August 2024 - May 2025',
      location: 'Ithaca, NY',
      title: 'Campus Director',
      company: 'Thrive Scholars',
      companyUrl: 'https://thrivescholars.org',
      description: [
        'Organized and led events for 15+ students, including resource tours, workshops, and wellness programs',
        'Managed an event budget and handled all logistical aspects, from submitting proposals to completing post-event documentation, ensuring 100% compliance with organizational guidelines'
      ]
    },
    {
      date: 'May 2024 - August 2024',
      location: 'New York, NY',
      title: 'Software Engineering Extern',
      company: 'Citadel LLC',
      companyUrl: 'https://citadel.com',
      description: [
        'Developed a full-stack stock comparison platform using Django, JavaScript, and Python, integrating Yahoo Finance APIs and Google Gemini AI to analyze 6 key indicators (SMA, EMA, RSI, etc.)',
        'Delivered real-time buy/sell/hold signals and maximum profit scenarios through interactive, data-driven charts'
      ]
    }
  ];

  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
            <h3 className="timeline-title">{experience.title}</h3>
              <span>, </span>
              <a 
                href={experience.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="timeline-company"
              >
                {experience.company}
              </a>
            </div>
            <div className="timeline-meta">
              {experience.date} | {experience.location}
            </div>
            <div className="timeline-description">
              {experience.description.map((bullet, i) => (
                <p key={i}>{bullet}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
