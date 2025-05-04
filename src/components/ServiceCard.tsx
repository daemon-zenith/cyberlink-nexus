import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateWithTop = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(scrollToTop, 100);
    } else {
      scrollToTop();
    }
  };

  return (
    <div 
      className="bg-cyber-dark p-6 rounded-lg border border-gray-800 hover:border-cyber-blue-400/50 transition-all duration-500 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black border border-cyber-blue-400/30 mb-4 group-hover:border-cyber-blue-400 transition-all duration-300">
        <Icon className="w-6 h-6 text-cyber-blue-400" />
      </div>
      <h3 className="text-xl font-space mb-2 text-white group-hover:neon-text-blue transition-all duration-300">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button 
        onClick={() => handleNavigateWithTop('/contact')}
        className="inline-block text-cyber-blue-400 hover:neon-text-blue text-sm transition-all duration-300"
      >
        Get Started →
      </button>
    </div>
  );
};

export default ServiceCard;