
export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-knight-blue/10 via-transparent to-knight-orange/10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-knight-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Knight Logo */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-knight-gradient rounded-full flex items-center justify-center animate-glow-pulse">
              <div className="w-28 h-28 bg-knight-dark rounded-full flex items-center justify-center">
                <span className="text-4xl font-orbitron font-black text-knight-blue neon-text">⚔️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="bg-knight-gradient bg-clip-text text-transparent neon-text">
            WebKnights
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-orbitron font-bold text-knight-blue mb-8 neon-text animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Code Like a Warrior
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Join the guild of digital warriors! WebKnights is a <span className="text-knight-orange font-semibold">FREE 4-week program</span> where 
          middle schoolers learn web development from experienced high school mentors. No experience required – just bring your curiosity and courage!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfavlXcvB5R9tbBl32srTBHH4tCMlsqEr6Qo-3rwwuHWDZTfg/viewform?usp=sf_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="knight-button group"
          >
            <span className="knight-button-inner group-hover:text-knight-blue">
              Join the Guild
            </span>
          </a>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-knight-blue text-knight-blue font-semibold rounded-lg hover:bg-knight-blue hover:text-knight-dark transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Program Info */}
        <div className="mt-16 glass-card p-6 mx-auto max-w-4xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="font-orbitron font-bold text-knight-blue mb-2">Duration</h3>
              <p className="text-gray-300">4 Weeks<br />July 22 - Aug 16</p>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-knight-orange mb-2">Schedule</h3>
              <p className="text-gray-300">Mon - Fri<br />11:00AM - 12:00PM</p>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-knight-purple mb-2">Location</h3>
              <p className="text-gray-300">Online<br />Google Meet</p>
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-green-400 mb-2">Cost</h3>
              <p className="text-gray-300 font-bold text-lg">100% FREE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
