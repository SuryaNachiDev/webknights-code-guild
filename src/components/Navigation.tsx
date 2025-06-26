
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-knight-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-sm">WK</span>
            </div>
            <span className="font-orbitron font-bold text-xl text-knight-blue neon-text">
              WebKnights
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('hero')} className="text-white hover:text-knight-blue transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="text-white hover:text-knight-blue transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('technologies')} className="text-white hover:text-knight-blue transition-colors">
              Technologies
            </button>
            <button onClick={() => scrollTo('join')} className="text-white hover:text-knight-blue transition-colors">
              Join Guild
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollTo('hero')} className="block text-white hover:text-knight-blue transition-colors py-2">
                Home
              </button>
              <button onClick={() => scrollTo('about')} className="block text-white hover:text-knight-blue transition-colors py-2">
                About
              </button>
              <button onClick={() => scrollTo('technologies')} className="block text-white hover:text-knight-blue transition-colors py-2">
                Technologies
              </button>
              <button onClick={() => scrollTo('join')} className="block text-white hover:text-knight-blue transition-colors py-2">
                Join Guild
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
