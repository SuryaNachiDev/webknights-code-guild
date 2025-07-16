
export const TechnologiesSection = () => {
  const technologies = [
    {
      name: "HTML",
      description: "Structure and content of web pages",
      icon: "🏗️",
      color: "knight-orange"
    },
    {
      name: "CSS",
      description: "Styling and visual design",
      icon: "🎨",
      color: "knight-blue"
    },
    {
      name: "JavaScript",
      description: "Interactive functionality and logic",
      icon: "⚡",
      color: "knight-purple"
    },
    {
      name: "Web Design",
      description: "User experience and interface design",
      icon: "✨",
      color: "knight-blue"
    }
  ];

  return (
    <section id="technologies" className="py-20 px-4 bg-knight-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-knight-orange neon-text mb-4">
            Technologies You'll Master
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the essential tools and languages that power the modern web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className={`text-2xl font-orbitron font-bold text-${tech.color} mb-3 neon-text`}>
                {tech.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {tech.description}
              </p>
              
              {/* Progress bar - 100% mastery */}
              <div className="mt-4 bg-knight-gray rounded-full h-2">
                <div 
                  className={`bg-${tech.color} h-2 rounded-full transition-all duration-1000 delay-500`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="text-2xl font-orbitron font-bold text-knight-blue mb-4">
            And Much More!
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Throughout the 4-week journey, you'll also learn about version control with Git, 
            responsive design principles, debugging techniques, and how to deploy your websites online. 
            Each knight will emerge with a complete portfolio of projects!
          </p>
        </div>
      </div>
    </section>
  );
};
