import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Award, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'case-studies', 'certifications', 'contact'];

      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Find which section is currently in view
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          // Check if section is in the upper half of viewport
          if (top <= 150) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'case-studies', label: 'Projects', icon: Briefcase, href: '#case-studies' },
    { id: 'certifications', label: 'Certifications', icon: Award, href: '#certifications' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    console.log('scrollToSection called with href:', href);

    const element = document.querySelector(href);
    console.log('Found element:', element);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      console.log('Element position:', elementPosition);
      console.log('Current scrollY:', window.scrollY);
      console.log('Target scroll position:', offsetPosition);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      console.log('Scroll command executed');
    } else {
      console.error('Element not found for href:', href);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[95vw]">
        <nav
          className={cn(
            "flex items-center gap-1 p-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg transition-all duration-300",
            isHovered ? "scale-105 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]" : ""
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "relative px-3 sm:px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-300 group",
                  isActive
                    ? "bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                <span className={cn(
                  "text-xs sm:text-sm font-medium transition-all duration-300 hidden sm:block",
                  isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                )}>
                  {item.label}
                </span>
                {/* Mobile Label (only for active) */}
                <span className={cn(
                  "text-xs font-medium transition-all duration-300 sm:hidden",
                  isActive ? "block" : "hidden"
                )}>
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed z-40 bottom-24 right-6 p-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} className="text-white" />
      </button>
    </>
  );
};

export default Navbar;
