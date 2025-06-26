
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-knight-blue neon-text mb-4">
            What is WebKnights?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A unique, hands-on learning experience designed to ignite a passion for technology and creativity in middle school students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-orbitron font-bold text-knight-orange mb-6">
                🖥️ Our Mission
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                WebKnights pairs knowledgeable high school mentors with eager middle schoolers to teach them 
                the fundamentals of web development. By the end of the program, every student will have created 
                their own unique and interactive website.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-knight-blue rounded-full mt-2"></div>
                  <p className="text-gray-300"><span className="text-knight-blue font-semibold">Inclusivity:</span> No previous knowledge required; everyone is welcome!</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-knight-orange rounded-full mt-2"></div>
                  <p className="text-gray-300"><span className="text-knight-orange font-semibold">Interactive Learning:</span> Students build their own websites from scratch!</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-knight-purple rounded-full mt-2"></div>
                  <p className="text-gray-300"><span className="text-knight-purple font-semibold">Mentorship:</span> Guidance from experienced high schoolers who share a love for coding.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-orbitron font-bold text-knight-blue mb-6">
                👩‍💻 Why Join WebKnights?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-knight-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-knight-blue">Skill Development</h4>
                    <p className="text-gray-300">Learn HTML, CSS, JavaScript, and more in a fun, engaging environment.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-knight-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-knight-orange">Future Ready</h4>
                    <p className="text-gray-300">Prepare your child for the tech-driven future with essential digital skills.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-knight-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-knight-purple">Community</h4>
                    <p className="text-gray-300">Make new friends and join a community of young tech enthusiasts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
