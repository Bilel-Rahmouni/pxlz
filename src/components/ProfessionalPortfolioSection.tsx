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
            Professional Portfolio Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Stand Out with a Professional Portfolio</h3>
              
              {/* Target Professionals */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Perfect For:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">👨‍💼</span>
                    <div>
                      <h5 className="font-semibold">Business Professionals</h5>
                      <p className="text-gray-600">Showcase your business achievements, leadership roles, and success stories</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">🎨</span>
                    <div>
                      <h5 className="font-semibold">Designers & Creatives</h5>
                      <p className="text-gray-600">Display your work with beautiful galleries and case studies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">💡</span>
                    <div>
                      <h5 className="font-semibold">Entrepreneurs</h5>
                      <p className="text-gray-600">Present your ventures, innovations, and entrepreneurial journey</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-2xl">🚀</span>
                    <div>
                      <h5 className="font-semibold">Startups & Founders</h5>
                      <p className="text-gray-600">Tell your startup story and highlight your vision</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Portfolio Features:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">✨</span>
                    <span>Custom design that matches your personal brand</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">📱</span>
                    <span>Responsive layout for all devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">🔍</span>
                    <span>SEO optimization to get discovered</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">📊</span>
                    <span>Analytics to track portfolio performance</span>
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="flex gap-4 mt-8">
                <NeubrutalistButton variant="primary">
                  Create Your Portfolio
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