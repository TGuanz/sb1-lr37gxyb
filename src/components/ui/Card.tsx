import React from 'react';
import { cn } from '../../utils/styles';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-[#1C1C1E] rounded-xl border border-[#2A2D32]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};