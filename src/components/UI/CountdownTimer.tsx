import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showCelebration, setShowCelebration] = useState(false);
  const [easterEgg, setEasterEgg] = useState<{ message: string, date: string } | null>(null);
  const celebrationDuration = 5000; 

  useEffect(() => {
    const weddingDate = new Date('2025-05-23T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        setShowCelebration(false);
      }, celebrationDuration);
      return () => clearTimeout(timer);
    }
  }, [showCelebration]);

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 px-4 w-full">
      {/* Countdown Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md sm:shadow-lg p-2 sm:p-4 text-center"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-500">{value}</div>
            <div className="text-xs sm:text-sm text-gray-600 capitalize">{unit}</div>
          </motion.div>
        ))}
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-xl p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-2xl transform hover:scale-[1.02] transition-transform duration-300 relative">
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center mb-2 sm:mb-4">
          {['Thu', 'Fri', 'Sat','Sun', 'Mon', 'Tue', 'Wed'].map(day => (
            <div key={day} className="text-xs sm:text-sm font-medium text-gray-600">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
          {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
            <div
              key={date}
              className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 cursor-pointer
                ${date === 23 ? 'transform hover:scale-110 hover:rotate-12' : ''}
                ${[22, 24, 26].includes(date) ? 'text-black ring-2 sm:ring-4 ring-rose-200 transform hover:scale-110 hover:text-white hover:bg-rose-500' : ''}
                ${date !== 23 && ![22, 24, 26].includes(date) ? 'hover:bg-gray-100' : ''}
              `}
              onClick={() => {
                if (date === 23) setShowCelebration(true);
                if (date === 22) setEasterEgg({ message: '🎂 Our Birthday!', date: '22/10/1998' });
                if (date === 24) setEasterEgg({ message: '💍 Engagement Day!', date: '24/10/2024' });
                if (date === 26) setEasterEgg({ message: '📜 Arat El Fat7a', date: '26/07/2024' });
              }}
            >
              {date === 23 ? (
                <div className="relative w-full h-full">
                  {/* Heart SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="rgb(244 63 94 / 1)"
                    className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {/* Centered Number */}
                  <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold hover:text-rose-500">
                    23
                  </span>
                </div>
              ) : (
                <span className="text-xs sm:text-sm font-semibold">{date}</span>
              )}
            </div>
          ))}
        </div>

        {/* Wedding Celebration Popup */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg"
            >
              <div 
                className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-200 rounded-full p-1 sm:p-2 hover:bg-gray-300 cursor-pointer" 
                onClick={() => setShowCelebration(false)}
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-rose-500 mt-4 text-center">🎉 Wedding Day! 🎉</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Easter Egg Popup */}
        <AnimatePresence>
          {easterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg"
            >
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 p-1 sm:p-2 text-xs sm:text-sm text-gray-700 font-semibold">
                {easterEgg.date}
              </div>
              <button 
                onClick={() => setEasterEgg(null)} 
                className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-200 rounded-full p-1 sm:p-2 hover:bg-gray-300"
              >
                <X size={16} className="sm:w-5 sm:h-5" />
              </button>
              <div className="text-xl sm:text-2xl font-bold text-gray-700 mt-4 text-center">
                {easterEgg.message}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};