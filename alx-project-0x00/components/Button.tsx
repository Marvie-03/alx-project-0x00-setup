import { ButtonProps } from '@/interfaces';
import React from 'react';
const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  styles = '',
}) => {
  // Map sizes to Tailwind classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Map shapes to Tailwind classes
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  // Combine all classes
  const combinedClasses = `
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
    ${styles}
    bg-blue-500 text-white font-medium
    hover:bg-blue-600 transition-colors
    focus:outline-none focus:ring-2 focus:ring-blue-400
  `;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {title}
    </button>
  );
};

export default Button;
