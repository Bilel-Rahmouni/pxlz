import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const FooterLogo = () => {
  return (
    <div className="inline-block">
      <h1 className="text-3xl font-extrabold relative">
        <span className="relative inline-block">
          <span className="relative z-10 text-black px-1 bg-white rounded-md">
            pxlz
          </span>
          <span className="absolute inset-0 text-white px-1" style={{
            textShadow: `
              2px 2px 0 #fff,
              -2px 2px 0 #fff,
              -2px -2px 0 #fff,
              2px -2px 0 #fff,
              3px 3px 0 #fff,
              -3px 3px 0 #fff,
              -3px -3px 0 #fff,
              3px -3px 0 #fff
            `,
            WebkitTextStroke: '2px white'
          }}>
            pxlz
          </span>
        </span>
      </h1>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <FooterLogo />
            <p className="text-gray-400 mt-4">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2012 - {currentYear} pxlz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 