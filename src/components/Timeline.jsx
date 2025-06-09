"use client";

import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-date">February 2022</div>
          <h3 className="timeline-title">Application UI code in Tailwind CSS</h3>
          <p className="timeline-description">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-date">March 2022</div>
          <h3 className="timeline-title">Marketing UI design in Figma</h3>
          <p className="timeline-description">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <div className="timeline-date">April 2022</div>
          <h3 className="timeline-title">E-Commerce UI code in Tailwind CSS</h3>
          <p className="timeline-description">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
