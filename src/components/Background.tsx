import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useViewportScroll();
  
  // Parallax effect for background elements
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10;
      const y = (clientY / window.innerHeight) * 20 - 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate grid dots
  const gridDots = [];
  const gridSize = 15;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const size = Math.random() * 2 + 1;
      const opacity = 0.1 + Math.random() * 0.1;
      gridDots.push(
        <div 
          key={`${i}-${j}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${(i / (gridSize - 1)) * 100}%`,
            top: `${(j / (gridSize - 1)) * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      );
    }
  }

  return (
    <div className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-blue-950/90"></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-70"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.1) 0%, rgba(0, 0, 30, 0.8) 100%)',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(0, 100, 255, 0.1) 0%, rgba(0, 0, 30, 0.8) 100%)',
            'radial-gradient(circle at 70% 70%, rgba(0, 100, 255, 0.1) 0%, rgba(0, 0, 30, 0.8) 100%)',
            'radial-gradient(circle at 30% 70%, rgba(0, 100, 255, 0.1) 0%, rgba(0, 0, 30, 0.8) 100%)',
            'radial-gradient(circle at 70% 30%, rgba(0, 100, 255, 0.1) 0%, rgba(0, 0, 30, 0.8) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        {gridDots}
      </div>

      {/* Floating orbs */}
      {[1, 2, 3, 4].map((i) => {
        const size = 300 + Math.random() * 200;
        const x = 10 + Math.random() * 80;
        const y = 10 + Math.random() * 80;
        const duration = 20 + Math.random() * 40;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full filter blur-[80px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              background: `radial-gradient(circle, rgba(${Math.floor(0 + Math.random() * 50)}, ${Math.floor(100 + Math.random() * 100)}, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,100 Q25,50 50,100 T100,100 T150,50 T200,100"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-10" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

export default Background;
