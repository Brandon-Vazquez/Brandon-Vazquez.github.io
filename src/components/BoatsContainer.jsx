import { useEffect } from 'react';
import purpleBoat from '../assets/images/purpleboat.png';
import redBoat from '../assets/images/redboat.png';
import orangeBoat from '../assets/images/orangeboat.png';

function BoatsContainer() {
  useEffect(() => {
    const boatContainer = document.getElementById("boats-container");
    const boatImages = [purpleBoat, redBoat, orangeBoat];
    const numberOfBoats = 6;

    for (let i = 0; i < numberOfBoats; i++) {
      const boat = document.createElement("img");
      boat.src = boatImages[Math.floor(Math.random() * boatImages.length)];
      boat.classList.add("boat");

      const randomTop = Math.random() * 95 + 5;
      const randomLeft = Math.random() * 96;
      boat.style.top = `${randomTop}%`;
      boat.style.left = `${randomLeft}%`;

      const randomRotation = Math.random() * 360;
      boat.style.setProperty("--rotation", `${randomRotation}deg`);

      boatContainer.appendChild(boat);
    }

    return () => {
      while (boatContainer.firstChild) {
        boatContainer.removeChild(boatContainer.firstChild);
      }
    };
  }, []);

  return null;
}

export default BoatsContainer; 