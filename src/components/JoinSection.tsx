
export const JoinSection = () => {
  return (
    <section id="join" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-knight-purple neon-text mb-4">
            Join the Guild
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to begin your coding quest? Register now and claim your place among the WebKnights!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="glass-card p-8 animate-slide-in-left">
            <h3 className="text-2xl font-orbitron font-bold text-knight-blue mb-6">
              🎉 Register Now
            </h3>
            <p className="text-gray-300 mb-6">
              Don't miss out on this fantastic opportunity for your child to learn valuable skills and make new friends. 
              Spaces are limited, so register today!
            </p>
            
            <div className="space-y-4">
              <a 
                href="https://forms.gle/MKj3QAncbSzyskg48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="knight-button group w-full block text-center"
              >
                <span className="knight-button-inner group-hover:text-knight-blue w-full">
                  📝 Registration Form
                </span>
              </a>

              <a 
                href="https://discord.com/invite/hN8JJjFU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>💬</span>
                <span>Join Discord Server</span>
              </a>

              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <span>✉️</span>
                <span>webknights.code@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="glass-card p-8 animate-fade-in-up">
            <h3 className="text-2xl font-orbitron font-bold text-knight-orange mb-6">
              💡 Program Highlights
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-knight-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-knight-blue mb-1">Week 1: Foundation</h4>
                  <p className="text-gray-300">HTML basics, structure, and your first webpage</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-knight-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-knight-orange mb-1">Week 2: Styling</h4>
                  <p className="text-gray-300">CSS fundamentals, colors, layouts, and responsive design</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-knight-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-knight-purple mb-1">Week 3: Interactivity</h4>
                  <p className="text-gray-300">JavaScript basics, events, and dynamic content</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">Week 4: Project</h4>
                  <p className="text-gray-300">Build your final project and deploy it online</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-knight-blue/10 border border-knight-blue/30 rounded-lg">
              <p className="text-knight-blue font-semibold text-center">
                🏆 Every knight will graduate with their own live website!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
