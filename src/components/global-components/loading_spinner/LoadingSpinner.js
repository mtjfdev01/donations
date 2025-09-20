import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ text = "Load&nbsp;ng", className = "" }) => {
    return (
        <div className={`loading-spinner-container ${className}`}>
            <span className="loader" dangerouslySetInnerHTML={{ __html: text }}></span>
        </div>
    );
};

export default LoadingSpinner;
