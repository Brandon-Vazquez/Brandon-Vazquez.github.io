import React, { useState } from 'react';
import './ImageZoom.css';

const ZoomableImage = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <img
      src={src}
      alt={alt}
      onClick={toggleZoom}
      className={`zoom-image ${zoomed ? 'zoomed' : ''}`}
    />
  );
};

export default ZoomableImage; 