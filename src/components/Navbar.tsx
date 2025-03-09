import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <h1 className="text-2xl md:text-3xl text-black font-thin relative">
             pxlz
      </h1>
    </a>
  );
};

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
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
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
        bg-white shadow-lg md:bg-transparent md:shadow-none
        ${isScrolled ? 'md:bg-white md:shadow-lg' : ''}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between h-[60px] md:h-auto">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-black hover:text-gray-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white rounded-none hover:bg-gray-900 transition-colors duration-300"
            >
              Get a Free Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
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
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-6 py-4 text-black hover:bg-gray-50 transition-colors duration-300 text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-6 py-4 bg-black text-white hover:bg-gray-900 transition-colors duration-300 text-lg"
                >
                  Get a Free Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Promotion Line */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 py-1.5 text-center">
        <p className="text-white text-sm font-medium">
          {currentOffer.message}
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="underline ml-2 hover:text-gray-200">
            Claim Now
          </a>
        </p>
      </div>
    </motion.nav>
  );
};

export default Navbar; 