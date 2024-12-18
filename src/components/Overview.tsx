import React from 'react';
import { MetricsRow } from './overview/MetricsRow';
import { SmallMetricsGrid } from './overview/SmallMetricsGrid';
import { LargeMetricsGrid } from './overview/LargeMetricsGrid';
import { AnalyticsGrid } from './overview/AnalyticsGrid';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-6 px-2">
      {/* 4 columns - Small metric cards */}
      <SmallMetricsGrid />

      {/* 4 columns - Medium metric cards with charts */}
      <MetricsRow />

      {/* 3 columns - Large metric cards with detailed charts */}
      <LargeMetricsGrid />

      {/* 2 columns - Analytics section */}
      <AnalyticsGrid />
    </div>
  );
};