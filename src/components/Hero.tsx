
import { ArrowDown, Github, Linkedin, Mail, Download, Play, Star } from 'lucide-react';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-400/20 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-blue-400/30">
              <span className="text-4xl font-bold text-white">NK</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Neeraj Kuna
            </span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="text-2xl md:text-4xl text-gray-300 mb-6 font-light">
            <span className="text-blue-400">Full Stack</span> Developer <span className="text-cyan-400">&</span> <span className="text-blue-400">Machine Learning</span> Enthusiast
          </div>


          {/* Interactive Description */}
          <div className="max-w-3xl mx-auto mb-12 space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed">
              Crafting digital experiences that blend <span className="text-blue-400 font-semibold">innovation</span> with functionality
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Star className="text-blue-400" size={16} />
                <span>Fresher</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-blue-400" size={16} />
                <span>5+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-blue-400" size={16} />
                <span>Creating scalable web apps passionately</span>
              </div>
            </div>
          </div>

          {/* Interactive Buttons */}

          <div className="flex justify-center items-center mb-16">
            <a
              href="https://drive.google.com/file/d/1S3WhFsUZBsl7H2x02BxP5D_qAxxtHocS/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Download CV
              </Button>
            </a>
          </div>


          {/* Social Links */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
              {/* GitHub */}
              <a href="https://github.com/NEERAJ765" target='_blank' className="group relative">
                <div className="w-14 h-14 bg-gray-900 border border-blue-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/neerajkuna/" target='_blank' className="group relative">
                <div className="w-14 h-14 bg-gray-900 border border-blue-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* Mail */}
              <a href="mailto:kunaneeraj2004@gmail.com" target="_blank" className="group relative">
                <div className="w-14 h-14 bg-gray-900 border border-blue-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>

              {/* LeetCode */}
              <a href="https://leetcode.com/u/kuna_neeraj/" target="_blank" className="group relative">
                <div className="w-14 h-14 text-xl bg-gray-900 border border-yellow-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-yellow-500 group-hover:border-yellow-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
                  🧠
                </div>
              </a>

              {/* CodeChef */}
              <a href="https://www.codechef.com/users/neeraj_47" target="_blank" className="group relative">
                <div className="w-14 h-14 text-xl bg-gray-900 border border-purple-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-purple-600 group-hover:border-purple-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                  🍽️
                </div>
              </a>

              {/* GFG */}
              <a href="https://www.geeksforgeeks.org/user/kunaneer3qbo/" target="_blank" className="group relative">
                <div className="w-14 h-14 text-xl bg-gray-900 border border-green-500/30 rounded-full flex items-center justify-center 
        transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-400 
        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-400/50">
                  🌿
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-none">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-400 text-sm">Scroll Down</span>
            <ArrowDown className="text-blue-400" size={24} />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
