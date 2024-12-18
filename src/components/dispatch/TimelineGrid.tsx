import React from 'react';
import { format } from 'date-fns';

interface TimelineGridProps {
  startHour: number;
  endHour: number;
}

export const TimelineGrid: React.FC<TimelineGridProps> = ({ startHour, endHour }) => {
  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i
  );

  return (
    <div className="relative grid grid-cols-[80px_1fr] h-full">
      <div className="border-r border-dark-600">
        {hours.map((hour) => (
          <div
            key={hour}
            className="h-20 border-b border-dark-600 text-dark-300 text-sm px-2 py-1"
          >
            {format(new Date().setHours(hour, 0), 'HH:mm')}
          </div>
        ))}
      </div>
      <div className="relative">
        {hours.map((hour) => (
          <div
            key={hour}
            className="h-20 border-b border-dark-600 bg-dark-700 bg-opacity-30"
          />
        ))}
      </div>
    </div>
  );
};