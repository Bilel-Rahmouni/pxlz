import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="inline-block">
      <h1 className="text-3xl font-extrabold relative">
        <span className="relative inline-block">
          <span className="relative z-10 text-white px-1 bg-black rounded-md">
            pxlz
          </span>
          <span className="absolute inset-0 text-black px-1" style={{
            textShadow: `
              2px 2px 0 #000,
              -2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              3px 3px 0 #000,
              -3px 3px 0 #000,
              -3px -3px 0 #000,
              3px -3px 0 #000
            `,
            WebkitTextStroke: '2px black'
          }}>
            pxlz
          </span>
        </span>
      </h1>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-gray-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black hover:text-white text-white rounded-none hover:bg-gray-900 transition-colors duration-300"
            >
              Get a Free Quote
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 