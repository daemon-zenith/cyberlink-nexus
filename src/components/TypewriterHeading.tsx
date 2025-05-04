import React, { useState, useEffect } from 'react';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  delay?: number;
  cursorBlinking?: boolean;
  cursorColor?: 'blue' | 'green';
}

const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({ 
  text, 
  className = '', 
  delay = 50,
  cursorBlinking = true,
  cursorColor = 'blue'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay]);

  return (
    <h1 className={className}>
      {displayText}
      <span 
        className={`inline-block w-2 h-5 ml-1 ${
          cursorBlinking ? 'animate-cursor-blink' : ''
        }`}
        style={{ 
          backgroundColor: `var(--neon-${cursorColor})`,
          boxShadow: `0 0 5px var(--neon-${cursorColor}), 0 0 10px var(--neon-${cursorColor})`
        }}
      />
    </h1>
  );
};

export default TypewriterHeading;