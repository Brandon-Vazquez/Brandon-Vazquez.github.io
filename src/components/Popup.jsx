import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, githubUrl, demoUrl, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {children}
                <div className="popup-buttons">
                    {demoUrl && (
                        <a 
                            href={demoUrl}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="demo-button"
                        >
                            Watch Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a 
                            href={githubUrl}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="github-button"
                        >
                            View Github
                        </a>
                    )}
                    <button onClick={onClose} className="close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Popup; 