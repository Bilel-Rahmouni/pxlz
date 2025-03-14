import { motion } from 'framer-motion';
import { useState } from 'react';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

// Import images
import iconmaker from '../assets/iconmaker.png';
import wyngo from '../assets/wyngo.png';
import renklar from '../assets/renklar.png';
import portfolio from '../assets/portfolio.png';

type PortfolioSection = {
  title: string;
  description: string;
  project: {
    title: string;
    description: string;
    image: string;
    link?: string;
  };
};

type PortfolioData = {
  saas: PortfolioSection;
  mobile: PortfolioSection;
  websites: PortfolioSection;
  portfolio: PortfolioSection;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<keyof PortfolioData>('websites');

  const portfolioData: PortfolioData = {
    saas: {
      title: "SaaS Projects",
      description: "Innovative software-as-a-service solutions for modern businesses.",
      project: {
        title: "Icon Maker",
        description: "AI-powered icon generation tool for designers and developers.",
        image: iconmaker,
        link: "#"
      }
    },
    mobile: {
      title: "Mobile Applications",
      description: "User-friendly mobile apps that deliver exceptional experiences.",
      project: {
        title: "Wyngo",
        description: "Food delivery and city exploration app with real-time tracking.",
        image: wyngo,
        link: "#"
      }
    },
    websites: {
      title: "Business Websites",
      description: "Professional websites that drive business growth.",
      project: {
        title: "Renklar",
        description: "Modern e-commerce platform with seamless user experience.",
        image: renklar,
        link: "#"
      }
    },
    portfolio: {
      title: "Portfolio Websites",
      description: "Showcase your work with stunning portfolio websites.",
      project: {
        title: "Personal Portfolio",
        description: "Elegant portfolio website showcasing professional work and achievements.",
        image: portfolio,
        link: "#"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Explore our diverse portfolio of projects</p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(portfolioData).map((section) => (
            <NeubrutalistButton
              key={section}
              onClick={() => setActiveSection(section as keyof PortfolioData)}
              variant={activeSection === section ? 'primary' : 'secondary'}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </NeubrutalistButton>
          ))}
        </div>

        {/* Section Info */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">{portfolioData[activeSection].title}</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {portfolioData[activeSection].description}
          </p>
        </motion.div>

        {/* Project Display */}
        <motion.div
          key={`${activeSection}-project`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl mx-auto"
        >
          <NeubrutalistCard className="overflow-hidden">
            <div className="p-6">
              <h4 className="text-2xl font-bold mb-4">{portfolioData[activeSection].project.title}</h4>
              <p className="text-gray-600 mb-6">{portfolioData[activeSection].project.description}</p>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={portfolioData[activeSection].project.image}
                  alt={portfolioData[activeSection].project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {portfolioData[activeSection].project.link && (
                <a
                  href={portfolioData[activeSection].project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-white
                   hover:text-black border-2 border-black transition-all duration-200"
                >
                  View Project
                </a>
              )}
            </div>
          </NeubrutalistCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 