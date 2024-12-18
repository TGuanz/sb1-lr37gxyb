import React from 'react';
import { ClipboardList, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { SmallMetricCard } from '../metrics/SmallMetricCard';

export const SmallMetricsGrid: React.FC = () => {
  const metrics = [
    { title: 'Total Tasks', value: 34, change: -25, icon: ClipboardList, color: '#40C4FF' },
    { title: 'Tasks to do', value: 14, change: 10, icon: Clock, color: '#FFB607' },
    { title: 'Tasks Overdue', value: 5, change: -10, icon: AlertCircle, color: '#FF3B3B' },
    { title: 'Completed Tasks', value: 7, change: 20, icon: CheckCircle, color: '#00E885' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <SmallMetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
};