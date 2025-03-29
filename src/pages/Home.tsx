import { AnimatePresence, motion } from 'framer-motion';
import { CountdownTimer } from '../components/UI/CountdownTimer';
import { Calendar, Heart, MapPin, Clock, X } from 'lucide-react';
import sora from '../images/onlyme.jpg' ;
import sora1 from '../images/sora1.jpg' ;
import sora2 from '../images/sora2.jpg' ;
import Weddingbackground  from '../images/sora3.jpg';
import { useState } from 'react';

export const Home = () => {
  const [easterEgg, setEasterEgg] = useState<{ message: string, date: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDateClick = (date: number) => {
    // Reset Easter Egg & Image if clicking a non-special date
    if (![22, 23, 24, 26].includes(date)) {
      setEasterEgg(null);
      setSelectedImage(null);
      return;
    }

    // Set Easter Egg & Image for special dates
    if (date === 22) {
      setEasterEgg({ message: '🎂 Our Birthday!', date: '22/10/1998' });
      setSelectedImage(sora);
    } else if (date === 23) {
      setEasterEgg({ message: 'Soon... 💍', date: '23/5/2025' });
      setSelectedImage(sora1);
    } else if (date === 24) {
      setEasterEgg({ message: '💍 Engagement Day!', date: '24/10/2024' });
      setSelectedImage(sora);
    } else if (date === 26) {
      setEasterEgg({ message: '📜 Arat El Fat7a', date: '26/07/2024' });
      setSelectedImage(Weddingbackground);
    }
  };

  const handleCloseEasterEgg = () => {
    setEasterEgg(null);
    setSelectedImage(null); // Remove image when X is clicked
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-16">
        <div className="absolute inset-0 overflow-hidden hero-image">
          <img
            src={Weddingbackground}
            alt="Wedding background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center"
        >
          <div className="text-center">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4 lg:mb-8 float" />
            <h1 className="heading-primary">Mohaned & Yasmine</h1>
            <p className="text-gray-600 font-light">
              Request the pleasure of your company
            </p>
            <div className="mt-8 space-y-2 text-gray-700">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-rose-500" />
                May 23rd, 2025
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                6:00 PM
              </p>
              <a
                href="https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque,Cairo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-rose-500 transition-colors"
              >
                <MapPin className="w-5 h-5 text-rose-500" />
                El-Mosheer Tantawy Mosque, Cairo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="section-container bg-white/80">
        <h2 className="heading-secondary text-center mb-12">
          Counting Down to Our Special Day
        </h2>
        <CountdownTimer onDateClick={handleDateClick} />
      </section>

      {/* Featured Photo */}
      {easterEgg && (
        <section className="py-16 px-4 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <AnimatePresence>
                
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
                      onClick={handleCloseEasterEgg}
                      className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gray-200 rounded-full p-1 sm:p-2 hover:bg-gray-300"
                    >
                      <X size={16} className="sm:w-5 sm:h-5" />
                    </button>
                    <div className="text-xl sm:text-2xl font-bold text-gray-700 mt-4 text-center">
                      {easterEgg.message}
                    </div>
                  </motion.div>
                
              </AnimatePresence>

              {/* Only show image if selectedImage exists */}
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Mohaned and Yasmine"
                  className="w-full h-[400px] object-cover"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section id="location" className="section-container bg-white/80">
        <h2 className="heading-secondary text-center mb-12">Venue Location</h2>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <a
            href="https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque,Cairo"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.685151003413!2d31.378637376944716!3d30.017195681889925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c4181887cf1%3A0x40166693def91bf5!2sEl-Mosheer%20Tantawy%20Mosque!5e0!3m2!1sen!2seg!4v1710799027099!5m2!1sen!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full pointer-events-none"
            />
          </a>
        </div>
      </section>
    </div>
  );
};
