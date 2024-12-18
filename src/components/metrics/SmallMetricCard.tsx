import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../../utils/styles';

interface SmallMetricCardProps {
  title: string;
  value: number;
  change: number;
  icon: LucideIcon;
  color: string;
}

export const SmallMetricCard: React.FC<SmallMetricCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color,
}) => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: `${color}15`,
              boxShadow: `0 0 20px ${color}20`
            }}
          >
            <Icon className="h-5 w-5" style={{ color }} />
          </div>
          <div>
            <p className="text-sm text-gray-400">{title}</p>
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
      </div>
    </Card>
  );
};