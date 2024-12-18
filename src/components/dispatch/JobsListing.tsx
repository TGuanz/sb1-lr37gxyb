import React, { useState } from 'react';
import { Package, ArrowUpCircle, Clock, MapPin, CheckCircle, AlertCircle, RotateCcw } from 'lucide-react';
import { DeliveryJob } from '../../types/dispatch';
import { format } from 'date-fns';

interface JobsListingProps {
  jobs: DeliveryJob[];
  onJobSelect: (job: DeliveryJob) => void;
}

type JobFilter = 'all' | 'completed' | 'in-progress' | 'unsuccessful' | 'to-review';

export const JobsListing: React.FC<JobsListingProps> = ({ jobs, onJobSelect }) => {
  const [filter, setFilter] = useState<JobFilter>('all');

  const filterJobs = (jobs: DeliveryJob[]) => {
    switch (filter) {
      case 'completed':
        return jobs.filter(job => job.status === 'completed');
      case 'in-progress':
        return jobs.filter(job => job.status === 'in-progress');
      case 'unsuccessful':
        return jobs.filter(job => job.status === 'unsuccessful');
      case 'to-review':
        return jobs.filter(job => job.status === 'to-review');
      default:
        return jobs;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-blue-400';
      case 'unsuccessful':
        return 'text-red-400';
      case 'to-review':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'in-progress':
        return <RotateCcw className="h-5 w-5" />;
      case 'unsuccessful':
        return <AlertCircle className="h-5 w-5" />;
      case 'to-review':
        return <Clock className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const filteredJobs = filterJobs(jobs);

  return (
    <div className="bg-dark-700 rounded-lg p-4 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white">Jobs</h2>
        <div className="flex space-x-2">
          {(['all', 'completed', 'in-progress', 'unsuccessful', 'to-review'] as JobFilter[]).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === filterType
                  ? 'bg-accent-500 text-white'
                  : 'text-dark-300 hover:text-white bg-dark-600 hover:bg-dark-500'
              }`}
            >
              {filterType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredJobs.map(job => (
          <div
            key={job.id}
            onClick={() => onJobSelect(job)}
            className="bg-dark-800 rounded-lg p-4 hover:bg-dark-600 transition-colors cursor-pointer border border-dark-600"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  job.type === 'delivery' ? 'bg-accent-500 bg-opacity-10' : 'bg-yellow-500 bg-opacity-10'
                }`}>
                  {job.type === 'delivery' ? (
                    <Package className={`h-5 w-5 ${job.type === 'delivery' ? 'text-accent-500' : 'text-yellow-500'}`} />
                  ) : (
                    <ArrowUpCircle className={`h-5 w-5 ${job.type === 'delivery' ? 'text-accent-500' : 'text-yellow-500'}`} />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-medium">{job.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-4 w-4 text-dark-300" />
                    <p className="text-sm text-dark-300">{job.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-dark-200">
                    {format(job.start, 'HH:mm')} - {format(job.end, 'HH:mm')}
                  </p>
                  <div className={`flex items-center space-x-1 mt-1 ${getStatusColor(job.status)}`}>
                    {getStatusIcon(job.status)}
                    <span className="text-sm font-medium">
                      {job.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};