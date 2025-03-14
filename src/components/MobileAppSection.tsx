import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

const MobileSection = () => {
  return (
    <section className="py-20" id="mobile">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 pr-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            Mobile App Development
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-3xl font-bold mb-6">Small Business Mobile App</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛍️</span>
                  <div>
                    <h4 className="font-bold mb-1">Customer Loyalty Program</h4>
                    <p className="text-gray-700">Digital loyalty cards, rewards, and special offers for your customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-bold mb-1">Business Dashboard</h4>
                    <p className="text-gray-700">Track sales, customer engagement, and business analytics in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔔</span>
                  <div>
                    <h4 className="font-bold mb-1">Push Notifications</h4>
                    <p className="text-gray-700">Send updates, promotions, and announcements directly to customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💳</span>
                  <div>
                    <h4 className="font-bold mb-1">Mobile Payments</h4>
                    <p className="text-gray-700">Secure in-app payments and digital transactions</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton variant="primary">
                  Get Your App
                </NeubrutalistButton>
                <NeubrutalistButton 
                  variant="outline"
                  onClick={() => window.open('https://wyngo-app.com', '_blank')}
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

export default MobileSection; 