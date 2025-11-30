import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated Background Grid - Removed to fix layout gap */}


      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="relative inline-block"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
                <img
                  src="/images/logo.jpg"
                  alt="Ruthwik Reddy"
                  className="w-full h-full rounded-full object-cover border-2 border-white/30 shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Ruthwik</span>
              <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Reddy</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="font-semibold">15.</span> Building the future,{' '}
              <span className="font-medium">one line at a time.</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-stack developer, designer, and creator. I transform ideas into elegant digital experiences
              that people love to use.
            </p>
          </motion.div>

          {/* Signature */}
          <motion.div variants={itemVariants} className="mb-12 flex justify-center">
            <div className="h-24 md:h-32 overflow-hidden flex items-center justify-center">
              <img
                src="/images/Signature/SVG/4.svg"
                alt="Signature"
                className="h-48 md:h-64 w-auto max-w-none opacity-90 invert -mt-4"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="https://ideaboard.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Visit Company
                <img src="https://ideaboard.live/logo.png" alt="IdeaBoard" className="w-5 h-5 object-contain invert" />
              </span>
            </motion.a>

            <motion.a
              href="#case-studies"
              className="px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/ruthwwikreddy', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/ruthwwikreddy', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://www.instagram.com/youngfounderrr/', label: 'Instagram' },
              { icon: Mail, href: 'mailto:akkenapally.reddy@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
