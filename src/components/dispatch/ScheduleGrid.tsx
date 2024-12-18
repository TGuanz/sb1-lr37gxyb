import React from 'react';
import { format } from 'date-fns';
import { Package, ArrowUpCircle } from 'lucide-react';
import { Staff, DeliveryJob } from '../../types/dispatch';

interface ScheduleGridProps {
  staff: Staff[];
  jobs: DeliveryJob[];
  startHour: number;
  endHour: number;
  showStaffSchedule: boolean;
}

export const ScheduleGrid: React.FC<ScheduleGridProps> = ({
  staff,
  jobs,
  startHour,
  endHour,
  showStaffSchedule,
}) => {
  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i
  );

  const getJobsForStaff = (staffId: string) => {
    return jobs.filter(job => job.assignedTo === staffId);
  };

  const getJobPosition = (job: DeliveryJob) => {
    const startHourDiff = job.start.getHours() - startHour;
    const startMinutes = job.start.getMinutes();
    const durationMinutes = (job.end.getTime() - job.start.getTime()) / (1000 * 60);
    
    const left = `${(startHourDiff + startMinutes / 60) * (100 / hours.length)}%`;
    const width = `${(durationMinutes / 60) * (100 / hours.length)}%`;
    
    return { left, width };
  };

  return (
    <div className="h-full overflow-auto">
      <div className="inline-block min-w-full">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-dark-800 flex">
          <div className="flex-none w-48 border-r border-dark-600">
            <div className="h-12 px-4 flex items-center">
              <span className="text-sm font-medium text-dark-200">Staff</span>
            </div>
          </div>
          <div className="flex-1 flex">
            {hours.map(hour => (
              <div key={hour} className="flex-1 min-w-[100px]">
                <div className="h-12 border-r border-dark-600 px-2 flex items-center justify-center">
                  <span className="text-sm font-medium text-dark-200">
                    {format(new Date().setHours(hour, 0), 'HH:mm')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff rows */}
        {staff.map(member => (
          <div key={member.id} className="flex">
            <div className="flex-none w-48 border-r border-dark-600">
              <div className="h-20 px-4 py-3 bg-dark-700">
                <div className="flex items-center space-x-3">
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
                  <div>
                    <p className="text-sm font-medium text-white">{member.name}</p>
                    <p className="text-xs text-dark-300">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="flex h-20">
                {hours.map(hour => (
                  <div
                    key={`${member.id}-${hour}`}
                    className="flex-1 min-w-[100px] border-r border-dark-600 bg-dark-700 bg-opacity-30"
                  >
                    {hour % 2 === 0 && (
                      <div className="absolute inset-0 bg-dark-600 bg-opacity-20" />
                    )}
                  </div>
                ))}
              </div>
              {getJobsForStaff(member.id).map(job => {
                const { left, width } = getJobPosition(job);
                return (
                  <div
                    key={job.id}
                    style={{ left, width }}
                    className={`absolute top-1 h-[calc(100%-8px)] rounded-lg p-2 cursor-pointer transition-transform hover:scale-[1.02] ${
                      job.type === 'delivery'
                        ? 'bg-accent-500 bg-opacity-20 border-l-4 border-accent-500'
                        : 'bg-yellow-500 bg-opacity-20 border-l-4 border-yellow-500'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {job.type === 'delivery' ? (
                        <Package className="h-4 w-4 text-accent-500 flex-shrink-0" />
                      ) : (
                        <ArrowUpCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {job.title}
                        </p>
                        <p className="text-xs text-dark-200 truncate">{job.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};