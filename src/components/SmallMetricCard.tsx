import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SmallMetricCardProps {
  title: string;
  value: number | string;
  change: number;
  icon: LucideIcon;
  color: string;
}

const SmallMetricCard: React.FC<SmallMetricCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color,
}) => {
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 flex items-center justify-between">
      {/* Icon */}
      <div className="flex items-center space-x-3">
        <Icon 
          size={24} 
          className="opacity-90"
          style={{ color }}
        />
        <span className="text-2xl font-semibold text-white/90">
          {value}
        </span>
      </div>

      {/* Change percentage */}
      <div
        className={`text-sm font-medium ${
          change >= 0 ? 'text-emerald-400' : 'text-red-400'
        }`}
      >
        {change >= 0 ? '+' : ''}
        {change}%
      </div>

      {/* Title at top */}
      <div className="absolute top-2 left-4 text-sm text-gray-400">
        {title}
      </div>
    </div>
  );
};

export default SmallMetricCard;