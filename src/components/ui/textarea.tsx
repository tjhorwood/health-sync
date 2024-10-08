'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export type TextareaProps = InputProps;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          var(--teal-400), 
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='group/input rounded-lg p-[2px] transition duration-300'
      >
        <textarea
          className={cn(
            'duration-400 flex min-h-12 w-full rounded-sm border bg-white px-3 py-2 ring-offset-white transition placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none',
            className,
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
