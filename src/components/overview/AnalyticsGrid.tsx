import React from 'react';
import { Card } from '../ui/Card';
import { BarChart } from '../charts/BarChart';
import { LineChart } from '../charts/LineChart';
import { generateChartData } from '../../utils/chartData';

export const AnalyticsGrid: React.FC = () => {
  const { taskHistoryData, reportData } = generateChartData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="p-6">
        <h3 className="text-sm text-gray-400 mb-3">Tasks</h3>
        <BarChart data={taskHistoryData} height={300} stacked />
      </Card>
      <Card className="p-6">
        <h3 className="text-sm text-gray-400 mb-3">Recent Report</h3>
        <LineChart data={reportData} height={300} multiline />
      </Card>
    </div>
  );
};