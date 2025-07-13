
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "CDC - Portal",
      description: "A full-stack web application built with Node.js, Express.js, PostgreSQL, EJS, and Tailwind CSS, designed to streamline placement activities for students, CDC departments, and companies..",
      image: "/images/cdc.avif",
      technologies: ["EJS", "Tailwind CSS", "Javascript", "Postgres", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/cdc-portal"
    },
    {
      title: "Wine Quality Prediction",
      description: "A machine learning application built with Python, Pandas, Matplotlib, and Scikit-learn, designed to predict wine quality based on various physicochemical features using the Wine Quality dataset.",
      image: "/images/wine.jpeg",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/wine-quality-prediction"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with HTML, CSS, PHP and MYSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/images/ecommerce.avif",
      technologies: ["PHP", "HTML", "CSS", "Javascript", "MYSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/ecommerce-basic-"
    },
    {
      title: "Chess Master",
      description: "A real-time online chess game developed using Socket.IO, Chess.js, EJS, and Tailwind CSS, enabling seamless multiplayer gameplay",
      image: "/images/chess.avif",
      technologies: ["React", "Tailwindcss", "Socket.io"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/Chess-game"
    },
    {
      title: "Pack Your Bags",
      description: "A responsive and visually captivating frontend tourism website showcasing global destinations, travel plans, and essential information. Built using HTML, CSS, and Bootstrap.",
      image: "/images/pack.avif",
      technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/tourism"
    },

    {
      title: "Firebase Contact App",
      description: "A responsive contact management app built with React and Tailwind CSS, integrated with Firebase for real-time data storage and retrieval. ",
      image: "/images/fire.avif",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/NEERAJ765/Firebase-Contact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-purple-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Source
                  </Button>
                  <a  href={project.githubUrl} 
                      target='_blank'
                    className="border-slate-500 border-radius text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"
                  >
                    <Github size={16} />
                    Source
                  </a> */}
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 flex items-center gap-2 px-4 py-2 rounded-md transition-all"
                  >
                    <Github size={16} />
                    Source
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
