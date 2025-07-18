import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center animate-fade-in-up">
          <p className="text-lg mb-4 italic text-cyan-300 font-semibold">
            "Built with passion and deployed with precision."
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/vinaykumar325-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/chilamala-vinay-kumar-616a99280"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chilamalavinaykumar@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-gray-400">
            © 2024 Vinay Kumar Chilamala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;