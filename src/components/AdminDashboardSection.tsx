import { motion } from 'framer-motion';
import NeubrutalistCard from './NeubrutalistCard';
import NeubrutalistButton from './NeubrutalistButton';
import ScrollLayout from './ScrollLayout';

// Import images
import dashboard1 from '../assets/renklar.png';
import dashboard2 from '../assets/wyngo.png';
import dashboard3 from '../assets/iconmaker.png';

const AdminDashboardSection = () => {
  const stats = [
    { title: "Total Users", value: "1,234", change: "+12%" },
    { title: "Active Projects", value: "45", change: "+5%" },
    { title: "Revenue", value: "$12,345", change: "+8%" },
    { title: "Support Tickets", value: "23", change: "-3%" }
  ];

  const recentActivity = [
    { type: "New User", description: "John Doe signed up", time: "2 minutes ago" },
    { type: "Project Update", description: "Website redesign completed", time: "1 hour ago" },
    { type: "Payment", description: "Received payment from Client A", time: "3 hours ago" },
    { type: "Support", description: "New support ticket opened", time: "5 hours ago" }
  ];

  const images = [dashboard1, dashboard2, dashboard3];

  return (
    <ScrollLayout title="Admin Dashboard" images={images}>
      <div className="space-y-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NeubrutalistCard>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{stat.title}</h3>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </div>
              </NeubrutalistCard>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <NeubrutalistCard>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg"
                  >
                    <div>
                      <div className="font-bold">{activity.type}</div>
                      <div className="text-gray-600">{activity.description}</div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </NeubrutalistCard>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <NeubrutalistButton variant="primary">
            Add New Project
          </NeubrutalistButton>
          <NeubrutalistButton variant="secondary">
            View Reports
          </NeubrutalistButton>
        </div>
      </div>
    </ScrollLayout>
  );
};

export default AdminDashboardSection; 