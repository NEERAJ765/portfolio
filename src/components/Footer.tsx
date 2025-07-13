
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Neeraj Kuna</h3>
            <p className="text-slate-300 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Resume</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by Neearj Kuna
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
