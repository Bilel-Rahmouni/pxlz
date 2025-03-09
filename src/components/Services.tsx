import { motion } from 'framer-motion';
import { FaComments, FaPencilRuler, FaCode, FaSearchPlus, FaClipboardCheck, FaRocket } from 'react-icons/fa';

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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-thin text-sm mb-16 tracking-wider uppercase">What You Can Expect From Us</h2>
          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 h-[calc(100%-2rem)] w-[1px] bg-black/10 transform -translate-x-1/2" />

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
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-4  shadow-md
                         hover:shadow-lg transition-all duration-300 border-[0.2px] 
                         border-black"
                      >
                        <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                           <h3 className="text-base font-semibold">{step.title}</h3>
                           
                        </div>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline Point with Number */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-black/30 animate-ping" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 