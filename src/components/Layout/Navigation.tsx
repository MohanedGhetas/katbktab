import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Navigation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="font-serif text-xl">M & Y</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('countdown')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Countdown
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Location
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
