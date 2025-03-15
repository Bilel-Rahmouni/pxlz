import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaDownload, FaStar, FaUsers, FaCheckCircle,  FaCode,  FaProjectDiagram } from 'react-icons/fa';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.02, 1, 1],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [isMobile]);
 

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
        className={`relative ${isDesktop ? 'w-[85%] ml-auto' : 'w-full'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          key={section}
          src={getImage()}
          alt="Section Preview"
          className="w-full h-auto rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`absolute ${isDesktop ? '-left-16' : '-left-4'} -bottom-4 flex flex-col gap-2`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
    <div ref={containerRef} className="relative">
      {/* Desktop Sticky Image Container */}
      {!isMobile && (
        <motion.div 
          className="fixed top-0 right-0 w-[55%] h-screen flex items-center justify-end z-10"
          style={{ opacity }}
        >
          <div className="relative w-full pr-8">
            <ImageWithStats section={currentSection} isDesktop={true} />
          </div>
        </motion.div>
      )}

      {/* Sections Container */}
      <div className="w-full">
        <BusinessSection />
        {isMobile && (
          <div className="container mx-auto px-4 py-8">
            <ImageWithStats section="business" />
          </div>
        )}
        <MobileSection />
        {isMobile && (
          <div className="container mx-auto px-4 py-8">
            <ImageWithStats section="mobile" />
          </div>
        )}
        <SAASSection />
        {isMobile && (
          <div className="container mx-auto px-4 py-8">
            <ImageWithStats section="saas" />
          </div>
        )}
        <ProfessionalPortfolioSection />
        {isMobile && (
          <div className="container mx-auto px-4 py-8">
            <ImageWithStats section="portfolio" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FourSectionsWrapper; 