import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const getSeasonalOffer = () => {
  const today = new Date();
  const month = today.getMonth(); // 0-11
  const day = today.getDate();

  // Special occasions with their dates and messages
  const occasions = [
    {
      name: "Valentine's",
      condition: month === 1 && day >= 1 && day <= 14,
      message: "Love is in the air! Get 30% off this Valentine's season",
     },
    {
      name: "Women's Day",
      condition: month === 2 && day >= 1 && day <= 8,
      message: "Celebrate International Women's Day with 30% off",
     },
    {
      name: "Easter",
      condition: month === 3 && day >= 15,
      message: "Hop into savings! 30% off for Easter",
     },
    {
      name: "Mother's Day",
      condition: month === 4 && day <= 14,
      message: "Show Mom some love with 30% off",
     },
    {
      name: "Father's Day",
      condition: month === 5 && day >= 10 && day <= 20,
      message: "Celebrate Dad with 30% off",
     },
    {
      name: "Summer",
      condition: month >= 5 && month <= 7,
      message: "Summer Special! Cool 30% off on all projects",
     },
    {
      name: "Back to School",
      condition: month === 7 && day >= 15 || month === 8 && day <= 15,
      message: "Back to School! Get 30% off on your digital needs",
     },
    {
      name: "Halloween",
      condition: month === 9 && day >= 15 || month === 10 && day <= 31,
      message: "Spooky Season Savings! 30% off",
     },
    {
      name: "Christmas",
      condition: month === 11 && day >= 1 && day <= 25,
      message: "Holiday Magic! Unwrap 30% savings",
     },
    {
      name: "Spring",
      condition: month >= 2 && month <= 4,
      message: "Spring into action with 30% off",
     }
  ];

  // Find the current occasion
  const currentOccasion = occasions.find(occasion => occasion.condition);

  // Default offer if no special occasion
  return currentOccasion || {
    name: "Special",
    message: "🎉 Special Offer: Get 30% Off Your First Project!",
   };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(getSeasonalOffer());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update offer daily
  useEffect(() => {
    const checkDate = () => {
      setCurrentOffer(getSeasonalOffer());
    };

    // Check at midnight each day
    const now = new Date();
    const night = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msToMidnight = night.getTime() - now.getTime();

    // Initial check
    checkDate();

    // Set up timer for next check
    const timer = setTimeout(checkDate, msToMidnight);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: '#portfolio', label: 'Our Work' },
    { href: '#services', label: 'Our Services' },
    { href: '#about', label: 'About Us' },
   ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const navHeight = isMobile ? 60 : 80; // Adjusted height for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // Close menu first
      setIsMenuOpen(false);

      // Small delay to allow menu to close before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-lg'
        }`}
    >
      <div className="w-full px-2 sm:px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`
                  transition-colors duration-300 font-medium relative group text-base
                  ${isScrolled ? 'text-white hover:text-[#3B82F6]' : 'text-black hover:text-[#3B82F6]'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#3B82F6] text-black rounded-full hover:shadow-lg transition-all text-base
              duration-300 font-bold border-[1px] border-black"
            >
              Get a Free Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="black"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-black/90 backdrop-blur-md
               shadow-xl rounded-2xl overflow-hidden border-4 border-black">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 sm:px-6 py-4 text-white hover:bg-white/10 
                    transition-colors duration-300 text-base sm:text-lg font-medium"
                    whileHover={{ x: 10 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-4 sm:px-6 py-4 bg-[#3B82F6] text-black hover:shadow-lg 
                  transition-all duration-300 text-base sm:text-lg
                   font-bold border-4 border-black"
                  whileHover={{ scale: 1.02 }}
                >
                  Get a Free Quote
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Promotion Line */}
      <div className="bg-[#3B82F6] py-2 text-center border-t-[1px] border-black">
        <p className="text-black text-sm font-bold px-4">
          {currentOffer.message}
        </p>
      </div>
    </motion.nav>
  );
};

export default Navbar; 