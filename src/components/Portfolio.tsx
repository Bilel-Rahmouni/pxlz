import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images
import renklar from '../assets/renklar.png';
import wyngo from '../assets/wyngo.png';
import couponsfetcher from '../assets/couponsfetcher.png';
import iconmaker from '../assets/iconmaker.png';
import hungary from '../assets/hungarian.png';
import portfolio from '../assets/portfolio.png';
type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
};

type PortfolioSection = {
  title: string;
  description: string;
  projects: Project[];
};

type PortfolioData = {
  saas: PortfolioSection;
  mobile: PortfolioSection;
  websites: PortfolioSection;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<keyof PortfolioData>('websites');

  const portfolioData: PortfolioData = {
    websites: {
      title: "Business Websites",
      description: "Professional, responsive websites that help businesses establish their online presence and reach more customers.",
      projects: [
        {
          title: "Renklar.dk",
          description: "Modern cleaning company website with service booking system and professional design.",
          image: renklar,
          url: "https://renklar.dk"
        },
        {
          title: "Hungarian Renklar",
          description: "Cleaning service platform tailored for the Hungarian market with multilingual support.",
          image: hungary,
          url: "https://hungarianrenklar.com"
        },
        {
          title: "Personal Portfolio",
          description: "Elegant portfolio website showcasing professional work and achievements.",
          image: portfolio,
          url: "https://bilelrahmouni.com"
        }
      ]
    },
    mobile: {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that provide seamless user experience across all devices.",
      projects: [
        {
          title: "Wyngo",
          description: "Innovative app combining food delivery and city exploration features for a unique user experience.",
          image: wyngo,
          url: "https://wyngo.co"
        },
        {
          title: "Wyngo Business",
          description: "Complete business management solution for restaurants and local businesses.",
          image: wyngo,
          url: "https://business.wyngo.co"
        },
        {
          title: "Wyngo Driver",
          description: "Dedicated driver application for efficient delivery management and route optimization.",
          image: wyngo,
          url: "https://wyngo.co/driver"
        }
      ]
    },
    saas: {
      title: "SaaS Solutions",
      description: "Cloud-based software solutions that help businesses scale and operate efficiently.",
      projects: [
        {
          title: "Icon Maker",
          description: "Professional icon design tool for generating custom icons for applications and websites.",
          image: iconmaker,
          url: "https://iconmaker.pro"
        },
        {
          title: "Coupons Fetcher",
          description: "Smart automation tool for finding and applying the best discount codes across online stores.",
          image: couponsfetcher,
          url: "https://couponsfetcher.com"
        },
        {
          title: "Icon Maker Pro",
          description: "Advanced icon generation platform with AI-powered design suggestions and batch processing.",
          image: iconmaker,
          url: "https://pro.iconmaker.pro"
        }
      ]
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-thin text-sm mb-16 tracking-wider uppercase">Our Latest Work</h2>

        {/* Section Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex gap-2">
            {Object.keys(portfolioData).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section as keyof PortfolioData)}
                className={`px-4 py-2 text-sm transition-all duration-300 border-[0.2px] hover:border-black ${
                  activeSection === section
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black border-transparent hover:bg-gray-50'
                }`}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">{portfolioData[activeSection].title}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {portfolioData[activeSection].description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {portfolioData[activeSection].projects.map((project, index) => (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group relative overflow-hidden cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
                        <p className="text-white text-sm mb-4">{project.description}</p>
                        <span className="text-white text-sm underline">View Project</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 