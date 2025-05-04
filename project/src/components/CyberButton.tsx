import React from 'react';
import { Link } from 'react-router-dom';

interface CyberButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  color?: 'blue' | 'green';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  to, 
  href,
  color = 'blue',
  className = '',
  onClick,
  type
}) => {
  const buttonClass = `cyber-button-${color} ${className} hover:scale-105 transition-transform duration-300`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClass} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CyberButton;