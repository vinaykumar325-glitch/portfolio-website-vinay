import React from 'react';
import { Code, Cloud, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm <span className="text-purple-600 font-bold">C Vinay Kumar</span>, Btech 2024 Graduate in the stream of Mechanical Engineering at Gates Institute of Technology, passionate about building scalable, automated infrastructure, Developing Apps and Websites.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I specialize in <span className="text-blue-600 font-semibold">Python</span>, <span className="text-green-600 font-semibold">DevOps tools</span>, and cloud platforms like <span className="text-orange-600 font-semibold">AWS</span> and <span className="text-red-600 font-semibold">GCP</span>. I've built real-world CI/CD pipelines, containerized apps, and automated infrastructure using Terraform.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm constantly learning and love solving <span className="text-cyan-600 font-semibold">real engineering problems</span>.
              </p>
            </div>
            
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <Code className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-600">Development</h3>
                </div>
                <p className="text-gray-600">Python expertise with focus on automation and microservices</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <Wrench className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-purple-600">DevOps</h3>
                </div>
                <p className="text-gray-600">CI/CD pipelines, containerization, and infrastructure automation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-cyan-500">
                <div className="flex items-center mb-3">
                  <Cloud className="text-cyan-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-cyan-600">Cloud</h3>
                </div>
                <p className="text-gray-600">AWS and GCP platforms with infrastructure as code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;