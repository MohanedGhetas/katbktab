import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-5 h-5 text-rose-500" />
          <span className="font-serif text-lg">Mohaned & Yasmine</span>
        </div>
        <p className="text-gray-600 text-sm">
          We can't wait to celebrate with you on May 23rd, 2025
        </p>
      </div>
    </footer>
  );
};