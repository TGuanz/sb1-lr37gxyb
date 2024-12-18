import React, { useState } from 'react';
import { addDays, subDays, format } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Users, Plus } from 'lucide-react';
import { CalendarView, DeliveryJob, Staff } from '../../types/dispatch';
import { ScheduleGrid } from '../../components/dispatch/ScheduleGrid';
import { DispatchMap } from '../../components/dispatch/DispatchMap';
import { JobsListing } from '../../components/dispatch/JobsListing';
import 'mapbox-gl/dist/mapbox-gl.css';

const mockStaff: Staff[] = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://i.pravatar.cc/150?u=1',
    role: 'Senior Driver',
    status: 'available',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/150?u=2',
    role: 'Driver',
    status: 'busy',
  },
];

const mockJobs: DeliveryJob[] = [
  {
    id: '1',
    title: 'Delivery to Downtown',
    start: new Date(2024, 11, 11, 7, 0),
    end: new Date(2024, 11, 11, 8, 30),
    type: 'delivery',
    status: 'in-progress',
    location: '123 Downtown St',
    assignedTo: '1',
  },
  {
    id: '2',
    title: 'Delivery to Suburbs',
    start: new Date(2024, 11, 11, 8, 0),
    end: new Date(2024, 11, 11, 9, 30),
    type: 'delivery',
    status: 'completed',
    location: '456 Suburb Ave',
    assignedTo: '2',
  },
  {
    id: '3',
    title: 'Pickup from Warehouse',
    start: new Date(2024, 11, 11, 10, 0),
    end: new Date(2024, 11, 11, 11, 0),
    type: 'pickup',
    status: 'to-review',
    location: '789 Warehouse Blvd',
    assignedTo: '1',
  },
  {
    id: '4',
    title: 'Delivery to Office Park',
    start: new Date(2024, 11, 11, 13, 0),
    end: new Date(2024, 11, 11, 14, 30),
    type: 'delivery',
    status: 'unsuccessful',
    location: '321 Office Park Rd',
    assignedTo: '2',
  },
];

export const DispatchView: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 11));
  const [view, setView] = useState<CalendarView>('day');
  const [showStaffSchedule, setShowStaffSchedule] = useState(true);
  const [selectedJob, setSelectedJob] = useState<DeliveryJob | null>(null);

  const handleNewJob = () => {
    console.log('Create new job');
  };

  const handlePrevDay = () => {
    setCurrentDate((date) => subDays(date, 1));
  };

  const handleNextDay = () => {
    setCurrentDate((date) => addDays(date, 1));
  };

  const handleJobSelect = (job: DeliveryJob) => {
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-col h-full bg-dark-800">
      <div className="p-4">
        <div className="bg-gradient-card rounded-xl p-4 border border-dark-600">
          <DispatchMap jobs={mockJobs} onJobSelect={handleJobSelect} />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2">
        <button
          onClick={handleNewJob}
          className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>New Job</span>
        </button>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg flex items-center space-x-2 transition-colors">
            <Calendar className="h-5 w-5" />
            <span>Calendar</span>
          </button>
          <button 
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              showStaffSchedule 
                ? 'bg-accent-500 text-white' 
                : 'bg-dark-700 hover:bg-dark-600 text-white'
            }`}
            onClick={() => setShowStaffSchedule(!showStaffSchedule)}
          >
            <Users className="h-5 w-5" />
            <span>Staff Schedule</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-3 border-y border-dark-600">
        <div className="flex items-center space-x-4">
          <button onClick={handlePrevDay} className="text-dark-300 hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold text-white">
            {format(currentDate, 'MMMM dd, yyyy')}
          </h2>
          <button onClick={handleNextDay} className="text-dark-300 hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex bg-dark-700 rounded-lg p-1">
          <button 
            onClick={() => setView('day')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'day' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Day
          </button>
          <button 
            onClick={() => setView('week')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'week' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Week
          </button>
          <button 
            onClick={() => setView('month')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              view === 'month' ? 'bg-accent-500 text-white' : 'text-dark-300 hover:text-white'
            }`}
          >
            Month
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <ScheduleGrid
          staff={mockStaff}
          jobs={mockJobs}
          startHour={5}
          endHour={15}
          showStaffSchedule={showStaffSchedule}
        />
      </div>

      <div className="px-4 pb-4">
        <JobsListing jobs={mockJobs} onJobSelect={handleJobSelect} />
      </div>
    </div>
  );
};