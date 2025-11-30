import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ruthwwikreddy',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ruthwwikreddy',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/youngfounderrr/',
      label: 'Instagram',
    },
    {
      icon: MessageCircle,
      href: 'https://chat.whatsapp.com/CLhH4vNLi9C5f2aJXRdS9H',
      label: 'WhatsApp Community',
    },
    {
      icon: Mail,
      href: 'mailto:akkenapally.reddy@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-3">
                Ruthwik Reddy
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                15-year-old developer passionate about building innovative solutions and creating
                meaningful digital experiences.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Get in Touch</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:akkenapally.reddy@gmail.com"
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  akkenapally.reddy@gmail.com
                </a>
                <a
                  href="tel:+917842906633"
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  +91 7842906633
                </a>
                <p className="text-white/70">Hyderabad, India</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/10"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-white/50 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-white fill-current" /> by Ruthwik Reddy
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
