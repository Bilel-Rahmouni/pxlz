import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Careers = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At pxlz, we're more than just a web development agency – we're a team of passionate creators, 
            innovators, and problem-solvers. We believe in pushing boundaries, embracing creativity, 
            and delivering exceptional digital experiences that make a real impact.
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Why Join pxlz?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              We foster an environment where creativity thrives and innovation is encouraged. 
              Our team members enjoy the freedom to explore new ideas, work on cutting-edge projects, 
              and grow both personally and professionally. We believe in work-life balance, 
              continuous learning, and creating meaningful connections with our colleagues and clients.
            </p>
            <p className="mt-4">
              Whether you're an experienced professional or just starting your career, 
              pxlz offers opportunities to work on exciting projects across various industries, 
              collaborate with talented individuals, and make a real difference in the digital world.
            </p>
          </div>
        </motion.div>

        {/* Open Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold">Open Roles</h2>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaArrowDown className="text-4xl text-blue-600" />
            </motion.div>
            <div className="mt-8 p-8 bg-gray-50 rounded-xl border-2 border-gray-200 w-full">
              <p className="text-xl text-gray-600">
                No open roles at the moment. Check back soon!
              </p>
              <p className="mt-4 text-gray-500">
                Want to be notified about future opportunities? 
                <a 
                  href="/#contact" 
                  className="text-blue-600 hover:text-blue-700 ml-1"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }}
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers; 