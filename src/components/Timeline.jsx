"use client";

import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const experiences = [
    {
      date: '2024',
      title: 'Lorem Ipsum Company',
      role: 'Senior Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      date: '2023',
      title: 'Dolor Sit Corp',
      role: 'Full Stack Developer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      date: '2022',
      title: 'Amet Consectetur Inc',
      role: 'Junior Developer',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      date: '2021',
      title: 'Adipiscing Elit LLC',
      role: 'Software Intern',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">{experience.date}</div>
            <h3 className="timeline-title">{experience.title}</h3>
            <h4 className="timeline-role">{experience.role}</h4>
            <p className="timeline-description">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
