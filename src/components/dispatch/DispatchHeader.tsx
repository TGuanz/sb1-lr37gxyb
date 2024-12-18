import React from 'react';
import { Plus, Calendar, Users } from 'lucide-react';
import { CalendarView } from '../../types/dispatch';

interface DispatchHeaderProps {
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
  onNewJob: () => void;
  showStaffSchedule: boolean;
  onToggleStaffSchedule: () => void;
}

export const DispatchHeader: React.FC<DispatchHeaderProps> = ({
  view,
  onViewChange,
  onNewJob,
  showStaffSchedule,
  onToggleStaffSchedule,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-dark-700 border-b border-dark-600">
      <div className="flex items-center space-x-4">
        <button
          onClick={onNewJob}
          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Job</span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleStaffSchedule}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            showStaffSchedule
              ? 'bg-accent-500 text-white'
              : 'text-dark-300 hover:text-white'
          }`}
        >
          <Users className="h-5 w-5" />
          <span>Staff Schedule</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 text-dark-300 hover:text-white transition-colors">
          <Calendar className="h-5 w-5" />
          <span>Calendar</span>
        </button>
        <div className="bg-dark-800 rounded-lg p-1">
          <button
            onClick={() => onViewChange('day')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'day' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Day
          </button>
          <button
            onClick={() => onViewChange('week')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'week' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => onViewChange('month')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'month' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Month
          </button>
        </div>
      </div>
    </div>
  );
};