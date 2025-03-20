import React from 'react';
import { useEffect } from 'react';
import starfish from '../assets/images/starfish.png';
import redStarfish from '../assets/images/redstarfish.png';
import greenStarfish from '../assets/images/greenstarfish.png';

function StarfishContainer() {
  useEffect(() => {
    const starfishContainer = document.getElementById("starfish-container");
    const starfishImages = [starfish, redStarfish, greenStarfish];
    const numberOfStarfish = 7;

    for (let i = 0; i < numberOfStarfish; i++) {
      const starfish = document.createElement("img");
      starfish.src = starfishImages[Math.floor(Math.random() * starfishImages.length)];
      starfish.classList.add("starfish");

      const randomTop = Math.random() * 40 + 50;
      const randomLeft = Math.random() * 96;
      starfish.style.top = `${randomTop}%`;
      starfish.style.left = `${randomLeft}%`;

      const randomRotation = Math.random() * 360;
      starfish.style.transform = `rotate(${randomRotation}deg)`;

      starfishContainer.appendChild(starfish);
    }

    return () => {
      while (starfishContainer.firstChild) {
        starfishContainer.removeChild(starfishContainer.firstChild);
      }
    };
  }, []);

  return null;
}

export default StarfishContainer; 