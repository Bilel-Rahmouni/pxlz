import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaCode, FaSearchPlus, FaClipboardCheck, FaRocket } from 'react-icons/fa';
import NeubrutalistCard from './NeubrutalistCard';

const Services = () => {
  const timelineSteps = [
    {
      icon: FaComments,
      title: "Initial Consultation",
      description: "We start by understanding your vision, goals, and requirements through in-depth discussions to ensure perfect alignment with your needs.",
      delay: 0
    },
    {
      icon: FaPencilRuler,
      title: "Design Phase",
      description: "Our design team creates stunning, user-centric interfaces that perfectly balance aesthetics and functionality.",
      delay: 0.2
    },
    {
      icon: FaCode,
      title: "Development",
      description: "We build your website or application using cutting-edge technologies, ensuring robust, scalable, and efficient solutions.",
      delay: 0.4
    },
    {
      icon: FaSearchPlus,
      title: "SEO Optimization",
      description: "We implement comprehensive SEO strategies to enhance your visibility and reach your target audience effectively.",
      delay: 0.6
    },
    {
      icon: FaClipboardCheck,
      title: "Review & Testing",
      description: "You get three rounds of revisions to ensure everything is exactly as you want it. We'll make adjustments based on your feedback until you're completely satisfied.",
      delay: 0.8
    },
    {
      icon: FaRocket,
      title: "Launch & Delivery",
      description: "We deploy your project and provide you with all necessary documentation and support for a smooth transition.",
      delay: 1
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
 
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-5xl md:text-7xl font-black mb-16"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            What You Can Expect From Us
          </motion.h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 h-[calc(100%-2rem)] w-[1px] bg-black transform -translate-x-1/2" />

            {/* Timeline Steps */}
            <div className="relative">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                    className={`flex items-center mb-8 ${
                      index % 2 === 0 ? 'justify-end' : 'flex-row-reverse justify-end'
                    }`}
                  >
                    {/* Content Box */}
                    <div className={`w-[calc(50%-2rem)] 
                      ${index % 2 === 0 ? 'text-right mr-2' : 'text-left ml-2'}`}>
                      <NeubrutalistCard className="p-6">
                        <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                          <div className="rounded-full p-3   ">
                            <step.icon className="text-2xl text-black" />
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-800 text-lg">{step.description}</p>
                      </NeubrutalistCard>
                    </div>

                    {/* Timeline Point with Number */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                          {index + 1}
                        </div>
                        <div className="absolute inset-0 w-8 h-8 rounded-full bg-black/30 animate-ping" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#contact"
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-black text-white font-bold text-lg border-4 border-black
               hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services; 