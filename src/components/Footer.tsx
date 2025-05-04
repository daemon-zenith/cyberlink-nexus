import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CircuitBoard, Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollTo', sectionId);
      navigate('/');
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative z-10 bg-cyber-dark/80 backdrop-blur-sm py-12 border-t border-cyber-blue-400/30 text-white">
      <div className="rounded-md ring-1 ring-cyber-blue-400/10 shadow-lg animate-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1 - Branding */}
            <div>
              <Link to="/" onClick={() => handleNavigateWithTop('/')} className="flex items-center mb-4">
                <CircuitBoard className="h-6 w-6 mr-2 text-cyber-blue-400" />
                <span className="font-space font-bold text-lg neon-text-blue">CyberLink Nexus</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                AI That Works 24/7, So You Don't Have To.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/CyberLinkNexus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246z" />
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/people/Cyber-Link-Nexus/61575320681584/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Links */}
            <div>
              <h3 className="text-white font-space text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleNavigateWithTop('/')} className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('services')} className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection('testimonials')} className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigateWithTop('/blog')} className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300">
                    The Nexus Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigateWithTop('/contact')} className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <h3 className="text-white font-space text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-cyber-blue-400 mt-0.5 mr-2" />
                  <a 
                    href="mailto:joe@cyberlinknexus.com" 
                    className="text-gray-400 hover:text-cyber-blue-400 transition-colors duration-300"
                  >
                    joe@cyberlinknexus.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-cyber-blue-400 mt-0.5 mr-2" />
                  <a 
                    href="tel:+12145165378" 
                    className="text-gray-400 hover:text-cyber-green-400 transition-colors duration-300"
                  >
                    +1 (214) 516-5378
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyber-blue-400 mt-0.5 mr-2" />
                  <span className="text-gray-400">
                    Texas, USA<br />(Global Operations)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} CyberLink Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;