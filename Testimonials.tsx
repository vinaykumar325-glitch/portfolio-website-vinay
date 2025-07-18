import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      quote: 'Vinay shows great understanding of DevOps concepts and delivers real results.',
      author: 'DevOps Academy Mentor'
    },
    {
      id: '2',
      quote: 'A reliable and detail-oriented team member with strong problem-solving skills.',
      author: 'Project Collaborator'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Testimonials
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-scale-in">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-rose-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-rose-600 mb-4" size={32} />
              <p className="text-gray-600 text-lg mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-rose-600 font-bold">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;