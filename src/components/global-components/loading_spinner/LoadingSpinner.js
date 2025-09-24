import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ text = "Load&nbsp;ng", className = "" }) => {
    return (
        <div className={`loading-spinner-container ${className} mt-120`}>
            <span className="loader" dangerouslySetInnerHTML={{ __html: text }}></span>
        </div>
    );
};

export default LoadingSpinner;
