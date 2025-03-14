import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollLayoutProps {
  title: string;
  children: ReactNode;
  images: string[];
}

const ScrollLayout = ({ title, children, images }: ScrollLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#FFE600] relative">
      {/* Fixed Laptop Container */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 w-1/2 h-screen flex items-center justify-center">
        <div className="relative w-[600px] h-[400px]">
          {/* Laptop Frame */}
          <div className="absolute inset-0 bg-black rounded-lg border-4 border-black">
            {/* Screen */}
            <div className="absolute inset-2 bg-white rounded overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                {images.map((image, index) => (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                ))}
              </motion.div>
            </div>
            {/* Laptop Base */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black rounded-b-lg"></div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-1/2 min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-16"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            {title}
          </motion.h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollLayout; 