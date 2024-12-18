import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

interface DateHeaderProps {
  currentDate: Date;
  onPrevDay: () => void;
  onNextDay: () => void;
}

export const DateHeader: React.FC<DateHeaderProps> = ({
  currentDate,
  onPrevDay,
  onNextDay,
}) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-dark-700 border-b border-dark-600">
      <div className="flex items-center space-x-4">
        <button
          onClick={onPrevDay}
          className="p-1 text-dark-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold text-white">
          {format(currentDate, 'MMMM dd, yyyy')}
        </h2>
        <button
          onClick={onNextDay}
          className="p-1 text-dark-300 hover:text-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};