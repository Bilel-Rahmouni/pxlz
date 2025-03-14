import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

const BusinessSection = () => {
  return (
    <section className="py-20" id="business">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 pr-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            Business Website Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-3xl font-bold mb-6">Complete Business Website Package</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-bold mb-1">Professional Design</h4>
                    <p className="text-gray-700">Custom-designed website that reflects your brand identity and values</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold mb-1">Mobile Responsive</h4>
                    <p className="text-gray-700">Perfect display on all devices - phones, tablets, and desktops</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <h4 className="font-bold mb-1">SEO Optimized</h4>
                    <p className="text-gray-700">Built-in SEO features to help customers find your business online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold mb-1">Fast Performance</h4>
                    <p className="text-gray-700">Lightning-fast loading speeds for better user experience</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton variant="primary">
                  Start Your Project
                </NeubrutalistButton>
                <NeubrutalistButton 
                  variant="outline"
                  onClick={() => window.open('https://business-example.com', '_blank')}
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

export default BusinessSection; 