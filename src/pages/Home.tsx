import { motion } from 'framer-motion';
import { CountdownTimer } from '../components/UI/CountdownTimer';
import { Calendar, Heart, MapPin, Clock } from 'lucide-react';
import { PhotoGallery } from '../components/UI/PhotoGallery';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Hero Section */}
      <section id="home" className="relative h-screen pt-16">
        <div className="absolute inset-0 overflow-hidden hero-image">
          <img
            src="/src/images/sora3.jpg"
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
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8 float" />
            <h1 className="heading-primary">
              Mohaned & Yasmine
            </h1>
            <p className="text-2xl text-gray-600 font-light">
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
      <section id="countdown" className="section-container">
        <h2 className="heading-secondary text-center mb-12">Counting Down to Our Special Day</h2>
        <CountdownTimer />
      </section>

      {/* Featured Photo */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        {/* <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
            <img
              src="/src/images/onlyme.jpg"
              alt="Mohaned and Yasmine"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div> */}
      <PhotoGallery />
      </section>

      {/* Map Section */}
      <section id="location" className="section-container">
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