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
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-rose-500">{value}</div>
            <div className="text-gray-600 capitalize">{unit}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-500 relative">
        <div className="grid grid-cols-10 gap-2 text-center mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="font-medium text-gray-600">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-10 gap-2 text-center">
          {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
            <div
              key={date}
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
                date === 23 ? 'bg-rose-500 text-white ring-4 ring-rose-200 transform hover:scale-110 hover:rotate-12' :
                date === 22 || date === 24 || date === 26 ? 'hover:bg-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => {
                if (date === 23) setShowCelebration(true);
                if (date === 22) setEasterEgg({ message: '🎂 Our Birthday!', date: '22/10/1998' });
                if (date === 24) setEasterEgg({ message: '💍 Engagement Day!', date: '24/10/2024' });
                if (date === 26) setEasterEgg({ message: '📜 Arat El Fat7a', date: '26/07/2024' });
              }}
            >
              {date}
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
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 p-6 rounded-xl shadow-xl"
            >
              <div className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 cursor-pointer" onClick={() => setShowCelebration(false)}>
                <X size={20} />
              </div>
              <div className="text-2xl font-bold text-rose-500 mt-4">🎉 Wedding Day! 🎉</div>
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
              className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 p-6 rounded-xl shadow-xl"
            >
              <div className="absolute top-2 left-2 p-2 text-gray-700 font-semibold">{easterEgg.date}</div>
              <button onClick={() => setEasterEgg(null)} className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300">
                <X size={20} />
              </button>
              <div className="text-2xl font-bold text-gray-700 mt-4">{easterEgg.message}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
