
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  // const skills = [
  //   { icon: Code, title: "Development", description: "React, Node.js, JavaScript, Java, C++", gradient: "from-blue-500 to-cyan-500" },
  //   { icon: Palette, title: "Design", description: "UI/UX, Figma, Adobe Creative Suite", gradient: "from-cyan-500 to-blue-600" },
  //   { icon: Zap, title: "Performance", description: "Optimization, SEO, Accessibility", gradient: "from-indigo-500 to-blue-600" },
  //   { icon: Users, title: "Collaboration", description: "Agile, Git, Team Leadership", gradient: "from-blue-600 to-indigo-600" }
  // ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">





            {/* <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/30 overflow-hidden">
                <img
                  src="/images/profile.jpg" 
                  alt="Profile"
                  className="w-full h-100 object-cover"
                />

              </div>
            </div> */}

            <div className="relative">
              <div className="w-full h-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/30 overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>


            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack and machine learning developer dedicated to creating impactful digital solutions. I specialize in building scalable web applications using modern technologies like React, Node.js, and PostgreSQL, while also exploring data-driven applications using Python, Scikit-learn, and other ML tools. My academic projects and internships have helped me deliver both intelligent and user-friendly applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy solving algorithmic problems, training machine learning models, contributing to open-source projects, and exploring new trends in web and AI development to continually refine my craft.
              </p>

              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'Firebase', 'Scikit', 'Node.js', 'PostgresSQL', 'Java', 'Python', 'C++', 'C'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30`}>
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
