import React from 'react';
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface BarChartProps {
  data: any[];
  height?: number;
  stacked?: boolean;
  color?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  height = 60,
  stacked = false,
  color = '#00FF94'
}) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey={stacked ? "year" : undefined}
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1C1C1E',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
            }}
          />
          {stacked ? (
            <>
              <Bar dataKey="total" fill="#40C4FF" stackId="a" />
              <Bar dataKey="todo" fill="#FFB607" stackId="a" />
              <Bar dataKey="completed" fill="#00FF94" stackId="a" />
              <Bar dataKey="overdue" fill="#FF4B4B" stackId="a" />
            </>
          ) : (
            <Bar dataKey="value" fill={color} />
          )}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};