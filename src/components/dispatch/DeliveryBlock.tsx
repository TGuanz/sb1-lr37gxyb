import React from 'react';
import { Package, ArrowUpCircle } from 'lucide-react';
import { DeliveryJob } from '../../types/dispatch';

interface DeliveryBlockProps {
  job: DeliveryJob;
  onClick: (job: DeliveryJob) => void;
}

export const DeliveryBlock: React.FC<DeliveryBlockProps> = ({ job, onClick }) => {
  const getTopPosition = (date: Date) => {
    const minutes = date.getHours() * 60 + date.getMinutes() - 5 * 60; // Subtract 5 hours (start time)
    return (minutes / 60) * 80; // 80px per hour
  };

  const getHeight = (start: Date, end: Date) => {
    const diff = end.getTime() - start.getTime();
    const minutes = diff / 1000 / 60;
    return (minutes / 60) * 80; // 80px per hour
  };

  return (
    <div
      onClick={() => onClick(job)}
      className={`absolute rounded-lg p-2 cursor-pointer pointer-events-auto transition-transform hover:scale-[1.02] ${
        job.type === 'delivery'
          ? 'bg-accent-500 bg-opacity-20 border-l-4 border-accent-500'
          : 'bg-yellow-500 bg-opacity-20 border-l-4 border-yellow-500'
      }`}
      style={{
        top: `${getTopPosition(job.start)}px`,
        height: `${getHeight(job.start, job.end)}px`,
        left: '8px',
        right: '8px',
      }}
    >
      <div className="flex items-start space-x-2">
        {job.type === 'delivery' ? (
          <Package className="h-4 w-4 text-accent-500" />
        ) : (
          <ArrowUpCircle className="h-4 w-4 text-yellow-500" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-white truncate">{job.title}</p>
          <p className="text-xs text-dark-200 truncate">{job.location}</p>
        </div>
      </div>
    </div>
  );
};