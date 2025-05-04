import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CyberButton from '../components/CyberButton';
import AnimatedBackground from '../components/AnimatedBackground';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Thank You | CyberLink Nexus';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateWithTop = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative z-10 bg-transparent">
      <AnimatedBackground />
      <div className="min-h-screen pt-24 pb-16 bg-cyber-black/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <img
              src="https://i.imgur.com/bRjTtpp.png"
              alt="CyberLink Nexus Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-space font-bold text-center mb-3 neon-text-blue">
            Thank You!
          </h1>

          <div className="bg-cyber-dark/70 backdrop-blur-md rounded-lg p-8 border border-cyber-blue-400/20 shadow-xl mb-10 text-center circuit-pulse" style={{
            animationName: 'circuit-pulse',
            borderColor: 'rgba(0, 247, 255, 0.3)',
            boxShadow: '0 0 5px rgba(0, 247, 255, 0.3), 0 0 10px rgba(0, 247, 255, 0.2), inset 0 0 5px rgba(0, 247, 255, 0.1)',
            backgroundImage: 'linear-gradient(45deg, rgba(0, 247, 255, 0.03) 25%, transparent 25%)'
          }}>
            <p className="text-gray-300 text-lg mb-8">
              Your request has been successfully submitted. Our team will follow up with you shortly. At CyberLink Nexus, Speed is our standard.
            </p>

            <div className="flex justify-center">
              <CyberButton 
                onClick={() => handleNavigateWithTop('/')} 
                color="green"
              >
                RETURN TO HOME
              </CyberButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;