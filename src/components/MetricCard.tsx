import React, { ReactNode } from 'react';
import { cn } from '../utils/styles';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  chart: ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  chart,
}) => {
  return (
    <div className="bg-dark-900/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-sm text-gray-400">{title}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-white">{value}</span>
            <span 
              className={cn(
                "text-sm font-medium",
                change > 0 ? "text-[#00FF94]" : "text-[#FF4B4B]"
              )}
            >
              {change > 0 ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </div>
      <div className="h-16">
        {chart}
      </div>
    </div>
  );
};