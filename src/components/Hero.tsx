import { motion,   } from 'framer-motion';

import { useState, useEffect } from 'react';

// Import images
import baker from '../assets/hero/baker.webp';
import barber from '../assets/hero/barber.webp';
import beautysaloon from '../assets/hero/beautysaloon.jpg';
import cleaner from '../assets/hero/cleaner.webp';
import cook from '../assets/hero/cook.jpg';
import delivery from '../assets/hero/delivery.jpg';
import dentist from '../assets/hero/dentist.jpg';
import developer from '../assets/hero/developer.jpg';
import farmer from '../assets/hero/farmer.jpg';
import fitness from '../assets/hero/fitness.jpg';
import foodtrack from '../assets/hero/foodtrack.jpg';
import handyman from '../assets/hero/handyman.jpg';
import lawyer from '../assets/hero/lawyer.jpg';
import massage from '../assets/hero/massage.jpg';
import mecanic from '../assets/hero/mecanic.jpg';
import mecanic2 from '../assets/hero/mecanic2.jpg';
import nurse from '../assets/hero/nurse.jpg';
import nutritionist from '../assets/hero/nutritionist.jpg';
import petgroomer from '../assets/hero/petgroomer.jpg';
import photograph from '../assets/hero/photograph.jpg';
import plamber from '../assets/hero/plamber.jpg';
import security from '../assets/hero/security.jpg';
import tattoo from '../assets/hero/tattoo.jpg';
import startup from '../assets/hero/startup.jpg';
const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const animatedTexts = [
    'Bakeries',
    'Barber Shops',
    'Beauty Salons',
    'Cleaning Services',
    'Restaurants',
    'Delivery Services',
    'Dental Practices',
    'Tech Companies',
    'Farm Businesses',
    'Fitness Centers',
    'Food Services',
    'Handyman Services',
    'Law Firms',
    'Massage Therapists',
    'Auto Repairs',
    'Healthcare',
    'Nutritionists',
    'Pet Services',
    'Photographers',
    'Plumbing Services',
    'Security Firms',
    'Tattoo Artists',
    'Startups'
  ];

  const gridImages = [
    { src: baker, delay: 0, title: 'Bakery' },
    { src: barber, delay: 0.1, title: 'Barber Shop' },
    { src: beautysaloon, delay: 0.2, title: 'Beauty Salon' },
    { src: cleaner, delay: 0.3, title: 'Cleaning Company' },
    { src: cook, delay: 0.4, title: 'Restaurant' },
    { src: delivery, delay: 0.5, title: 'Delivery Service' },
    { src: dentist, delay: 0.6, title: 'Dentist' },
    { src: developer, delay: 0.7, title: 'Development Company' },
    { src: farmer, delay: 0.8, title: 'Farmer Business' },
    { src: fitness, delay: 0.9, title: 'Fitness Center' },
    { src: foodtrack, delay: 1.0, title: 'Food Truck Business' },
    { src: handyman, delay: 1.1, title: 'Handyman Business' },
    { src: lawyer, delay: 1.2, title: 'Lawyer' },
    { src: massage, delay: 1.3, title: 'Massage Center' },
    { src: mecanic, delay: 1.4, title: 'Mechanic Shop' },
    { src: nurse, delay: 1.5, title: 'Healthcare Company' },
    { src: nutritionist, delay: 1.6, title: 'Nutritionist' },
    { src: petgroomer, delay: 1.7, title: 'Pet Grooming BusinessS' },
    { src: photograph, delay: 1.8, title: 'Photographer' },
    { src: plamber, delay: 1.9, title: 'Plumbing Company' },
    { src: security, delay: 2.0, title: 'Security Company' },
    { src: mecanic2, delay: 2.1, title: 'Auto Service' },
    { src: tattoo, delay: 2.1, title: 'Tattoo Artist' },
    { src: startup, delay: 2.2, title: 'Startup' },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = animatedTexts[currentTextIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    const updateText = () => {
      if (!isDeleting) {
        if (text.length < currentText.length) {
          setText(currentText.slice(0, text.length + 1));
          timeout = setTimeout(updateText, typingSpeed);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            updateText();
          }, pauseTime);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
          timeout = setTimeout(updateText, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
          timeout = setTimeout(updateText, typingSpeed);
        }
      }
    };

    timeout = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, currentTextIndex, isDeleting]);

  return (
    <div className="relative min-h-[90vh] bg-white overflow-hidden pt-[60px] md:pt-0">
      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 md:order-1"
          >
            <h1 className="leading-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-thin text-black">We Build</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl font-thin text-black">Platforms For</span>
              <div className="h-[80px] sm:h-[100px] mt-4">
                <div className="relative">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-thin block min-h-[60px] leading-[1.1] bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text">
                    {text}<span className="animate-pulse">|</span>
                  </span>
                </div>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Elevating brands through sophisticated digital experiences. Where innovation meets elegance, and vision transforms into digital masterpieces.
            </p>
            
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-none font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white hover:text-black hover:border hover:border-black text-center"
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-none font-medium text-base sm:text-lg border border-black transition-all duration-300 hover:bg-black hover:text-white text-center"
              >
                Our Work
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-1 sm:gap-2">
              {gridImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: image.delay }}
                  className="relative aspect-square overflow-hidden group"
                >
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-[10px] sm:text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-1">
                      {image.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 