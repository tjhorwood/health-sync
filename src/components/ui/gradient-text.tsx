import React from 'react';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string
}

const GradientText: React.FC<GradientTextProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
