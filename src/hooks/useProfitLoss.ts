import { useState, useEffect } from 'react';
import { fetchProfitLossData } from '../services/airtableService';

interface ProfitLossData {
  revenue: any[];
  expenses: any[];
  netProfit: any[];
  comparison: any[];
  profitMargin: any[];
}

export const useProfitLoss = () => {
  const [data, setData] = useState<ProfitLossData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const records = await fetchProfitLossData();
        // Transform the data as needed
        setData({
          revenue: generateMockData(),
          expenses: generateMockData(),
          netProfit: generateMockData(),
          comparison: generateComparisonData(),
          profitMargin: generateMarginData(),
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

// Helper functions to generate mock data
const generateMockData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    date: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    value: Math.floor(Math.random() * 100000),
  }));
};

const generateComparisonData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    revenue: Math.floor(Math.random() * 100000),
    expenses: Math.floor(Math.random() * 50000),
  }));
};

const generateMarginData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    value: Math.floor(Math.random() * 100),
  }));
};