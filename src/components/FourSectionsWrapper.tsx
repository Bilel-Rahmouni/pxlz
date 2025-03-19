import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaDownload, FaStar, FaUsers, FaCheckCircle, FaCode, FaProjectDiagram } from 'react-icons/fa';
import BusinessSection from './BusinessSection';
import MobileSection from './MobileAppSection';
import SAASSection from './SAASSection';
import ProfessionalPortfolioSection from './ProfessionalPortfolioSection';
import smallBusiness from '../assets/lumara.png';
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
  <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 max-w-[180px] w-full">
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row items-center gap-1 flex-1 min-w-0">
        <div className="text-base font-bold text-gray-800 whitespace-nowrap">{value}{suffix}</div>
        <div className="text-xs font-medium text-gray-600 truncate">{label}</div>
      </div>
      <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center flex-shrink-0 ml-2">
        <Icon className="w-3 h-3 text-pink-500" />
      </div>
    </div>
  </div>
);

const FourSectionsWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ImageWithStats = ({ section, isDesktop = false }: { section: string, isDesktop?: boolean }) => {
    const getImage = () => {
      switch(section) {
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
      <motion.div
        className={`relative ${isDesktop ? 'w-[80%]' : 'w-full'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          key={section}
          src={getImage()}
          alt="Section Preview"
          className="w-full h-auto rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute left-0 bottom-0 flex flex-col gap-2 transform translate-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {section === 'business' && (
            <>
              <StatDisplay value={250} label="Active Local Businesses" icon={FaUsers} suffix="+" />
              <StatDisplay value={98} label="Customer Satisfaction" icon={FaCheckCircle} suffix="%" />
            </>
          )}
          {section === 'mobile' && (
            <>
              <StatDisplay value={20} label="App Downloads" icon={FaDownload} suffix="K+" />
              <StatDisplay value={4.8} label="App Store Rating" icon={FaStar} />
            </>
          )}
          {section === 'saas' && (
            <>
              <StatDisplay value={15} label="Enterprise Clients" icon={FaProjectDiagram} suffix="+" />
              <StatDisplay value={99.9} label="Uptime" icon={FaCheckCircle} suffix="%" />
            </>
          )}
          {section === 'portfolio' && (
            <>
              <StatDisplay value={100} label="Satisfied Clients" icon={FaUsers} suffix="+" />
              <StatDisplay value={25} label="Freelance Projects" icon={FaCode} suffix="+" />
            </>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="w-full">
      <BusinessSection />
      <MobileSection />
      <SAASSection />
      <ProfessionalPortfolioSection />
    </div>
  );
};

export default FourSectionsWrapper; 