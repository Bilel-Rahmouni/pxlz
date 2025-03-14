import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeubrutalistButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
}

const NeubrutalistButton = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  disabled = false,
  fullWidth = false
}: NeubrutalistButtonProps) => {
  const baseStyles = "relative px-6 py-3 font-bold text-lg transition-all duration-200";
  const variantStyles = {
    primary: "bg-black text-white border-black hover:bg-white hover:text-black",
    secondary: "bg-white text-black border-black hover:bg-black hover:text-white",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${widthStyles}
        ${disabledStyles}
        ${className}
        border-[1px] border-b-4 rounded-b-lg
        disabled:hover:translate-y-0 disabled:hover:border-b-4
        hover:translate-y-1 hover:border-b-2
        active:translate-y-2 active:border-b-1
      `}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default NeubrutalistButton; 