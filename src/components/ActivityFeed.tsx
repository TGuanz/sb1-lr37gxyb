import React from 'react';
import { Clock } from 'lucide-react';
import { CustomerActivity } from '../types/dashboard';

interface ActivityFeedProps {
  activities: CustomerActivity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex space-x-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <Clock className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.name}</span> {activity.action}
                {activity.value && (
                  <span className="font-medium"> ${activity.value}</span>
                )}
              </p>
              <p className="text-sm text-gray-500">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};