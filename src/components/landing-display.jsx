import React, { useEffect, useRef } from 'react';

const LandingDisplay = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animationRef = useRef(null);

  // Configuration
  const config = {
    numDots: 25,
    dotRadius: 2,
    lineDistance: 150,
    dotSpeed: 1,
    lineWidth: 1,
    lightMode: {
      dotColor: '#0A66C2',
      lineColor: 'rgba(10, 102, 194, 0.2)'
    },
    darkMode: {
      dotColor: '#B8624D',
      lineColor: 'rgba(184, 98, 77, 0.2)'
    }
  };

  // Dot class
  class Dot {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * config.dotSpeed;
      this.vy = (Math.random() - 0.5) * config.dotSpeed;
    }

    update(width, height) {
      // Update position
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off walls
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Keep dots within bounds
      this.x = Math.max(0, Math.min(width, this.x));
      this.y = Math.max(0, Math.min(height, this.y));
    }

    draw(ctx, isDarkMode) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, config.dotRadius, 0, Math.PI * 2);
      ctx.fillStyle = isDarkMode ? config.darkMode.dotColor : config.lightMode.dotColor;
      ctx.fill();
    }
  }

  // Initialize canvas and dots
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create dots
    dotsRef.current = Array.from({ length: config.numDots }, () => 
      new Dot(
        Math.random() * width,
        Math.random() * height
      )
    );

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Check if dark mode is active
      const isDarkMode = document.documentElement.classList.contains('dark');

      // Update and draw dots
      dotsRef.current.forEach(dot => {
        dot.update(width, height);
        dot.draw(ctx, isDarkMode);
      });

      // Draw lines between close dots
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dx = dotsRef.current[i].x - dotsRef.current[j].x;
          const dy = dotsRef.current[i].y - dotsRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.lineDistance) {
            ctx.beginPath();
            ctx.moveTo(dotsRef.current[i].x, dotsRef.current[i].y);
            ctx.lineTo(dotsRef.current[j].x, dotsRef.current[j].y);
            ctx.strokeStyle = isDarkMode ? config.darkMode.lineColor : config.lightMode.lineColor;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};

export default LandingDisplay; 