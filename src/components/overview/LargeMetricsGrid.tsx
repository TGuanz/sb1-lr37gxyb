import React from 'react';
import { Card } from '../ui/Card';
import { AreaChart } from '../charts/AreaChart';
import { LineChart } from '../charts/LineChart';
import { PieChart } from '../charts/PieChart';
import { generateChartData } from '../../utils/chartData';

export const LargeMetricsGrid: React.FC = () => {
  const { salesData, balanceData, visitorData } = generateChartData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="p-6">
        <h3 className="text-sm text-gray-400 mb-3">Total Sales</h3>
        <AreaChart data={salesData} color="#FF3B3B" height={240} showAxes />
      </Card>
      <Card className="p-6">
        <h3 className="text-sm text-gray-400 mb-3">Total Balance</h3>
        <LineChart data={balanceData} height={240} multiline />
      </Card>
      <Card className="p-6">
        <h3 className="text-sm text-gray-400 mb-3">Total Visitors</h3>
        <PieChart data={visitorData} height={240} />
      </Card>
    </div>
  );
};