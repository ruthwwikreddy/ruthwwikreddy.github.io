
import React from 'react';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://www.linkedin.com/in/ruthwwikreddy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#007BFF] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/ruthwwikreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#007BFF] transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/ruthwikreddy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#007BFF] transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/ruthwwikreddy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#007BFF] transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p>built this myself. still fixing bugs.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
