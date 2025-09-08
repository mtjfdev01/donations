import React, { useState, useEffect } from "react";
import "./index.css";
import { LuMapPinHouse } from "react-icons/lu";
import { FcHome } from "react-icons/fc";
import { RiHomeHeartLine } from "react-icons/ri";
import { RiHomeHeartFill } from "react-icons/ri";
import { SiEsphome } from "react-icons/si";


const FabButton = ({  tooltip = "Go to Map", targetId }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on mobile or desktop
      const isMobile = window.innerWidth <= 768;
      
      // Determine which element to check based on screen size
      let targetElement;
      if (isMobile) {
        targetElement = document.getElementById('map_img_mobile');
      } else {
        targetElement = document.getElementById('map_img');
      }

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100; // 100px threshold
        
        // Hide button if target section is in view
        setIsVisible(!isInView);
      }
    };

    // Set a small delay to prevent immediate execution on page load
    const timer = setTimeout(() => {
      setIsInitialized(true);
      handleScroll(); // Check initial position after delay
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Check if we're on mobile or desktop
    const isMobile = window.innerWidth <= 768;
    
    // Determine which element to scroll to based on screen size
    let elementToScroll;
    if (isMobile) {
      // On mobile, target the mobile image
      elementToScroll = document.getElementById('map_img_mobile');
    } else {
      // On desktop, target the desktop image
      elementToScroll = document.getElementById('map_img');
    }
    
    if (elementToScroll) {
      // Try smooth scrolling first
      try {
        elementToScroll.scrollIntoView({ 
          behavior: "smooth", 
          block: "center",
          inline: "nearest"
        });
      } catch (error) {
        // Fallback to instant scroll if smooth scrolling fails
        elementToScroll.scrollIntoView();
      }
    }
  };

  // Don't render if not visible or not yet initialized
  if (!isVisible || !isInitialized) {
    return null;
  }

  return (
    <button
      className="fabb ltn__animation-pulse2"
      onClick={handleClick}
      aria-label={tooltip}
    >
      <LuMapPinHouse />
      <span className="fab-tooltip">{tooltip}</span>
    </button>
  );
};

export default FabButton;
