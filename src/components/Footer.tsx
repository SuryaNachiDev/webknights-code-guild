
export const Footer = () => {
  return (
    <footer className="bg-knight-darker border-t border-knight-gray/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-knight-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold">WK</span>
              </div>
              <span className="font-orbitron font-bold text-2xl text-knight-blue neon-text">
                WebKnights
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Forging the next generation of digital warriors through code, creativity, and community.
            </p>
            <p className="text-knight-orange font-semibold">
              Code Like a Warrior ⚔️
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-orbitron font-bold text-knight-blue mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-knight-blue transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-knight-blue transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-knight-blue transition-colors"
              >
                Technologies
              </button>
              <button 
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto text-gray-400 hover:text-knight-blue transition-colors"
              >
                Join Guild
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="font-orbitron font-bold text-knight-orange mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                📧 webknights.code@gmail.com
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a 
                  href="https://discord.com/invite/hN8JJjFU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-white">💬</span>
                </a>
                <a 
                  href="https://forms.gle/MKj3QAncbSzyskg48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-knight-blue hover:bg-knight-blue/80 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-white">📝</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-knight-gray/30 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WebKnights. Made with ⚔️ for aspiring digital warriors.
          </p>
          <p className="text-knight-blue text-sm mt-2">
            July 22 - August 16 | Mon-Fri 11:00AM-12:00PM | 100% FREE
          </p>
        </div>
      </div>
    </footer>
  );
};
