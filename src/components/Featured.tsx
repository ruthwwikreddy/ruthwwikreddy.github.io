
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedLink {
  url: string;
  title: string;
  category?: string;
}

const Featured = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const featuredLinks: FeaturedLink[] = [
    { url: "https://youthideathon.in/world-entrepreneur-day-celebrating-those-who-make-big-ideas-happen/", title: "Turning Big Ideas into Reality: Celebrating World Entrepreneur Day", category: "Entrepreneurship" },
    { url: "https://youthideathon.in/todays-blog-on-webinar-start-your-startup/", title: "From Idea to Reality: Insights from the 'Start Your Startup' Webinar", category: "Entrepreneurship" },
    { url: "https://www.amsporps.org/accolades_2022_2023/28.ATAL_Innovation_Summit.pdf", title: "ATAL Innovation Summit: Celebrating Young Innovators", category: "Innovation" },
    { url: "https://hyperstack.id/credential/85b77067-ee11-4696-8f4e-b4afba8cc898", title: "ATL Marathon 2022 - 23 - Top 400 Teams", category: "Achievement" },
    { url: "https://portal.itscredible.com/qr/455692314649", title: "Top 1000 at Youth Ideathon 2023", category: "Achievement" },
    { url: "https://hyperstack.id/credential/3e2777ac-e851-436b-9cd2-ed068e0c13b1", title: "Tinkerpreneur 2024", category: "Entrepreneurship" },
    { url: "https://unstop.com/certificate-preview/292ce27d-1251-4963-9e94-9478607f492d?utm_campaign=", title: "Webinar on Future of Semiconductor", category: "Technology" },
    { url: "https://unstop.com/certificate-preview/b1a0bceb-806a-42ff-bf12-601347f504e7?utm_campaign=", title: "InnoVision 2024: Igniting Ideas, Shaping the Future", category: "Innovation" },
    { url: "http://unstop.com/certificate-preview/24341243-70d2-4c7a-be8a-bbb5ff82fd2d", title: "Youth Entrepreneurship Challenge", category: "Entrepreneurship" },
    { url: "https://unstop.com/certificate-preview/17785b0d-2049-440d-8491-fb660f9ff070", title: "TATA Crucible Campus Quiz 2024", category: "Competition" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/13996561", title: "Innovating with Google Cloud Artificial Intelligence", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/12784720", title: "Introduction to Security Principles in Cloud Computing", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/11605627", title: "Introduction to Data Analytics in Google Cloud", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/8372913", title: "Introduction to Large Language Models", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/7997050", title: "Introduction to Responsible AI", category: "Technology" },
    { url: "https://www.cloudskillsboost.google/public_profiles/0449bd87-9b01-43d5-b528-788c68dcbba4/badges/6360159", title: "Introduction to Generative AI", category: "Technology" },
  ];

  // Extract unique categories
  const categories = [...new Set(featuredLinks.map(link => link.category))].filter(Boolean) as string[];

  // Filter links based on active category
  const filteredLinks = activeCategory 
    ? featuredLinks.filter(link => link.category === activeCategory)
    : featuredLinks;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleLinkClick = (url: string) => {
    // Open the link in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Scroll to top of container when category changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  // Card variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <section id="featured" className="py-16 md:py-24 bg-black text-white relative overflow-hidden w-full max-w-[100vw]">
      {/* Enhanced background elements with more dynamic effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#007BFF]/10 blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#007BFF]/10 blur-[120px] animate-pulse-soft" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-[#007BFF]/10 blur-[80px] animate-pulse-soft" style={{animationDelay: "0.8s"}}></div>
        
        {/* Interactive grid lines that respond to scroll */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent absolute top-1/4 animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent absolute top-2/4 animate-[pulse_10s_ease-in-out_infinite]"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#007BFF]/20 to-transparent absolute top-3/4 animate-[pulse_7s_ease-in-out_infinite]"></div>
          
          {/* Vertical lines */}
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent absolute left-1/4 animate-[pulse_9s_ease-in-out_infinite]"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent absolute left-2/4 animate-[pulse_11s_ease-in-out_infinite]"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#007BFF]/20 to-transparent absolute left-3/4 animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#007BFF]/30"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Enhanced section title with animation */}
          <motion.div 
            className="flex items-center mb-4 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Star className="text-[#007BFF] w-5 h-5 mr-2 group-hover:animate-[spin_4s_linear_infinite]" />
            <h2 className="text-4xl font-bold text-white uppercase tracking-widest group-hover:text-[#007BFF] transition-colors duration-300">Featured</h2>
            <Star className="text-[#007BFF] w-5 h-5 ml-2 group-hover:animate-[spin_4s_linear_infinite]" />
          </motion.div>
          
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-transparent via-[#007BFF] to-transparent rounded-full shadow-[0_0_10px_rgba(0,123,255,0.7)] mb-14"
            whileHover={{ width: 180 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          {/* Enhanced Category filter with animations */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button 
              onClick={() => setActiveCategory(null)} 
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-[#007BFF] text-white shadow-[0_0_15px_rgba(0,123,255,0.5)]'
                  : 'bg-black/70 backdrop-blur-sm text-gray-300 border border-[#007BFF]/20 hover:border-[#007BFF]/70 hover:text-white hover:shadow-[0_0_10px_rgba(0,123,255,0.3)]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              All
            </motion.button>
            
            {categories.map((category) => (
              <motion.button 
                key={category} 
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#007BFF] text-white shadow-[0_0_15px_rgba(0,123,255,0.5)]'
                    : 'bg-black/70 backdrop-blur-sm text-gray-300 border border-[#007BFF]/20 hover:border-[#007BFF]/70 hover:text-white hover:shadow-[0_0_10px_rgba(0,123,255,0.3)]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Card grid with improved layout and animations */}
          <div ref={containerRef} className="overflow-y-auto max-h-[800px] hide-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory || 'all'}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                  exit: { opacity: 0, transition: { duration: 0.3 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="group bg-black/40 backdrop-blur-md p-6 rounded-lg transition-all duration-500 border border-[#007BFF]/10 hover:border-[#007BFF] hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] relative overflow-hidden cursor-pointer transform hover:-translate-y-1"
                    onClick={() => handleLinkClick(link.url)}
                    onMouseEnter={() => setHoveredCardIndex(index)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                  >
                    {/* Enhanced hover effect with animated gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Particle effect on hover */}
                    {hoveredCardIndex === index && (
                      <>
                        <div className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#007BFF]/50 animate-ping"></div>
                        <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-[#007BFF]/50 animate-ping" style={{animationDelay: "0.3s"}}></div>
                        <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-[#007BFF]/50 animate-ping" style={{animationDelay: "0.6s"}}></div>
                      </>
                    )}
                    
                    {/* Category badge with improved styling */}
                    {link.category && (
                      <span className="inline-block px-3 py-1 text-xs bg-black/80 text-[#007BFF] rounded-full mb-4 border border-[#007BFF]/30 group-hover:bg-[#007BFF]/10 group-hover:border-[#007BFF]/60 transition-all duration-300">
                        {link.category}
                      </span>
                    )}
                    
                    {/* Title with improved hover effect */}
                    <div className="text-lg font-semibold text-white group-hover:text-[#007BFF] transition-all duration-300 flex items-start">
                      <span className="flex-1">{link.title}</span>
                      <ArrowUpRight className="w-4 h-4 mt-1 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-500" />
                    </div>
                    
                    {/* Enhanced glow effect */}
                    <div className="h-0.5 w-0 bg-gradient-to-r from-[#007BFF]/50 to-[#007BFF] group-hover:w-full absolute bottom-0 left-0 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(0,123,255,0.7)]"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#007BFF]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Empty state message with animations if no items match filter */}
          {filteredLinks.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-10"
            >
              <p className="text-gray-400 mb-4">No featured links match the selected category.</p>
              <motion.button 
                onClick={() => setActiveCategory(null)}
                className="px-4 py-2 bg-[#007BFF]/20 text-[#007BFF] rounded-md hover:bg-[#007BFF]/30 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Show all links
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Fixed indicator dots for larger screens showing all available categories */}
      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col gap-2 z-30">
        {[null, ...categories].map((category, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              (category === activeCategory || (category === null && activeCategory === null))
                ? 'bg-[#007BFF] shadow-[0_0_10px_rgba(0,123,255,0.7)]'
                : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.5 }}
            onClick={() => setActiveCategory(category)}
            title={category || 'All'}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
