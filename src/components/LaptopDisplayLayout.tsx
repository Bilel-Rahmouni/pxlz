import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface LaptopDisplayLayoutProps {
  children: ReactNode;
  title: string;
  images: string[];
}

const LaptopDisplayLayout = ({ children, title, images }: LaptopDisplayLayoutProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-12"
              style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
            >
              {title}
            </motion.h2>
            {children}
          </div>

          {/* Right Laptop Display */}
          <div className="w-full lg:w-1/2 sticky top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Laptop Frame */}
              <div className="relative w-full pt-[60%] bg-black rounded-t-2xl border-8 border-black">
                {/* Screen Content */}
                <div className="absolute inset-0 overflow-hidden rounded-lg bg-white">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="Project Screenshot"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              {/* Laptop Base */}
              <div className="h-4 bg-black rounded-b-lg transform perspective-1000 rotateX-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopDisplayLayout; 