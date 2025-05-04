import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const matrixRef = useRef<string[]>([]);
  const dropsRef = useRef<number[]>([]);
  const circuitPointsRef = useRef<{ x: number; y: number; }[]>([]);
  const location = useLocation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initMatrix = () => {
      matrixRef.current = '0123456789ABCDEF'.split('');
      dropsRef.current = Array(Math.floor(canvas.width / 20))
        .fill(0)
        .map(() => -Math.random() * canvas.height);
    };

    const initCircuits = () => {
      circuitPointsRef.current = Array(10).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      }));
    };

    // Adjust opacity based on current route
    const getOpacity = () => {
      if (location.pathname === '/') return 0.05;
      return 0.02; // Less opacity for background on other pages
    };

    const drawMatrix = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${getOpacity()})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Increase text brightness for Contact and Blog pages
      const textOpacity = location.pathname === '/' ? 0.9 : 1;
      ctx.fillStyle = `rgba(0, 247, 255, ${textOpacity})`;
      ctx.font = '15px "Space Mono", monospace';

      dropsRef.current.forEach((drop, i) => {
        const char = matrixRef.current[Math.floor(Math.random() * matrixRef.current.length)];
        const x = i * 20;
        ctx.fillText(char, x, drop);

        if (drop > canvas.height) {
          dropsRef.current[i] = 0;
        }
        dropsRef.current[i] += 2;
      });
    };

    const drawCircuits = (timestamp: number) => {
      // Increase circuit line brightness for Contact and Blog pages
      const strokeOpacity = location.pathname === '/' ? 0.1 : 0.15;
      ctx.strokeStyle = `rgba(0, 247, 255, ${strokeOpacity})`;
      ctx.lineWidth = 1;

      circuitPointsRef.current.forEach((point, i) => {
        const nextPoint = circuitPointsRef.current[(i + 1) % circuitPointsRef.current.length];

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);

        const controlX = (point.x + nextPoint.x) / 2 + Math.sin(timestamp / 2000) * 50;
        const controlY = (point.y + nextPoint.y) / 2 + Math.cos(timestamp / 2000) * 50;

        ctx.quadraticCurveTo(controlX, controlY, nextPoint.x, nextPoint.y);
        ctx.stroke();

        point.x += Math.sin(timestamp / 3000) * 0.5;
        point.y += Math.cos(timestamp / 3000) * 0.5;

        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;
      });
    };

    let animationFrameId: number;
    const animate = (timestamp: number) => {
      drawMatrix();
      drawCircuits(timestamp);
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initMatrix();
    initCircuits();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [location]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;