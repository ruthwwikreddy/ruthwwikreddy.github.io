import React, { useEffect, useState, useCallback } from 'react';
import { ExternalLink, Link2, ArrowUpRight, Bookmark, Code, Gamepad2, Palette, Search, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Links = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Combine all links into a single array with enhanced metadata
  const allLinks = [
    // Main Projects
    { 
      url: "https://ruthwikreddy.xyz/medilink/", 
      github: "https://github.com/ruthwwikreddy/medilink",
      label: "MediLink V1", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Healthcare management system focused on patient care",
      tags: ["Healthcare", "React", "Node.js"]
    },
    { 
      url: "https://medilinkindia.glide.page/", 
      github: "https://github.com/ruthwwikreddy/medilink-india",
      label: "MediLink V2", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Enhanced version with additional features and improved UI",
      tags: ["Healthcare", "Mobile", "PWA"]
    },
    { 
      url: "https://medilink-india.vercel.app/", 
      github: "https://github.com/ruthwwikreddy/medilink-india",
      label: "MediLink Main", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Flagship version of the MediLink platform",
      tags: ["Healthcare", "Full Stack", "Next.js"]
    },
    { 
      url: "https://ruthwikreddy.xyz/emergency-card/", 
      github: "https://github.com/ruthwwikreddy/emergency-card",
      label: "Emergency Card", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Quick access emergency information system",
      tags: ["Safety", "React", "Mobile First"]
    },
    { 
      url: "https://muscleworks.vercel.app/", 
      github: "https://github.com/ruthwwikreddy/muscleworks",
      label: "Muscle Works", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Fitness tracking and workout planning platform",
      tags: ["Fitness", "React", "Health"]
    },
    { 
      url: "https://dolcevita-india.vercel.app/", 
      github: "https://github.com/ruthwwikreddy/dolcevita-india",
      label: "Dolce Vita", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Luxury lifestyle and fashion platform",
      tags: ["E-commerce", "Next.js", "Fashion"]
    },
    { 
      url: "https://ruthwikreddy.xyz/innovate-students/", 
      github: "https://github.com/ruthwwikreddy/innovate-students",
      label: "Innovate Students", 
      category: "Project", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Platform for student innovation and collaboration",
      tags: ["Education", "React", "Community"]
    },
    
    // Educational Tools
    { 
      url: "https://ruthwikreddy.xyz/carbon_atom/", 
      github: "https://github.com/ruthwwikreddy/carbon_atom",
      label: "Carbon Atom", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Interactive atomic structure visualization",
      tags: ["Science", "Education", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/periodic_table/", 
      github: "https://github.com/ruthwwikreddy/periodic_table",
      label: "Periodic Table", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Interactive periodic table with detailed elements",
      tags: ["Chemistry", "Education", "Reference"]
    },
    { 
      url: "https://ruthwikreddy.xyz/age_calculator/", 
      github: "https://github.com/ruthwwikreddy/age_calculator",
      label: "Age Calculator", 
      category: "Educational", 
      icon: <Bookmark className="h-4 w-4" />,
      description: "Precise age calculation tool with additional features",
      tags: ["Utility", "JavaScript", "Tool"]
    },
    
    // Games & Interactive
    { 
      url: "https://ruthwikreddy.xyz/memory_game/", 
      github: "https://github.com/ruthwwikreddy/memory_game",
      label: "Memory Game", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Brain training memory card game",
      tags: ["Game", "JavaScript", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/rock_paper/", 
      github: "https://github.com/ruthwwikreddy/rock_paper",
      label: "Rock Paper Scissors", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Classic game with modern twist",
      tags: ["Game", "JavaScript", "Fun"]
    },
    { 
      url: "https://ruthwikreddy.xyz/tambola-caller/", 
      github: "https://github.com/ruthwwikreddy/tambola-caller",
      label: "Tambola Caller", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Digital housie number caller",
      tags: ["Game", "Utility", "Entertainment"]
    },
    { 
      url: "https://ruthwikreddy.xyz/jarvis/", 
      github: "https://github.com/ruthwwikreddy/jarvis",
      label: "Jarvis Assistant", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "AI-powered virtual assistant",
      tags: ["AI", "Assistant", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/blinking_clock/", 
      github: "https://github.com/ruthwwikreddy/blinking_clock",
      label: "Blinking Clock", 
      category: "Game", 
      icon: <Gamepad2 className="h-4 w-4" />,
      description: "Aesthetic digital clock with animations",
      tags: ["UI", "JavaScript", "Design"]
    },
    
    // UI/UX Showcases
    { 
      url: "https://ruthwikreddy.xyz/image_slider/", 
      github: "https://github.com/ruthwwikreddy/image_slider",
      label: "Image Slider", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Smooth and responsive image carousel",
      tags: ["UI", "Animation", "Component"]
    },
    { 
      url: "https://ruthwikreddy.xyz/calendar/", 
      github: "https://github.com/ruthwwikreddy/calendar",
      label: "Calendar", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Modern calendar component with events",
      tags: ["UI", "Date", "Component"]
    },
    { 
      url: "https://ruthwikreddy.xyz/room/", 
      github: "https://github.com/ruthwwikreddy/room",
      label: "Room Design", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "3D room visualization interface",
      tags: ["3D", "Design", "Interactive"]
    },
    { 
      url: "https://ruthwikreddy.xyz/restaurant/", 
      github: "https://github.com/ruthwwikreddy/restaurant",
      label: "Restaurant UI", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Modern restaurant website template",
      tags: ["UI", "Food", "Business"]
    },
    { 
      url: "https://ruthwikreddy.xyz/invitation/", 
      github: "https://github.com/ruthwwikreddy/invitation",
      label: "Invitation", 
      category: "UI/UX", 
      icon: <Palette className="h-4 w-4" />,
      description: "Digital invitation card creator",
      tags: ["Design", "Events", "Creative"]
    },

    // Additional Projects with details added
    { 
      github: "https://github.com/ruthwwikreddy/instagram-bio", 
      label: "Instagram Bio",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Simple Instagram bio generator or template showcase.",
      tags: ["Social Media", "Utility", "Customization"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/time", 
      label: "Time",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Basic time management or clock project.",
      tags: ["Time", "Clock", "JavaScript"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/day-predictor", 
      label: "Day Predictor",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Tool to predict the day for any given date.",
      tags: ["Date", "JavaScript", "Tool"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/ruthwwikreddy.github.io", 
      label: "Portfolio",
      category: "Portfolio", 
      icon: <Palette className="h-4 w-4" />,
      description: "Personal project portfolio website.",
      tags: ["Portfolio", "Web", "Personal"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/beatsync", 
      label: "BeatSync",
      category: "Music Tool", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Synchronized music sharing tool.",
      tags: ["Music", "Sync", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/textshare", 
      label: "TextShare",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Website to paste and share text across devices.",
      tags: ["Utility", "Sharing", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/hand-scan", 
      label: "Hand Scan",
      category: "AI/UX", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Hand scanning feature for interaction or authentication.",
      tags: ["AI", "UX", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/ruthwikredddy", 
      label: "Old Portfolio",
      category: "Portfolio", 
      icon: <Palette className="h-4 w-4" />,
      description: "Previous version of personal portfolio.",
      tags: ["Portfolio", "Web", "Personal"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/diet-plan", 
      label: "Diet Plan",
      category: "Health", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Simple diet planning and tracking application.",
      tags: ["Health", "Fitness", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/steganography", 
      label: "Steganography",
      category: "Security", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Data hiding tool using steganography principles.",
      tags: ["Security", "Steganography", "Tool"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/idle-user", 
      label: "Idle User",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Detects idle users on web pages.",
      tags: ["Utility", "Web", "Tracking"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/resume-maker", 
      label: "Resume Maker",
      category: "Productivity", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Tool for creating professional resumes easily.",
      tags: ["Productivity", "Resume", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/ruthwwikreddy", 
      label: "Main GitHub Profile Repo",
      category: "Profile", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Main GitHub profile readme and repo.",
      tags: ["Profile", "Documentation"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/pitch-deck-reviewer", 
      label: "Pitch Deck Reviewer",
      category: "Business Tool", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Pitch deck analysis and feedback generation tool.",
      tags: ["Business", "Review", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/teacher-gpt", 
      label: "Teacher GPT",
      category: "AI/Education", 
      icon: <Link2 className="h-4 w-4" />,
      description: "AI-powered virtual teacher assistant.",
      tags: ["AI", "Education", "Chatbot"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/legal.ai", 
      label: "Legal AI",
      category: "AI/Legal", 
      icon: <Link2 className="h-4 w-4" />,
      description: "AI-assisted legal information bot.",
      tags: ["AI", "Legal", "Chatbot"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/startup-evaluator", 
      label: "Startup Evaluator",
      category: "Business Tool", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Automated startup idea evaluation tool.",
      tags: ["Business", "Evaluation", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/automatic-typing", 
      label: "Automatic Typing",
      category: "Fun/Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Simulates automatic typing on web pages.",
      tags: ["Fun", "Typing", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/student-nexus", 
      label: "Student Nexus",
      category: "Education", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Platform to connect students and resources.",
      tags: ["Education", "Community", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/certificate-generator", 
      label: "Certificate Generator",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Generate and customize certificates easily.",
      tags: ["Certificate", "Utility", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/instagram-bot", 
      label: "Instagram Bot",
      category: "Automation", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Automated Instagram interaction bot.",
      tags: ["Automation", "Instagram", "Bot"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/venturex-india", 
      label: "VentureX India",
      category: "Business", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Platform for Indian startup collaboration.",
      tags: ["Business", "Startup", "Collaboration"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/github", 
      label: "GitHub Repo",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Miscellaneous GitHub repository.",
      tags: ["Utility", "Repository"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/brain", 
      label: "Brain",
      category: "Fun", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Brainstorming or creative idea tracker.",
      tags: ["Fun", "Idea", "Tool"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/plant-pulse", 
      label: "Plant Pulse",
      category: "Health/Environment", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Plant health monitoring solution.",
      tags: ["Health", "Environment", "Monitoring"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/smart-nfc", 
      label: "Smart NFC",
      category: "Technology", 
      icon: <Link2 className="h-4 w-4" />,
      description: "NFC-based smart interaction tool.",
      tags: ["NFC", "Technology", "Tool"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/teleprompter-video", 
      label: "Teleprompter Video",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Teleprompter overlay for video recording.",
      tags: ["Video", "Utility", "Teleprompter"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/script-to-screen-star", 
      label: "Script to Screen Star",
      category: "Education/Media", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Tool to transform scripts to screen-ready formats.",
      tags: ["Education", "Media", "Script"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/venturex", 
      label: "VentureX",
      category: "Business", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Startup accelerator platform.",
      tags: ["Business", "Accelerator", "Platform"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/pitch-house", 
      label: "Pitch House",
      category: "Business Tool", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Platform to share and review pitch decks.",
      tags: ["Business", "Pitch", "Review"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/luxuryloop-rentals", 
      label: "Luxury Loop Rentals",
      category: "E-commerce", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Luxury car and fashion rental platform.",
      tags: ["E-commerce", "Rental", "Luxury"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/cricket-tracker", 
      label: "Cricket Tracker",
      category: "Sports", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Cricket match tracking tool.",
      tags: ["Sports", "Tracker", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/luxury-car", 
      label: "Luxury Car",
      category: "Showcase", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Luxury car showcase platform.",
      tags: ["Luxury", "Showcase", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/Python-Projects", 
      label: "Python Projects",
      category: "Collection", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Collection of Python-based mini projects.",
      tags: ["Python", "Collection", "Utility"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/lost-found", 
      label: "Lost & Found",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Lost and found item tracking platform.",
      tags: ["Utility", "Tracking", "Community"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/venture-lab-accelerator", 
      label: "Venture Lab Accelerator",
      category: "Business", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Accelerator program platform for startups.",
      tags: ["Business", "Accelerator", "Platform"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/newyear2025", 
      label: "New Year 2025",
      category: "Creative", 
      icon: <Link2 className="h-4 w-4" />,
      description: "New Year celebration themed project.",
      tags: ["Creative", "New Year", "Fun"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/word-counter", 
      label: "Word Counter",
      category: "Utility", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Simple word and character counting tool.",
      tags: ["Utility", "Word Count", "Tool"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/newyear25", 
      label: "New Year 25",
      category: "Creative", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Another New Year themed project.",
      tags: ["Creative", "New Year", "Fun"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/formatter_linkedin", 
      label: "Formatter LinkedIn",
      category: "Productivity", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Tool to format LinkedIn posts efficiently.",
      tags: ["Productivity", "LinkedIn", "Formatter"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/innovate-hub-student", 
      label: "Innovate Hub Student",
      category: "Education", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Innovation platform for student collaboration.",
      tags: ["Education", "Innovation", "Web"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/Binary", 
      label: "Binary",
      category: "Educational", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Basic binary number system learning tool.",
      tags: ["Education", "Binary", "Learning"]
    },
    { 
      github: "https://github.com/ruthwwikreddy/investminds", 
      label: "InvestMinds",
      category: "Finance", 
      icon: <Link2 className="h-4 w-4" />,
      description: "Investment and financial learning platform.",
      tags: ["Finance", "Investment", "Learning"]
    }
  ];

  // Filter links based on search and category
  const filteredLinks = allLinks.filter(link => {
    const matchesSearch = link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         link.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || link.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(allLinks.map(link => link.category))];

  // Function to safely open links in a new tab
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to get color based on category
  const getCategoryColorClass = (category: string) => {
    switch(category) {
      case 'Project': return 'from-blue-500 to-[#007BFF]';
      case 'Educational': return 'from-cyan-400 to-[#007BFF]';
      case 'Game': return 'from-emerald-400 to-[#007BFF]';
      case 'UI/UX': return 'from-indigo-400 to-[#007BFF]';
      default: return 'from-slate-400 to-[#007BFF]';
    }
  };

  // Set up auto-rotation every 3 seconds
  useEffect(() => {
    if (!api) return;

    const autoRotateInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(autoRotateInterval);
  }, [api]);

  // Update current slide index when carousel moves
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="links" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced background with animated grid and particles */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#007BFF]/30"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-center mx-auto mb-6 text-3xl sm:text-4xl md:text-5xl font-bold">Projects</h2>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="relative w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-[#007BFF]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#007BFF] transition-all duration-300"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                !selectedCategory 
                  ? 'bg-[#007BFF] text-white' 
                  : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-[#007BFF] text-white' 
                    : 'bg-black/50 text-gray-300 border border-[#007BFF]/30 hover:border-[#007BFF]/70'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((link, index) => (
            <div
              key={link.github || link.url}
              className="relative overflow-hidden backdrop-blur-sm bg-black/40 border border-[#007BFF]/10 rounded-lg"
            >
              <div className="block p-6">
                {/* Category badge */}
                {(link.category || link.icon) && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30`}>
                      {link.icon}
                      <span className="ml-1">{link.category}</span>
                    </span>
                  </div>
                )}

                {/* Title and description */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {link.label}
                </h3>
                {link.description && (
                  <p className="text-gray-400 text-sm mb-4">
                    {link.description}
                  </p>
                )}

                {/* Tags */}
                {link.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {link.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 rounded-md text-xs bg-black/30 text-gray-300 border border-[#007BFF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Visit/GitHub links */}
                <div className="flex items-center gap-3 text-[#007BFF] text-sm mt-2">
                  {link.url && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(link.url, e)}
                      className="flex items-center gap-2"
                    >
                      <span>Visit Project</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {link.github && (
                    <a
                      href={link.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      onClick={e => { e.stopPropagation(); }}
                    >
                      <span>GitHub</span>
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Links;