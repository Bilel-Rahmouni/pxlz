import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaDownload, FaStar, FaUsers, FaCheckCircle, FaClock, FaCode, FaChartLine, FaProjectDiagram } from 'react-icons/fa';
import BusinessSection from './BusinessSection';
import MobileSection from './MobileAppSection';
import SAASSection from './SAASSection';
import ProfessionalPortfolioSection from './ProfessionalPortfolioSection';
import smallBusiness from '../assets/smallBusiness.jpg';
import wyngo from '../assets/wyngo.png';
import iconmaker from '../assets/iconmaker.png';
import portfolio from '../assets/portfolio.png';

interface StatProps {
  value: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

const StatDisplay = ({ value, label, icon: Icon, suffix = '' }: StatProps) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 w-[200px]">
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row items-center gap-2">
        <div className="text-base font-bold text-gray-800">{value}{suffix}</div>
        <div className="text-xs font-medium text-gray-600">{label}</div>
      </div>
      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Icon className="w-4 h-4 text-pink-500" />
      </div>
    </div>
  </div>
);

const FourSectionsWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState<string>('business');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0]
  );

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['business', 'mobile', 'saas', 'portfolio'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentImage = () => {
    switch(currentSection) {
      case 'business':
        return smallBusiness;
      case 'mobile':
        return wyngo;
      case 'saas':
        return iconmaker;
      case 'portfolio':
        return portfolio;
      default:
        return smallBusiness;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Sticky Image Container */}
      <motion.div 
        className="fixed top-0 right-0 w-[55%] h-screen flex items-center justify-end z-10"
        style={{ opacity }}
      >
        <div className="relative w-full pr-8">
          {/* Image */}
          <motion.div
            className="block w-[85%] ml-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={currentSection}
              src={getCurrentImage()}
              alt="Section Preview"
              className="w-full h-auto rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Stats Container */}
            <motion.div
              className="absolute -left-16 bottom-0 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {currentSection === 'business' && (
                <>
                  <StatDisplay value={86} label="Time Management" icon={FaClock} suffix="%" />
                  <StatDisplay value={83} label="Code Quality" icon={FaCode} suffix="%" />
                </>
              )}
              {currentSection === 'mobile' && (
                <>
                  <StatDisplay value={10} label="App Downloads" icon={FaDownload} suffix="K+" />
                  <StatDisplay value={4.8} label="App Rating" icon={FaStar} />
                </>
              )}
              {currentSection === 'saas' && (
                <>
                  <StatDisplay value={25} label="Active Users" icon={FaUsers} suffix="K+" />
                  <StatDisplay value={98} label="User Satisfaction" icon={FaCheckCircle} suffix="%" />
                </>
              )}
              {currentSection === 'portfolio' && (
                <>
                  <StatDisplay value={90} label="Growth Rate" icon={FaChartLine} suffix="%" />
                  <StatDisplay value={35} label="Projects Completed" icon={FaProjectDiagram} suffix="+" />
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Sections Container */}
      <div className="w-full">
        <BusinessSection />
        <MobileSection />
        <SAASSection />
        <ProfessionalPortfolioSection />
      </div>
    </div>
  );
};

export default FourSectionsWrapper; 