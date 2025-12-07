import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

export function BoredPrompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show the prompt after 10 seconds if not dismissed
        const timer = setTimeout(() => {
            if (!isDismissed) {
                setIsVisible(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isDismissed]);

    const handleYes = () => {
        // Open the sun particle visualizer in a new tab
        window.open('https://sun-particle.vercel.app/', '_blank');
        setIsVisible(false);
        setIsDismissed(true);
    };

    const handleNo = () => {
        setIsVisible(false);
        setIsDismissed(true);
    };

    const handleClose = () => {
        setIsVisible(false);
        // Don't set dismissed, so it can show again later
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="fixed bottom-8 right-8 z-[100] max-w-sm"
                >
                    <div className="relative bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-blue-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.3)] overflow-hidden">
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse" />

                        {/* Close button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 p-1.5 hover:bg-white/10 rounded-lg transition-colors z-10"
                            aria-label="Close prompt"
                        >
                            <X className="w-4 h-4 text-white/70 hover:text-white" />
                        </button>

                        <div className="relative p-6">
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-4">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                                    className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                                >
                                    <Sparkles className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-white text-center mb-2">
                                Feeling Bored? 🌟
                            </h3>
                            <p className="text-white/80 text-center text-sm mb-6 leading-relaxed">
                                Want to test my <span className="font-semibold text-yellow-300">vibe-coded</span> Sun Particle Visualizer?
                                <br />
                                <span className="text-xs text-white/60">It's interactive and mesmerizing!</span>
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleYes}
                                    className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                                >
                                    Yes, let's go!
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleNo}
                                    className="flex-1 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-all duration-300"
                                >
                                    Maybe later
                                </motion.button>
                            </div>

                            {/* Small hint */}
                            <p className="text-center text-xs text-white/40 mt-3">
                                Opens in a new tab
                            </p>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
