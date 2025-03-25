import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import employee from '../assets/employee.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwpaoyj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      text: "contact@pxlzstudio.com", 
      label: "Email Us",
      description: "We'll respond within 24 hours"
    } 
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 border-4 border-black"
            >
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-800 text-lg mb-6">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-black text-white px-8 py-4 font-bold text-lg border-4 border-black hover:bg-white hover:text-black transition-colors duration-300"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
 
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center max-w-[1200px] mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 border-[1px] border-b-4
                    rounded-b-lg
                     border-black order-2 lg:order-1"
          >
            <div className="space-y-6 mb-8">
              <div className="max-w-md">
                <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif' }}>
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-800">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6  hover:translate-x-2 hover:translate-y-2 transition-transform duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-3">
                        <info.icon className="text-2xl text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{info.label}</h3>
                        <p className="text-lg text-gray-800 mb-2">{info.text}</p>
                        <p className="text-base text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                    errors.name ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 font-bold">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                    errors.email ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 font-bold">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg 
                font-bold mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 resize-none ${
                    errors.message ? 'border-2 border-red-500' : ''
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 font-bold">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-black text-white py-4 font-bold text-lg border-4 border-black hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Employee Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto h-[500px]
             overflow-hidden order-1 lg:order-2"
          >
            <img 
              src={employee} 
              alt="Customer Service Representative" 
              className="absolute inset-0 w-full h-full 
              object-cover"
            />
            <div className="absolute inset-0 
            bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 