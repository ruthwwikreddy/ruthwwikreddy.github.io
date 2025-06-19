
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Function to handle smooth scrolling for buttons
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-start py-20 md:py-24">
      <div className="container mx-auto w-full px-4 sm:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >          <div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="neon-text animate-text-flicker">Ruthwik Reddy</span>
            </motion.h1>
            
            <motion.div 
              className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 border-l-2 border-[#007BFF] pl-3 sm:pl-4 space-y-1 sm:space-y-2"
              variants={itemVariants}
            >
              <p>i'm 15.</p>
              <p>i build stuff.</p>
              <p>some things work. some don't. i share both.</p>
            </motion.div>

            <motion.div 
              className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 glass-card p-3 sm:p-4 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <a href="mailto:akkenapally.reddy@gmail.com" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  akkenapally.reddy@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <a href="tel:+919989306597" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  +91 9989306597
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 text-[#007BFF] mr-3 group-hover:animate-pulse" />
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </motion.div>

            {/* Buttons and social icons */}
            <div className="mt-8">
              <motion.div 
                className="flex flex-wrap gap-3 mb-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="btn-primary text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-2.5 shadow-[0_0_15px_rgba(0,123,255,0.5)] hover:shadow-[0_0_20px_rgba(0,123,255,0.7)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a 
                  href="#links" 
                  onClick={(e) => handleSmoothScroll(e, '#links')}
                  className="btn-outline text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-2.5 shadow-[0_0_15px_rgba(0,123,255,0.3)] hover:shadow-[0_0_20px_rgba(0,123,255,0.5)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>
              </motion.div>

              <motion.div 
                className="flex gap-4"
                variants={itemVariants}
              >
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ruthwwikreddy/" },
                  { icon: Twitter, href: "https://x.com/ruthwwikreddy" },
                  { icon: Instagram, href: "https://www.instagram.com/ruthwikreddy/" },
                  { icon: Github, href: "https://github.com/ruthwwikreddy" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white opacity-70 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="hidden md:flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#007BFF] to-black opacity-30 blur-xl"></div>
              <motion.div 
                className="absolute inset-0 rounded-full border border-[#007BFF]/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#007BFF] shadow-[0_0_30px_rgba(0,123,255,0.5)] group">
                <motion.img 
                  src="/images/logo.jpg" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    // Fallback in case image fails to load
                    console.error('Failed to load image:', e);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
