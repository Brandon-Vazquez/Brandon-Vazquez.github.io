import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import './Checklist.css';

const Checklist = ({ checkedItems, onToggle, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const projects = [
        { id: 'plane', name: 'Plane' },
        { id: 'echoAce', name: 'Echo Ace' },
        { id: 'arcade', name: 'Arcade' },
        { id: 'stockMarket', name: 'Stock Market' },
        { id: 'camera', name: 'Camera' },
        { id: 'laptop', name: 'Laptop' }
    ];

    const handleItemClick = (projectId) => {
        // Always show popup and check the box when item is clicked
        onItemClick(projectId);
        offToggle(projectId);
    };

    return (
        <div className="checklist-container">
            <div 
                className="checklist-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>Checklist</h3>
                <IoChevronDown className={`chevron-icon ${isOpen ? 'open' : ''}`} />
            </div>
            {isOpen && (
                <div className="checklist-items">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="checklist-item"
                            onClick={() => handleItemClick(project.id)}
                        >
                            <label className="checklist-label">
                                <input
                                    type="checkbox"
                                    checked={checkedItems[project.id] || false}
                                    onChange={() => {}}
                                    readOnly
                                />
                                <span className="checkmark"></span>
                                {project.name}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Checklist; 