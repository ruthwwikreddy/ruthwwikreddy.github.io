
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Links from "@/components/Links";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth intro animation
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    window.scrollTo(0, 0);
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 100; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Observer to detect which section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-4xl font-bold text-[#007BFF]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          >
            R
          </motion.div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen w-full bg-background"
        >
          <CustomCursor />
          <div className="flex flex-col w-full">
            <Navbar activeSection={activeSection} />
            <main className="flex-1 w-full">
              <Hero />
              <About />
              <Links />
              <Banner />
              <Certifications />
              <Featured />
              <Blogs />
              <Contact />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
