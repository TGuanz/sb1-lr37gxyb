export interface DeliveryJob {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'delivery' | 'pickup';
  status: 'pending' | 'in-progress' | 'completed' | 'unsuccessful' | 'to-review';
  location: string;
  assignedTo: string;
}

export interface Staff {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: 'available' | 'busy' | 'offline';
}

export type CalendarView = 'day' | 'week' | 'month';