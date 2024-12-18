import { LucideIcon, ClipboardList, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface TaskMetric {
  title: string;
  value: number;
  change: number;
  icon: LucideIcon;
  color: string;
}

export const generateChartData = () => {
  const taskMetrics: TaskMetric[] = [
    { title: 'Total Tasks', value: 34, change: -25, icon: ClipboardList, color: '#40C4FF' },
    { title: 'Tasks to do', value: 14, change: 10, icon: Clock, color: '#FFB607' },
    { title: 'Tasks Overdue', value: 5, change: -10, icon: AlertCircle, color: '#FF3B3B' },
    { title: 'Completed Tasks', value: 7, change: 20, icon: CheckCircle, color: '#00E885' },
  ];

  const salesData = Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    value: 1200000 - (Math.sin(i / 2) * 200000),
  }));

  const balanceData = Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    value1: 1500 + Math.sin(i) * 300,
    value2: 1200 + Math.cos(i) * 400,
  }));

  const userData = Array.from({ length: 30 }, (_, i) => ({
    value: 70 + Math.sin(i / 3) * 30,
  }));

  const taskHistoryData = [
    { year: '2015', total: 48, todo: 25, completed: 15, overdue: 8 },
    { year: '2016', total: 62, todo: 15, completed: 48, overdue: 12 },
    { year: '2017', total: 75, todo: 18, completed: 55, overdue: 12 },
    { year: '2018', total: 85, todo: 30, completed: 65, overdue: 7 },
    { year: '2019', total: 98, todo: 15, completed: 82, overdue: 8 },
  ];

  const reportData = [
    { month: 'Jan', value2018: 25, value2019: 10 },
    { month: 'Feb', value2018: 42, value2019: 25 },
    { month: 'Mar', value2018: 35, value2019: 18 },
    { month: 'Apr', value2018: 42, value2019: 34 },
    { month: 'May', value2018: 28, value2019: 42 },
    { month: 'Jun', value2018: 18, value2019: 25 },
    { month: 'Jul', value2018: 35, value2019: 30 },
    { month: 'Aug', value2018: 42, value2019: 18 },
  ];

  const visitorData = [
    { name: 'New', value: 70, color: '#40C4FF' },
    { name: 'Returning', value: 30, color: '#00E885' }
  ];

  return {
    taskMetrics,
    salesData,
    balanceData,
    userData,
    taskHistoryData,
    reportData,
    visitorData
  };
};