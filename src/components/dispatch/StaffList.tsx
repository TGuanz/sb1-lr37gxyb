import React from 'react';
import { Staff } from '../../types/dispatch';

interface StaffListProps {
  staff: Staff[];
  onStaffSelect: (staffId: string) => void;
  selectedStaffId?: string;
}

export const StaffList: React.FC<StaffListProps> = ({
  staff,
  onStaffSelect,
  selectedStaffId,
}) => {
  return (
    <div className="bg-dark-700 rounded-lg p-4 w-64 space-y-4">
      <h3 className="text-lg font-semibold text-white">Staff Schedule</h3>
      <div className="space-y-2">
        {staff.map((member) => (
          <button
            key={member.id}
            onClick={() => onStaffSelect(member.id)}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
              selectedStaffId === member.id
                ? 'bg-accent-500 bg-opacity-20'
                : 'hover:bg-dark-600'
            }`}
          >
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-8 w-8 rounded-full"
              />
              <span
                className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-dark-700 ${
                  member.status === 'available'
                    ? 'bg-green-500'
                    : member.status === 'busy'
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {member.name}
              </p>
              <p className="text-xs text-dark-300">{member.role}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};