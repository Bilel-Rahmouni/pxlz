import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <h1 className="text-3xl font-thin relative">
          <span className="relative z-10 text-white px-1">
            pxlz
          </span>
           
      </h1>
    </Link>
  );
};

export default Logo; 