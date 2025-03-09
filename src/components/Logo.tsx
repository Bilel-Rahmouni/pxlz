const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <h1 className="text-2xl md:text-3xl font-extrabold relative">
        <span className="relative inline-block">
          <span className="relative z-10 text-white px-1 bg-black rounded-md">
            pxlz
          </span>
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
    </a>
  );
};

export default Logo; 