import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  'Innovation',
  'Robotics',
  'Programming',
  'Problem Solving',
  'Leadership',
];

const techILove = [
  'Python',
  'React',
  'No Code AI Tools',
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#0069d9]">About Me</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                I'm <span className="text-blue-400">Ruthwik Reddy</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I build tech that solves real problems.<br/>
                I've won national innovation challenges but build to ship, not to win.<br/>
                Everything starts with: <span className="italic text-blue-400">"What if...?"</span>
              </p>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {focusAreas.map(area => (
                    <span key={area} className="bg-blue-600/20 border border-blue-400/30 rounded-lg px-3 py-1 text-blue-200 text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Track Record</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li><span className="font-bold text-white">40+</span> tech projects built</li>
                  <li><span className="font-bold text-white">20+</span> certifications earned</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Tech I Love</h4>
                <div className="flex flex-wrap gap-2">
                  {techILove.map(tech => (
                    <span key={tech} className="bg-blue-600/20 border border-blue-400/30 rounded-lg px-3 py-1 text-blue-200 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-30 blur-xl"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg shadow-blue-400/30">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Ruthwik Reddy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
