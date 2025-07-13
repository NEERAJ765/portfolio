
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      gradient: "from-cyan-500 to-blue-600",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      icon: Database,
      gradient: "from-purple-500 to-pink-600",
      skills: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      gradient: "from-emerald-500 to-cyan-600",
      skills: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin", "Mobile UI/UX", "App Store", "Play Store"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-orange-500 to-red-600",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Vercel", "Netlify"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      gradient: "from-indigo-500 to-purple-600",
      skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite", "Linux"]
    },
    {
      title: "Languages",
      icon: Code,
      gradient: "from-pink-500 to-rose-600",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "Go", "SQL", "C++"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="px-3 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg border border-slate-500/30 text-slate-200 text-sm font-medium text-center hover:from-slate-600/50 hover:to-slate-500/50 transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
