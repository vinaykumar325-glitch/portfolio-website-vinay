import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Languages',
      skills: ['Python', 'Shell']
    },
    {
      category: 'DevOps Tools',
      skills: ['Jenkins', 'Docker', 'SonarQube', 'Kubernetes', 'Terraform']
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS (EC2, IAM, S3, EKS, VPC)', 'GCP']
    },
    {
      category: 'Version Control',
      skills: ['Git', 'GitHub']
    },
    {
      category: 'Databases',
      skills: ['MySQL']
    },
    {
      category: 'Operating Systems',
      skills: ['Linux']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem-Solving', 'Public Speaking', 'Team Collaboration']
    }
  ];

  const getSkillColors = (category: string) => {
    const colorMap = {
      'Languages': {
        border: 'border-blue-500',
        title: 'text-blue-600',
        badge: 'bg-blue-500'
      },
      'DevOps Tools': {
        border: 'border-purple-500',
        title: 'text-purple-600',
        badge: 'bg-purple-500'
      },
      'Cloud Platforms': {
        border: 'border-indigo-500',
        title: 'text-indigo-600',
        badge: 'bg-indigo-500'
      },
      'Version Control': {
        border: 'border-green-500',
        title: 'text-green-600',
        badge: 'bg-green-500'
      },
      'Databases': {
        border: 'border-orange-500',
        title: 'text-orange-600',
        badge: 'bg-orange-500'
      },
      'Operating Systems': {
        border: 'border-red-500',
        title: 'text-red-600',
        badge: 'bg-red-500'
      },
      'Soft Skills': {
        border: 'border-pink-500',
        title: 'text-pink-600',
        badge: 'bg-pink-500'
      }
    };
    return colorMap[category as keyof typeof colorMap] || {
      border: 'border-gray-500',
      title: 'text-gray-600',
      badge: 'bg-gray-500'
    };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Skills & Tech Stack
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {skills.map((skillGroup, index) => (
            {(() => {
              const colors = getSkillColors(skillGroup.category);
              return (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 ${colors.border}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-4 ${colors.title}`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 ${colors.badge} text-white text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
              );
            })()}
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;