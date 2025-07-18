import React from 'react';
import { Download, Github, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chilamala Vinay Kumar 
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-cyan-300 font-semibold animate-slide-in-left">
            DevOps Enthusiast | Python Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-pink-300 italic font-medium animate-slide-in-right">
            "Automating the future, one pipeline at a time."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <a
              href="https://drive.google.com/file/d/15mu8VPD0LIurfdJAbcMK73IGCuvQrBgb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="https://github.com/vinaykumar325-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
              Visit GitHub
            </a>
            <button
              onClick={scrollToProjects}
              className="border-2 border-pink-400 hover:bg-pink-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-110"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;