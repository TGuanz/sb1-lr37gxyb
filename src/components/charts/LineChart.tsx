import React from 'react';
import { Line, LineChart as RechartsLineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface LineChartProps {
  data: any[];
  height?: number;
  multiline?: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  height = 60,
  multiline = false
}) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey={multiline ? "month" : "date"}
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
          {multiline ? (
            <>
              <Line
                type="monotone"
                dataKey="value2018"
                stroke="#40C4FF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="value2019"
                stroke="#00FF94"
                strokeWidth={2}
                dot={false}
              />
            </>
          ) : (
            <Line
              type="monotone"
              dataKey="value"
              stroke="#40C4FF"
              strokeWidth={2}
              dot={false}
            />
          )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};