import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <h1 className="text-3xl font-extrabold relative">
        {/* White fill with black outline effect */}
        <span className="relative inline-block">
          <span className="relative z-10 text-white px-1">
            pxlz
          </span>
          {/* Text outline effect using multiple shadows */}
          <span className="absolute inset-0 text-black px-1" style={{
            textShadow: `
              2px 2px 0 #000,
              -2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              3px 3px 0 #000,
              -3px 3px 0 #000,
              -3px -3px 0 #000,
              3px -3px 0 #000
            `,
            WebkitTextStroke: '2px black'
          }}>
            pxlz
          </span>
        </span>
      </h1>
    </Link>
  );
};

export default Logo; 