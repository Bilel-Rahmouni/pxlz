import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';

const SAASSection = () => {
  return (
    <section className="py-20" id="saas">
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-1/2 pr-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-12"
            style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}
          >
            SaaS Development
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-3xl font-bold mb-6">Business Management Platform</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <h4 className="font-bold mb-1">Appointment Scheduling</h4>
                    <p className="text-gray-700">Online booking system with automated reminders and calendar sync</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📝</span>
                  <div>
                    <h4 className="font-bold mb-1">Invoice Management</h4>
                    <p className="text-gray-700">Create, send, and track invoices with automatic payment reminders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-bold mb-1">Customer Management</h4>
                    <p className="text-gray-700">Track customer interactions, history, and preferences in one place</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h4 className="font-bold mb-1">Business Analytics</h4>
                    <p className="text-gray-700">Real-time insights into your business performance and growth</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton variant="primary">
                  Start Free Trial
                </NeubrutalistButton>
                <NeubrutalistButton 
                  variant="outline"
                  onClick={() => window.open('https://iconmaker.pro', '_blank')}
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

export default SAASSection; 