import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.a 
      href="/" 
      className="inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
         
        {/* Logo text */}
        <h1 className="relative text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}>
          <span className="bg-gradient-to-r from-blue-800 
          via-blue-700 to-blue-600 bg-clip-text text-transparent
           tracking-tighter">
            pxlz
          </span>
        </h1>
      </div>
    </motion.a>
  );
};

export default Logo; 