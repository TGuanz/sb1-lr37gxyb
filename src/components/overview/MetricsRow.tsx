import React from 'react';
import { MetricCard } from '../metrics/MetricCard';
import { AreaChart } from '../charts/AreaChart';
import { BarChart } from '../charts/BarChart';
import { generateChartData } from '../../utils/chartData';

export const MetricsRow: React.FC = () => {
  const { salesData, userData } = generateChartData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Sales"
        value="$1.2M"
        change={-25}
        chart={<AreaChart data={salesData} color="#FF3B3B" />}
      />
      <MetricCard
        title="Total Balance"
        value="$1,534"
        change={7}
        chart={<AreaChart data={salesData} color="#00E885" />}
      />
      <MetricCard
        title="Total Visitors"
        value="155K"
        change={25}
        chart={<AreaChart data={salesData} color="#40C4FF" />}
      />
      <MetricCard
        title="Total Users"
        value="4,234"
        change={19}
        chart={<BarChart data={userData} color="#00E885" />}
      />
    </div>
  );
};