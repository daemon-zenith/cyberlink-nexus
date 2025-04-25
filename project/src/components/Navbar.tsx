import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);

    // Scroll to stored section on navigation
    const scrollTarget = sessionStorage.getItem('scrollTo');
    if (scrollTarget && location.pathname === '/') {
      setTimeout(() => {
        const section = document.getElementById(scrollTarget);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollTo');
      }, 300);
    }
  }, [location]);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-blue-400/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={() => handleNavigateWithTop('/')} className="flex items-center">
              <img
                src="https://i.imgur.com/bRjTtpp.png"
                alt="CyberLink Nexus Logo"
                className="h-8 w-8 mr-2 object-contain"
              />
              <span className="font-space font-bold text-lg neon-text-blue">CyberLink Nexus</span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <button onClick={() => handleNavigateWithTop('/')} className="font-mono text-sm hover:neon-text-blue transition-colors duration-300">
              HOME
            </button>
            <button onClick={() => handleScrollToSection('services')} className="font-mono text-sm hover:neon-text-blue transition-colors duration-300">
              SERVICES
            </button>
            <button onClick={() => handleScrollToSection('testimonials')} className="font-mono text-sm hover:neon-text-blue transition-colors duration-300">
              TESTIMONIALS
            </button>
            <Link to="/blog" onClick={() => handleNavigateWithTop('/blog')} className="font-mono text-sm hover:neon-text-blue transition-colors duration-300">
              THE NEXUS BLOG
            </Link>
            <Link to="/contact" onClick={() => handleNavigateWithTop('/contact')} className="cyber-button-blue">
              LAUNCH MY SYSTEM
            </Link>
          </div>

          <div className="flex sm:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyber-blue-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-cyber-black/95 backdrop-blur-md border-b border-cyber-blue-400/30 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => handleNavigateWithTop('/')} className="block py-3 px-4 font-mono text-sm hover:neon-text-blue border-b border-gray-800 w-full text-left">
              HOME
            </button>
            <button onClick={() => handleScrollToSection('services')} className="block py-3 px-4 font-mono text-sm hover:neon-text-blue border-b border-gray-800 w-full text-left">
              SERVICES
            </button>
            <button onClick={() => handleScrollToSection('testimonials')} className="block py-3 px-4 font-mono text-sm hover:neon-text-blue border-b border-gray-800 w-full text-left">
              TESTIMONIALS
            </button>
            <Link to="/blog" onClick={() => handleNavigateWithTop('/blog')} className="block py-3 px-4 font-mono text-sm hover:neon-text-blue border-b border-gray-800">
              THE NEXUS BLOG
            </Link>
            <div className="py-3 px-4">
              <Link to="/contact" onClick={() => handleNavigateWithTop('/contact')} className="cyber-button-blue w-full justify-center">
                LAUNCH MY SYSTEM
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
