import React, { useEffect, useState } from 'react';
import { Calendar, Heart, MapPin, Clock } from 'lucide-react';
import sora from './images/onlyme.jpg' ;
import sora1 from './images/sora1.jpg' ;
import sora2 from './images/sora2.jpg' ;
import sora3 from './images/sora3.jpg' ;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const weddingDate = new Date('2025-05-23');
  const today = new Date();
  const daysLeft = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden hero-image">
          <img
            src={sora3}
            alt="Wedding background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div 
            className={`text-center transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8 float" />
            <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4">
              Mohaned & Yasmine
            </h1>
            <p className="text-2xl text-gray-600 font-light fade-in-up">
              Request the pleasure of your company
            </p>
            <div className="mt-8 space-y-2 text-gray-700">
              <p className="flex items-center justify-center gap-2 slide-in" style={{ animationDelay: '0.2s' }}>
                <Calendar className="w-5 h-5 text-rose-500" />
                May 23rd, 2025
              </p>
              <a className="flex items-center justify-center gap-2 slide-in" style={{ animationDelay: '0.4s' }}>
                <Clock className="w-5 h-5 text-rose-500" />
                6:00 PM
              </a>
              <a href="https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque,Cairo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 slide-in" style={{ animationDelay: '0.6s' }}>
                <MapPin className="w-5 h-5 text-rose-500" />
                El-Mosheer Tantawy Mosque, Cairo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Photo */}
      <div className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
            <img
              src={sora}
              alt="Mohaned and Yasmine"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Save the Date</h2>
            <p className="text-gray-600">
              {daysLeft} days until we celebrate our special day
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-500">
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="font-medium text-gray-600">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
                <div
                  key={date}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    date === 23
                      ? 'bg-rose-500 text-white ring-4 ring-rose-200 transform hover:scale-110 hover:rotate-12'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {date}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <a 
            href="https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque,Cairo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700 hover:rotate-2"
          >
            <img
              src={sora1}
              alt="Wedding venue"
              className="w-full h-64 object-cover"
            />
          </a>
          <a 
            href="https://www.google.com/maps?q=El-Mosheer+Tantawy+Mosque,Cairo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700 hover:rotate-2"
          >
            <img
              src={sora2}
              alt="Wedding decoration"
              className="w-full h-64 object-cover"
            />
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center fade-in-up">Location</h2>
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
      </div>

      {/* RSVP Section */}
      <div className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4 fade-in-up">Join Us</h2>
          <p className="text-gray-600 mb-8 fade-in-up">
            We look forward to celebrating this special day with you
          </p>
          <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transform hover:scale-105 transition-all duration-500 hover:shadow-lg">
            RSVP Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;