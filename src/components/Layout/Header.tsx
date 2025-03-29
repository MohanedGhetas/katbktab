import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-rose-500" />
          <span className="font-serif text-xl">M & Y</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-rose-500 transition-colors">Home</a>
          <a href="#story" className="text-gray-600 hover:text-rose-500 transition-colors">Our Story</a>
          <a href="#gallery" className="text-gray-600 hover:text-rose-500 transition-colors">Gallery</a>
          <a href="#details" className="text-gray-600 hover:text-rose-500 transition-colors">Details</a>
          <a href="#rsvp" className="text-gray-600 hover:text-rose-500 transition-colors">RSVP</a>
        </div>
      </nav>
    </motion.header>
  );
};