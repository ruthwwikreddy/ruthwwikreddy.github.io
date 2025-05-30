
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      {/* Enhanced radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,123,255,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>
      
      {/* Animated background lines with improved effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/50 to-transparent top-[20%] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/30 to-transparent top-[50%] animate-[pulse_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent top-[80%] animate-[pulse_4.5s_ease-in-out_infinite_0.5s]"></div>
        
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/50 to-transparent left-[20%] animate-[pulse_4.5s_ease-in-out_infinite]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/30 to-transparent left-[50%] animate-[pulse_5s_ease-in-out_infinite_0.7s]"></div>
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent left-[80%] animate-[pulse_4s_ease-in-out_infinite_1.5s]"></div>
      </div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute rounded-full bg-[#007BFF]/30"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-4 leading-tight"
              variants={itemVariants}
            >
              <span className="neon-text animate-text-flicker">Ruthwik Reddy</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-8 border-l-2 border-[#007BFF] pl-4"
              variants={itemVariants}
            >
              Student • Innovator • Tech Enthusiast
            </motion.p>

            <motion.div 
              className="space-y-4 mb-8 glass-card p-5 rounded-lg"
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

            <motion.div 
              className="flex flex-wrap gap-5 mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 123, 255, 0.7)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="#links" 
                className="btn-outline"
                onClick={(e) => handleSmoothScroll(e, '#links')}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 123, 255, 0.7)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-5"
              variants={itemVariants}
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/ruthwwikreddy/" },
                { icon: Twitter, href: "https://x.com/ruthwikreddy" },
                { icon: Instagram, href: "https://www.instagram.com/ruthwwikreddy/" },
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
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
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
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[#007BFF] shadow-[0_0_30px_rgba(0,123,255,0.5)] group">
                <motion.img 
                  src="./assets/images/logo.jpg" 
                  alt="Ruthwik Reddy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
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
