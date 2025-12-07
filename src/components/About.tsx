import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Cpu, Briefcase, Quote } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React', icon: 'logos:react' },
    { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
    { name: 'Node.js', icon: 'logos:nodejs-icon' },
    { name: 'JavaScript', icon: 'logos:javascript' },
    { name: 'Python', icon: 'logos:python' },
    { name: 'Figma', icon: 'logos:figma' },
    { name: 'Git', icon: 'logos:git-icon' },
    { name: 'Database', icon: 'lucide:database' }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The developer behind the screen</h3>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* Main Bio Card (Large) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:col-span-4 lg:col-span-2 row-span-2 flex flex-col justify-between group transition-all duration-500 hover:bg-white/[0.07]"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
                <User className="w-5 h-5" />
              </div>
              <h4 className="text-2xl font-medium text-white mb-4">A digital craftsman at heart.</h4>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                My journey into code wasn't just about learning syntax; it was about discovering a medium for infinite creativity. I don't just build websites; I engineer experiences.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                From conceiving the initial idea to the final deployment, I thrive on the entire product lifecycle. I combine technical depth with design intuition to create software that feels as good as it looks.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-800 flex items-center justify-center text-[10px] text-white">RR</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-700 flex items-center justify-center text-[10px] text-white">AI</div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] bg-neutral-600 flex items-center justify-center text-[10px] text-white">UI</div>
              </div>
              <span className="text-xs text-neutral-500">Collaborating with the future.</span>
            </div>
          </motion.div>

          {/* Stats Card: Age */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-white/[0.07] transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-7xl font-semibold text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">15</span>
            <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Years Old</span>
            <span className="text-[10px] text-neutral-600 mt-2">Starting early, dreaming big</span>
          </motion.div>

          {/* Map/Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2 lg:col-span-1 flex flex-col justify-between group overflow-hidden hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex justify-between items-start">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Base</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="relative h-24 w-full my-2 opacity-50 group-hover:opacity-80 transition-opacity">
              {/* Abstract Map Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium">Hyderabad, India</h5>
              <p className="text-xs text-neutral-500">Remote available worldwide</p>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-3 lg:col-span-1 row-span-1 flex flex-col justify-between hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Arsenal</span>
              <Cpu className="text-white/20 w-4 h-4" />
            </div>
            <div className="grid grid-cols-4 gap-4 place-items-center">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="group/icon flex flex-col items-center gap-1"
                  whileHover={{ scale: 1.2 }}
                >
                  {tech.icon.startsWith('logos:') ? (
                    <img
                      src={`https://api.iconify.design/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-6 h-6 grayscale group-hover/icon:grayscale-0 transition-all opacity-60 group-hover/icon:opacity-100"
                    />
                  ) : (
                    <div className="text-neutral-400 group-hover/icon:text-white transition-all">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats: Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-3 lg:col-span-1 flex flex-col justify-between group hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Experience</span>
              <Briefcase className="text-white/20 w-4 h-4" />
            </div>
            <div>
              <div className="text-4xl font-medium text-white mb-1">83+</div>
              <div className="text-sm text-neutral-400">Projects shipped</div>
              <div className="w-full bg-neutral-800 h-1 mt-3 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="bg-white h-full rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Quote / Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-6 lg:col-span-2 flex items-center justify-center relative overflow-hidden hover:bg-white/[0.07] transition-colors"
          >
            <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
              <Quote className="w-32 h-32 text-white" />
            </div>
            <div className="text-center relative z-10 max-w-md">
              <p className="font-serif text-2xl md:text-3xl text-neutral-300 italic">
                "Simplicity is the ultimate sophistication."
              </p>
              <p className="text-xs text-neutral-500 mt-3 font-medium tracking-wide uppercase">— Leonardo da Vinci</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
