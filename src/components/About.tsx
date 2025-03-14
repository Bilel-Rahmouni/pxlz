import { motion } from 'framer-motion';
import employees from '../assets/employees.jpg';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-violet-500/20 rounded-3xl blur-3xl"></div>
                  <img
                    src={employees}
                    alt="Our Team"
                    className="w-full h-[600px] object-cover"
                  /> 
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <NeubrutalistCard className="p-8"
              // hoverEffect={false}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl mb-4 md:text-7xl font-black"
                style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
              >
                About Us
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-800 mb-6"
              >
                We are a team of passionate designers and developers based in Denmark, dedicated to creating exceptional digital experiences. Our approach combines creativity with technical expertise to deliver solutions that make a difference.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-800 mb-12"
              >
                With years of experience in the industry, we've helped businesses of all sizes transform their digital presence and achieve their goals.
              </motion.p>

              {/* CTA Button */}
              <NeubrutalistButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                className="text-lg"
              >
                Get in Touch
              </NeubrutalistButton>
            </NeubrutalistCard>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative  
           p-8 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0
           bg-gradient-to-r from-blue-800 
          via-blue-700 to-blue-600 w-full h-full" />
          
          {/* Stats grid */}
          <div className="grid
           grid-cols-2 md:grid-cols-4 gap-6 w-full h-full
           relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="py-6 text-center"
              >
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 