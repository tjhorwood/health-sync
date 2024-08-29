import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({ children }) => {
  return (
    <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent'>
      {children}
    </span>
  );
};

export default GradientText;
