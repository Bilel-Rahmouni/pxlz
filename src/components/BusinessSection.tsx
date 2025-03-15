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
            Small Business Websites
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-3xl font-bold mb-6">Grow Your Local Presence</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="font-bold mb-1">Local SEO Optimization</h4>
                    <p className="text-gray-700">Rank higher in local searches and attract nearby customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💳</span>
                  <div>
                    <h4 className="font-bold mb-1">Online Booking & Payments</h4>
                    <p className="text-gray-700">Let customers book appointments and pay securely online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold mb-1">Mobile-First Design</h4>
                    <p className="text-gray-700">Beautiful on all devices with fast loading speeds</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h4 className="font-bold mb-1">24/7 Customer Support</h4>
                    <p className="text-gray-700">Get help whenever you need it with our dedicated support team</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton 
                  variant="primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Website
                </NeubrutalistButton>
                <NeubrutalistButton 
                  variant="outline"
                  onClick={() => window.open('https://lumara.hu', '_blank')}
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