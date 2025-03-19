import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';
import { FaUsers, FaCode } from 'react-icons/fa';
import portfolio from '../assets/portfolio.png';

interface StatProps {
  value: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

const StatDisplay = ({ value, label, icon: Icon, suffix = '' }: StatProps) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 w-full sm:w-[180px]">
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

const ProfessionalPortfolioSection = () => {
  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-12"
              style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
            >
              Personal Portfolio Sites
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <NeubrutalistCard className="p-8">
                <h3 className="text-3xl font-bold mb-6">Showcase Your Talent</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <h4 className="font-bold mb-1">Custom Design</h4>
                      <p className="text-gray-700">Stand out with a unique portfolio that reflects your style</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <h4 className="font-bold mb-1">Responsive Layout</h4>
                      <p className="text-gray-700">Perfect viewing experience on all devices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <h4 className="font-bold mb-1">SEO Optimized</h4>
                      <p className="text-gray-700">Get discovered by potential clients and employers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <h4 className="font-bold mb-1">Easy Updates</h4>
                      <p className="text-gray-700">Keep your portfolio fresh with simple content management</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <NeubrutalistButton 
                    variant="primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Your Portfolio Starting From $299
                  </NeubrutalistButton>
                  <NeubrutalistButton 
                    variant="outline"
                    onClick={() => window.open('https://bilelrahmouni.com', '_blank')}
                  >
                    View Example
                  </NeubrutalistButton>
                </div>
              </NeubrutalistCard>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={portfolio}
                alt="Portfolio Website Preview"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute left-0 bottom-0 flex flex-col gap-2 transform translate-y-4">
                <StatDisplay value={100} label="Satisfied Clients" icon={FaUsers} suffix="+" />
                <StatDisplay value={25} label="Freelance Projects" icon={FaCode} suffix="+" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPortfolioSection; 