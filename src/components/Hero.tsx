import React from 'react';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Remove or darken the gradient overlay for a solid black background */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div> */}
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/logo.jpg" 
              alt="Ruthwik Reddy" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-blue-400 shadow-lg shadow-blue-400/30"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ruthwik <span className="text-blue-400">Reddy</span>
          </h1>
            
          <p className="text-xl md:text-2xl text-white mb-4">
            i'm 15. i build stuff.
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            some things work. some don't. i share both.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300 mb-12">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>akkenapally.reddy@gmail.com</span>
              </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 9989306597</span>
              </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50"
            >
              View Projects
            </a>
          </div>
        </div>
              </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-blue-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
