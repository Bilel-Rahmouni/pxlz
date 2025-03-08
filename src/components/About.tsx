import { motion } from 'framer-motion';
import employees from '../assets/employees.jpg';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-center font-thin text-sm mb-16 tracking-wider uppercase">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
          

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto h-[500px] overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={employees} 
              alt="Our Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="max-w-md">
                <h2 className="text-4xl font-bold mb-6">Digital Excellence</h2>
                <p className="text-gray-600 text-lg mb-6">
                  We are a team of passionate digital creators, developers, and strategists dedicated to transforming ideas into exceptional digital experiences.
                </p>
                <p className="text-gray-600 text-lg mb-6">
                  With years of experience in web development and digital solutions, we pride ourselves on delivering innovative and scalable solutions that help businesses thrive in the digital age.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with cutting-edge digital solutions that drive growth and create meaningful connections with their audience.
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading force in digital transformation, setting new standards for innovation and excellence in the digital world.
                  </p>
                </div>

                <div className="bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Innovation in everything we do</li>
                    <li>• Excellence in delivery</li>
                    <li>• Client success as our priority</li>
                    <li>• Continuous learning and growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 mt-8"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 