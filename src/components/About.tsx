import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user experiences',
    },
    {
      icon: Rocket,
      title: 'Product Development',
      description: 'Transforming ideas into successful products',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading and mentoring development teams',
    },
  ];

  const stats = [
    { number: '15', label: 'Years Old' },
    { number: '20+', label: 'Projects' },
    { number: '10+', label: 'Certifications' },
    { number: '100%', label: 'Passion' },
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
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      {/* Background Elements - Removed for consistency */}


      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A young developer passionate about creating innovative solutions and learning new technologies
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-white/10">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">My Journey</h3>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    At just 15 years old, I've already embarked on an exciting journey in the world of technology.
                    My passion for coding started early, and since then, I've been constantly learning, building,
                    and pushing the boundaries of what's possible.
                  </p>
                  <p>
                    I believe in learning by doing. Every project is an opportunity to explore new technologies,
                    solve real-world problems, and create something meaningful. Whether it's building web applications,
                    designing user interfaces, or exploring new frameworks, I approach each challenge with enthusiasm
                    and dedication.
                  </p>
                  <p>
                    My goal is to continue growing as a developer, contribute to innovative projects, and make a
                    positive impact through technology. I'm always open to new opportunities, collaborations, and
                    learning experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
