import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

const ProfessionalPortfolioSection = () => {
  return (
    <section className="py-20" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 pr-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12"
          >
            Personal Portfolio Sites
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Showcase Your Talent</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <h4 className="font-bold mb-1">Creative Design</h4>
                    <p className="text-gray-700">Stand out with unique animations and interactive elements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold mb-1">Responsive Gallery</h4>
                    <p className="text-gray-700">Showcase your work beautifully on any device</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="font-bold mb-1">Personal Branding</h4>
                    <p className="text-gray-700">Build your online presence and attract opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-bold mb-1">Custom Domain</h4>
                    <p className="text-gray-700">Use your own domain name for a professional touch</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton variant="primary">
                  Create Portfolio
                </NeubrutalistButton>
                <NeubrutalistButton 
                  variant="outline"
                  onClick={() => window.open('https://portfolio-example.com', '_blank')}
                >
                  View Example
                </NeubrutalistButton>
              </div>
            </NeubrutalistCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPortfolioSection; 