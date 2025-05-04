import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CyberButton from '../components/CyberButton';

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Nexus Blog | CyberLink Nexus';
    const path = window.location.pathname;
    if (path !== '/' && !window.location.hash) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-cyber-black/70 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://i.imgur.com/bRjTtpp.png"
            alt="CyberLink Nexus Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-space font-bold text-center mb-3 neon-text-blue">
          The Nexus Blog
        </h1>

        <div className="bg-cyber-dark/70 backdrop-blur-md rounded-lg p-8 border border-cyber-blue-400/20 shadow-xl mb-10 text-center">
          {/* Pulsing ring with centered globe logo */}
          <div className="inline-block relative mb-6">
            <div className="w-20 h-20 rounded-full bg-black border-2 border-cyber-blue-400 mx-auto animate-pulse-slow flex items-center justify-center">
              <img
                src="https://i.imgur.com/bRjTtpp.png"
                alt="CyberLink Icon"
                className="w-15 h-15 object-contain"
              />
            </div>
          </div>

          <h2 className="text-2xl font-space font-bold mb-4 neon-text-green">
            System Initialization in Progress
          </h2>

          <p className="text-gray-300 mb-6">
            The Nexus Blog is currently in development. We’ll soon be sharing expert insights on AI automation, strategies for scaling your business, updates on world news, and personal journal reflections.
          </p>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-2 w-2 bg-cyber-blue-400 rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-cyber-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-2 w-2 bg-cyber-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Centered CyberButton */}
          <div className="flex justify-center">
            <CyberButton to="/" color="green">
              RETURN TO MAIN SYSTEM
            </CyberButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;