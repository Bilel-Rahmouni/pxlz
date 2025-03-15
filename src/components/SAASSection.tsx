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
            Enterprise SaaS Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NeubrutalistCard className="p-8">
              <h3 className="text-3xl font-bold mb-6">Scale Your Business Operations</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="font-bold mb-1">High Performance</h4>
                    <p className="text-gray-700">Enterprise-grade infrastructure with 99.9% uptime guarantee</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-bold mb-1">API Integration</h4>
                    <p className="text-gray-700">Seamless integration with your existing tools and workflows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h4 className="font-bold mb-1">Multi-tenant Architecture</h4>
                    <p className="text-gray-700">Secure data isolation and role-based access control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h4 className="font-bold mb-1">Custom Configuration</h4>
                    <p className="text-gray-700">Tailor the platform to match your business needs</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <NeubrutalistButton variant="primary">
                  Schedule Demo
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