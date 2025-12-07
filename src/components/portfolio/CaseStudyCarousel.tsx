import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: 'Ongoing' | 'Handovered';
  overview: string;
  challenge: string[];
  solution: string[];
  results: string[];
  impact: string;
  links: Record<string, string | undefined>;
}

const typedCaseStudies = caseStudies as CaseStudy[];
import { CaseStudyModal } from './CaseStudyModal';

export function CaseStudyCarousel() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Create triple set of case studies for seamless infinite scroll
  const infiniteStudies = [...caseStudies, ...caseStudies, ...caseStudies];

  // Pause/resume animation on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="case-studies" className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      <div className="relative w-full">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Case Studies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            >
              Explore my recent projects and case studies that showcase my expertise and problem-solving approach
            </motion.p>
          </div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous scrolling container */}
        <div
          ref={scrollRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{
              x: isPaused ? undefined : [0, -100 * caseStudies.length / 3 + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Adjust speed here (higher = slower)
                ease: "linear"
              }
            }}
          >
            {infiniteStudies.map((study, index) => (
              <motion.div
                key={`${study.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] relative group cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCaseStudy(study)}
              >
                <div className="relative h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 border border-white/10">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      style={{
                        filter: 'grayscale(100%) brightness(0.7)',
                      }}
                    />
                  </div>

                  {/* Gradient overlay - always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Content - always visible at bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                    <div className="space-y-2 sm:space-y-3 transform transition-all duration-500 group-hover:translate-y-0">
                      {/* Category and Status badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                          {study.category}
                        </span>
                        <span className={`px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-full border backdrop-blur-sm ${study.status === 'Ongoing'
                            ? 'bg-green-500/10 text-green-300 border-green-500/30'
                            : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                          }`}>
                          {study.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] leading-tight">
                        {study.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                        {study.description}
                      </p>

                      {/* Hover indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <span>Click to view details</span>
                          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect - color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-white/40 text-xs sm:text-sm">
            Hover to pause • Click to view details
          </p>
        </div>

        {/* Modal */}
        {selectedCaseStudy && (
          <CaseStudyModal
            isOpen={!!selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            caseStudy={selectedCaseStudy}
          />
        )}
      </div>
    </section>
  );
}