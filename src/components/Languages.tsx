
import { Code, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react';

const Languages = () => {
  const languageCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { name: "JavaScript", level: 100 },
        { name: "C++", level: 100 },
        { name: "Python", level: 100 },
        { name: "Java", level: 100 },
        { name: "PHP", level: 100 },
        { name: "C", level: 100 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      gradient: "from-cyan-500 to-blue-600",
      items: [
        { name: "React", level: 100 },
        { name: "Bootstrap", level: 100 },
        { name: "Angular.js", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "EJS", level: 100 },
        { name: "HTML5/CSS3", level: 100 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      gradient: "from-indigo-500 to-blue-600",
      items: [
        { name: "Node.js", level: 100 },
        { name: "Express.js", level: 100 },
        { name: "Flask", level: 100 },
        { name: "PostgreSQL", level: 100 },
        { name: "MongoDB", level: 100 },
        { name: "ApacheSQL", level: 100 },
      ]
    },


    {
      title: "Machine Learning",
      icon: Smartphone,
      gradient: "from-indigo-500 to-blue-600",
      items: [
        { name: "Scikit-learn", level: 100 },
        { name: "Pandas", level: 100 },
        { name: "Matplotlib", level: 100 },
        { name: "Seaborn", level: 100 },
        { name: "Streamlit", level: 100 },
        { name: "Jupyter Notebooks", level: 100 }
      ]
    },

  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-cyan-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Languages & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My expertise spans across various programming languages and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {languageCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.gradient} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
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

export default Languages;
