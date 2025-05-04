import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Globe, 
  Workflow 
} from 'lucide-react';

import TypewriterHeading from '../components/TypewriterHeading';
import CyberButton from '../components/CyberButton';
import ServiceCard from '../components/ServiceCard';
import AnimatedBackground from '../components/AnimatedBackground';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [agitateRef, agitateInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  useEffect(() => {
    document.title = 'CyberLink Nexus | AI Automation Agency';
  }, []);

  return (
    <div className="relative z-10 bg-transparent">
      <AnimatedBackground />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-cyber-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {heroInView && (
                <>
                  <TypewriterHeading 
                    text="AI That Works 24/7, So You Don’t Have To"
                    className="text-4xl md:text-5xl font-space font-bold mb-6 text-white"
                    delay={50}
                    cursorColor="blue"
                  />

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-gray-300 text-lg mb-8"
                  >
                    We handle leads, support, and workflows, while you do what you do best.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="inline-block rounded-lg p-2 bg-gradient-to-r from-cyber-blue-400/20 to-cyber-blue-400/20 hover:from-cyber-blue-400/30 hover:to-cyber-blue-400/30 transition-all duration-300"
                  >
                    <CyberButton 
                      onClick={() => handleNavigateWithTop('/contact')}
                      color="blue" 
                      className="neon-text-blue"
                    >
                      LAUNCH MY SYSTEM
                    </CyberButton>
                  </motion.div>
                </>
              )}
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/fallback-image.jpg"
                  className="rounded-lg object-cover w-full h-full shadow-2xl"
                >
                  <source src="https://i.imgur.com/oowTTmE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-cyber-dark border border-cyber-blue-400/50"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg bg-cyber-dark border border-cyber-green-400/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Agitate & Solve Section */}
      <section ref={agitateRef} className="py-24 relative">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-space font-bold mb-6 neon-text-green ${agitateInView ? 'matrix-flicker' : 'opacity-0'}`} style={{ animationDelay: '0ms' }}>
              Stop wasting time while your competitor's scale
            </h2>

            <div className="bg-cyber-dark rounded-lg p-8 border border-cyber-green-400/20">
              <p className={`text-gray-300 text-lg mb-6 ${agitateInView ? 'matrix-flicker' : 'opacity-0'}`} style={{ animationDelay: '250ms' }}>
                You’re missing out on leads, failing to support your customers, and stuck in endless manual work. Top businesses are automating to dominate their markets. Why are you falling behind?
              </p>
              <p className={`text-white text-lg mb-8 ${agitateInView ? 'matrix-flicker' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                CyberLink Nexus deploys AI systems that think, respond, and automate for you 24/7
              </p>
              <div className={`${agitateInView ? 'matrix-flicker' : 'opacity-0'}`} style={{ animationDelay: '750ms' }}>
                <motion.div className="inline-block rounded-lg p-2 bg-gradient-to-r from-cyber-green-400/20 to-cyber-green-400/20 hover:from-cyber-green-400/30 hover:to-cyber-green-400/30 transition-all duration-300">
                  <CyberButton 
                    onClick={() => handleNavigateWithTop('/contact')}
                    color="green" 
                    className="cyber-button-green neon-text-green text-lg font-bold"
                  >
                    GET YOUR SYSTEM BUILT
                  </CyberButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 relative">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-cyber-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-space font-bold mb-4 neon-text-blue ${servicesInView ? 'glitch-pop' : 'opacity-0'}`} style={{ animationDelay: '0ms' }}>
              What We Automate
            </h2>
            <p className={`text-gray-300 max-w-2xl mx-auto ${servicesInView ? 'glitch-pop' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
              Our AI systems handle your repetitive tasks, giving you back time to focus on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ title: "Lead Capture & CRM Bots", description: "Capture and route leads automatically to your sales pipeline.", icon: Users, delay: 300 }, { title: "AI-Powered Phone Dialers", description: "Custom voice workflows to follow up with leads, schedule appointments, and confirm details.", icon: Phone, delay: 400 }, { title: "Customer Support Chatbots", description: "24/7 AI agents that answer FAQs, handle tickets, and qualify customers.", icon: MessageSquare, delay: 500 }, { title: "Appointment Scheduling Systems", description: "Automated booking workflows integrated with your calendar.", icon: Calendar, delay: 600 }, { title: "Custom Website Builds", description: "Fast, responsive, AI-integrated websites tailored to your business needs.", icon: Globe, delay: 700 }, { title: "Business Workflow Automation", description: "From email sequences to task automation — powered by AI logic.", icon: Workflow, delay: 800 }].map((service, index) => (
              <div key={index} className={`${servicesInView ? 'glitch-pop' : 'opacity-0'}`} style={{ animationDelay: `${service.delay}ms` }}>
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-space font-bold text-center mb-12 neon-text-green">
            Testimonials
          </h2>

          {testimonialInView && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
              <div className="bg-cyber-dark rounded-lg p-8 md:p-12 circuit-pulse">
                <TypewriterHeading 
                  text={`"Joe is great! I wanted a website but couldn't figure out how to do it. I'm glad I let Joe design it. He exceeded my expectations and he explains everything during the process. If you need a website you should definitely go with Joe. My website designer for life."`}
                  className="text-2xl md:text-3xl font-space mb-6 text-white"
                  delay={30}
                  cursorBlinking={true}
                  cursorColor="green"
                />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}>
                  <p className="font-mono text-cyber-green-400 neon-text-green">
                    — Tanesa Frazier, Three Ribbon Taxes
                  </p>
                  <p>
                    <a 
                      href="https://threeribbontaxes.com/" // Placeholder URL, replace with the actual client website URL
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-mono text-cyber-blue-400 neon-text-blue hover:underline"
                    >
                      Visit Three Ribbon Taxes
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;