import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeubrutalistCardProps {
  children: ReactNode;
  className?: string;
  // hoverEffect?: boolean;
}

const NeubrutalistCard = ({
  children,
  // className = '',
  // hoverEffect = true
}: NeubrutalistCardProps) => {
  return (
    <motion.div
      // className={`
      //   bg-white
      //    ${hoverEffect ? 'hover:translate-y-1 hover:border-b-2 active:translate-y-2 active:border-b-1' : ''}
      //   transition-all duration-200
      //   ${className}
      // `}
      // whileHover={hoverEffect ? { scale: 1.02 } : {}}
      // whileTap={hoverEffect ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default NeubrutalistCard; 