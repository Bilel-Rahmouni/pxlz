import { motion } from 'framer-motion'; 
import NeubrutalistButton from './NeubrutalistButton';

const Hero = () => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" space-y-8 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl  font-black leading-tight"
          style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
        >
          We Create
          <motion.span 
            className="block text-transparent  
             bg-clip-text pb-2 bg-gradient-to-r
             from-blue-500 via-violet-600 to-red-400"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Digital Experiences
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-800 max-w-2xl mx-auto"
        >
          Transform your digital presence with our cutting-edge web development and design solutions. We bring your vision to life with style and precision.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <NeubrutalistButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="primary"
          >
            Get Started
          </NeubrutalistButton>
          <NeubrutalistButton
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            variant="secondary"
          >
            View Our Work
          </NeubrutalistButton>
        </motion.div> 
      </motion.div>
    </section>
  );
};

export default Hero; 