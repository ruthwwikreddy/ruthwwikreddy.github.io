import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users, Trophy, Star, Zap, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Dev',
      description: 'Building scalable web apps',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive experiences',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    },
    {
      icon: Rocket,
      title: 'Product Strategy',
      description: 'From concept to launch',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10',
      border: 'border-pink-400/20'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Mentoring & guiding teams',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/20'
    },
  ];

  const stats = [
    { number: '15', label: 'Years Old', icon: Star },
    { number: '20+', label: 'Projects', icon: Zap },
    { number: '10+', label: 'Certifications', icon: Trophy },
    { number: '100%', label: 'Passion', icon: Globe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Me</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full opacity-50" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Story & Stats */}
          <div className="lg:col-span-7 space-y-12">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Trophy className="w-32 h-32 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-white rounded-full" />
                My Journey
              </h3>

              <div className="space-y-6 text-white/70 leading-relaxed text-lg relative z-10">
                <p>
                  At just <span className="text-white font-semibold">15 years old</span>, I've embarked on an exciting journey in technology.
                  My passion for coding ignited early, driving me to constantly learn, build, and push the boundaries of what's possible.
                </p>
                <p>
                  I believe in <span className="text-white font-semibold">learning by doing</span>. Every project is an opportunity to explore new technologies
                  and solve real-world problems. Whether it's architecting complex web applications or designing pixel-perfect interfaces,
                  I approach each challenge with relentless enthusiasm.
                </p>
                <p>
                  My goal is simple: to continue growing as a developer and make a tangible impact through innovative technology.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="mb-2 flex justify-center opacity-50">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-white rounded-full" />
                Expertise
              </h3>

              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group hover:border-white/30`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1">{skill.title}</h4>
                          <p className="text-white/60 text-sm">{skill.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
