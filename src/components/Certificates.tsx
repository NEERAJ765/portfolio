
import { Award, Calendar, ExternalLink, Star } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: " Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      level: "Professional",
      description: "Complete web development bootcamp of 2024",
      gradient: "from-blue-500 to-cyan-500",
      featured: true,
      certificateUrl: "https://drive.google.com/file/d/1_vpbF35K-QFW7nszPrCRee4FK0soqcJo/view?usp=sharing"
    },
    {
      title: "Web Development Internship",
      issuer: "Acmygrade",
      date: "2023",
      level: "Intermediate",
      description: "PHP-based web development stack ",
      gradient: "from-cyan-500 to-blue-600",
      certificateUrl: "https://drive.google.com/file/d/1Ez2p1uL3l5qdJuH-lB6bcAKHUvQPVk3P/view?usp=sharing"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "2025",
      level: "Intermediate",
      description: "Sql Intermediate certification",
      gradient: "from-indigo-500 to-blue-600",
      certificateUrl: "https://drive.google.com/file/d/1Iub5pMnPX4945hPSOA_1bB9WhULHpfJu/view?usp=sharing"
    }

  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-600/10 to-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${cert.featured
                  ? 'border-blue-400/50 hover:border-blue-300/70 shadow-lg shadow-blue-500/20'
                  : 'border-blue-500/20 hover:border-blue-400/40'
                }`}
            >
              {cert.featured && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2">
                    <Star className="text-white" size={16} />
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30`}>
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-right">
                  <span className="text-blue-400 text-sm font-semibold">{cert.level}</span>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {cert.title}
              </h3>

              <p className="text-blue-400 font-medium text-sm mb-3">{cert.issuer}</p>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-400 text-sm">
                  <ExternalLink size={14} className="mr-1" />
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    View Certificate
                  </a>
                </div>
                <div className="flex space-x-1">
                  {[...Array(cert.level === 'Professional' ? 3 : cert.level === 'Advanced' ? 2 : 1)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Continuously learning and staying updated with the latest technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
